/**
 * greeting.js
 * Detects login IP timezone and provides dynamic time-based greetings:
 * - Good morning (05:00 - 11:59) 🌅
 * - Good afternoon (12:00 - 16:59) ☀️
 * - Good evening (17:00 - 20:59) 🌆
 * - Good night (21:00 - 04:59) 🌙
 */

import { useState, useEffect } from 'react';

/**
 * Calculates greeting based on hour in specific timezone
 * @param {Date} date 
 * @param {string} timeZone 
 */
export function getGreetingForHour(date = new Date(), timeZone) {
  try {
    const tz = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';
    
    // Extract hour in 24-hour format for the specified timezone
    const hourFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      hour12: false,
      timeZone: tz
    });
    
    let hour = parseInt(hourFormatter.format(date), 10);
    // In en-US, 24 can sometimes be returned at midnight depending on browser
    if (hour === 24) hour = 0;

    let greeting = 'Good morning';
    let icon = '🌅';
    let period = 'morning';

    if (hour >= 5 && hour < 12) {
      greeting = 'Good morning';
      icon = '🌅';
      period = 'morning';
    } else if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon';
      icon = '☀️';
      period = 'afternoon';
    } else if (hour >= 17 && hour < 21) {
      greeting = 'Good evening';
      icon = '🌆';
      period = 'evening';
    } else {
      greeting = 'Good night';
      icon = '🌙';
      period = 'night';
    }

    const timeString = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: tz
    }).format(date);

    return {
      greeting,
      icon,
      period,
      hour,
      timeString,
      timeZone: tz
    };
  } catch (err) {
    // Graceful fallback
    const hour = date.getHours();
    let greeting = 'Good morning';
    let icon = '🌅';
    if (hour >= 12 && hour < 17) {
      greeting = 'Good afternoon';
      icon = '☀️';
    } else if (hour >= 17 && hour < 21) {
      greeting = 'Good evening';
      icon = '🌆';
    } else if (hour >= 21 || hour < 5) {
      greeting = 'Good night';
      icon = '🌙';
    }

    return {
      greeting,
      icon,
      period: greeting.toLowerCase().replace('good ', ''),
      hour,
      timeString: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      timeZone: 'Local'
    };
  }
}

/**
 * Attempts to fetch IP timezone from online IP lookup services with local fallback
 */
export async function getIpTimezone() {
  // Check sessionStorage cache first
  const cached = sessionStorage.getItem('echaar_ip_tz');
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {
      // ignore
    }
  }

  const defaultTz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);

    const resp = await fetch('https://ipapi.co/json/', {
      signal: controller.signal,
      headers: { 'Accept': 'application/json' }
    });
    clearTimeout(timeoutId);

    if (resp.ok) {
      const data = await resp.json();
      const result = {
        timeZone: data.timezone || defaultTz,
        city: data.city || '',
        region: data.region || '',
        country: data.country_name || 'India',
        ip: data.ip || ''
      };
      sessionStorage.setItem('echaar_ip_tz', JSON.stringify(result));
      return result;
    }
  } catch (e) {
    // Network offline or blocked by adblocker - fallback to browser's client timezone
  }

  const fallback = {
    timeZone: defaultTz,
    city: '',
    region: '',
    country: 'Local',
    ip: ''
  };
  return fallback;
}

/**
 * Custom React Hook that returns live greeting info and refreshes automatically
 */
export function useTimezoneGreeting(name = '') {
  const [greetingData, setGreetingData] = useState(() => {
    const initialTz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';
    return {
      ...getGreetingForHour(new Date(), initialTz),
      city: '',
      country: ''
    };
  });

  useEffect(() => {
    let isMounted = true;

    async function detect() {
      const ipData = await getIpTimezone();
      if (!isMounted) return;

      const current = getGreetingForHour(new Date(), ipData.timeZone);
      setGreetingData({
        ...current,
        city: ipData.city,
        region: ipData.region,
        country: ipData.country,
        ip: ipData.ip
      });
    }

    detect();

    // Refresh every 30 seconds to keep time and greeting updated across morning/afternoon/evening/night
    const interval = setInterval(() => {
      setGreetingData(prev => {
        const updated = getGreetingForHour(new Date(), prev.timeZone);
        return {
          ...prev,
          ...updated
        };
      });
    }, 30000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  const cleanName = name ? String(name).trim() : '';
  const fullGreeting = cleanName ? `${greetingData.greeting}, ${cleanName}!` : `${greetingData.greeting}!`;

  return {
    ...greetingData,
    fullGreeting,
    name: cleanName
  };
}

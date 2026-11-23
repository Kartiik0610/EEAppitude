/**
 * Echaar Equipments - Proctoring & Anti-Cheat Controller
 * Enforces fullscreen, prevents developer tools, blocks right-click,
 * detects window blur / tab switching, and applies screen blurring.
 */

export function setupProctoringEngine({
  isActive,
  onViolation,
  onBlurChange,
  onFullscreenExit
}) {
  if (!isActive) return () => {};

  let isCurrentlyBlurred = false;

  const triggerBlur = (blurred, reason = '') => {
    if (isCurrentlyBlurred !== blurred) {
      isCurrentlyBlurred = blurred;
      if (onBlurChange) {
        onBlurChange(blurred, reason);
      }
    }
  };

  // 1. Right Click Prevention
  const handleContextMenu = (e) => {
    e.preventDefault();
    if (onViolation) {
      onViolation({
        type: 'CONTEXT_MENU_BLOCKED',
        details: 'Right-click context menu inspection attempt prevented.',
        timestamp: new Date().toLocaleTimeString()
      });
    }
    return false;
  };

  // 2. Keyboard Devtools & Inspection Blocking
  const handleKeyDown = (e) => {
    const key = e.key;
    const ctrlOrMeta = e.ctrlKey || e.metaKey;
    const shift = e.shiftKey;

    // F12 DevTools
    if (key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      onViolation?.({
        type: 'DEVTOOLS_SHORTCUT',
        details: 'F12 Developer Tools key blocked.',
        timestamp: new Date().toLocaleTimeString()
      });
      return false;
    }

    // Ctrl+Shift+I, Ctrl+Shift+J (Devtools Console/Inspector)
    if (ctrlOrMeta && shift && (key === 'I' || key === 'i' || key === 'J' || key === 'j' || key === 'C' || key === 'c')) {
      e.preventDefault();
      e.stopPropagation();
      onViolation?.({
        type: 'DEVTOOLS_SHORTCUT',
        details: `Ctrl+Shift+${key.toUpperCase()} Inspector shortcut blocked.`,
        timestamp: new Date().toLocaleTimeString()
      });
      return false;
    }

    // Ctrl+U (View Source)
    if (ctrlOrMeta && (key === 'U' || key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      onViolation?.({
        type: 'VIEW_SOURCE_SHORTCUT',
        details: 'Ctrl+U View Page Source blocked.',
        timestamp: new Date().toLocaleTimeString()
      });
      return false;
    }

    // Ctrl+S (Save Page) or Ctrl+P (Print Page)
    if (ctrlOrMeta && (key === 'S' || key === 's' || key === 'P' || key === 'p')) {
      e.preventDefault();
      e.stopPropagation();
      onViolation?.({
        type: 'PAGE_SAVE_PRINT_BLOCKED',
        details: `Ctrl+${key.toUpperCase()} save/print shortcut blocked.`,
        timestamp: new Date().toLocaleTimeString()
      });
      return false;
    }

    // PrintScreen Key
    if (key === 'PrintScreen' || key === 'Snapshot') {
      triggerBlur(true, 'PrintScreen attempt detected');
      onViolation?.({
        type: 'SCREENSHOT_ATTEMPT',
        details: 'PrintScreen / screenshot key pressed. Content blurred.',
        timestamp: new Date().toLocaleTimeString()
      });
      // Clear clipboard text if possible
      try {
        navigator.clipboard?.writeText?.('');
      } catch {}
    }
  };

  // 3. Tab Switching & Visibility Change Detection
  const handleVisibilityChange = () => {
    if (document.hidden) {
      triggerBlur(true, 'Tab switched or browser minimized');
      onViolation?.({
        type: 'TAB_SWITCH',
        details: 'Candidate switched tabs or minimized the browser window.',
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      triggerBlur(false);
    }
  };

  // 4. Window Focus Loss (Blur event)
  const handleWindowBlur = () => {
    triggerBlur(true, 'Window focus lost');
    onViolation?.({
      type: 'WINDOW_BLUR',
      details: 'Browser window lost focus (clicked outside or switched application).',
      timestamp: new Date().toLocaleTimeString()
    });
  };

  const handleWindowFocus = () => {
    triggerBlur(false);
  };

  // 5. Fullscreen Exit Detection
  const handleFullscreenChange = () => {
    const isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement);
    if (!isFullscreen) {
      triggerBlur(true, 'Exited fullscreen mode');
      onFullscreenExit?.();
      onViolation?.({
        type: 'FULLSCREEN_EXIT',
        details: 'Candidate exited forced fullscreen mode.',
        timestamp: new Date().toLocaleTimeString()
      });
    } else {
      triggerBlur(false);
    }
  };

  // Attach all listeners
  document.addEventListener('contextmenu', handleContextMenu);
  window.addEventListener('keydown', handleKeyDown, true);
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleWindowBlur);
  window.addEventListener('focus', handleWindowFocus);
  document.addEventListener('fullscreenchange', handleFullscreenChange);
  document.addEventListener('webkitfullscreenchange', handleFullscreenChange);

  // Return cleanup function
  return () => {
    document.removeEventListener('contextmenu', handleContextMenu);
    window.removeEventListener('keydown', handleKeyDown, true);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    window.removeEventListener('blur', handleWindowBlur);
    window.removeEventListener('focus', handleWindowFocus);
    document.removeEventListener('fullscreenchange', handleFullscreenChange);
    document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
  };
}

/**
 * Request browser fullscreen mode
 */
export async function enterFullscreen() {
  try {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      await elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      await elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      await elem.msRequestFullscreen();
    }
    return true;
  } catch (err) {
    console.warn('Fullscreen request declined or unsupported:', err);
    return false;
  }
}

/**
 * Exit browser fullscreen mode
 */
export async function exitFullscreen() {
  try {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        await document.webkitExitFullscreen();
      }
    }
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Echaar Equipments Assessment Portal - Google Sheets Integration Service
 * Manages two-way dynamic synchronization with Google Sheets:
 *  - Sheet 1: Admin Credentials (Username, Password, Role)
 *  - Sheet 2: Candidate Test Submissions & Admin Problem-Solving Evaluations
 */

import { getEmbeddedGoogleSheetEndpoint, ECHAAR_PORTAL_SEC_TOKEN } from './security';
import { StorageService } from './storage';

/**
 * Returns the currently active Google Apps Script Web App URL.
 * Checks localStorage first, then falls back to the embedded encrypted endpoint.
 */
export function getActiveGoogleSheetEndpoint() {
  return localStorage.getItem('_ech_gsheet_endpoint_url') || getEmbeddedGoogleSheetEndpoint();
}

/**
 * Set and persist a custom Google Apps Script Web App URL
 */
export function setActiveGoogleSheetEndpoint(url) {
  if (url && typeof url === 'string') {
    localStorage.setItem('_ech_gsheet_endpoint_url', url.trim());
  } else {
    localStorage.removeItem('_ech_gsheet_endpoint_url');
  }
}

/**
 * Pushes a candidate's completed assessment results to Sheet 2 of the Google Sheet.
 * @param {Object} candidate - Complete candidate result object
 * @returns {Promise<{success: boolean, message: string, candidateId?: string}>}
 */
export async function pushCandidateToGoogleSheet(candidate) {
  const endpoint = getActiveGoogleSheetEndpoint();
  if (!endpoint) {
    return {
      success: false,
      message: 'Assessment saved locally on this device.'
    };
  }

  try {
    const payload = {
      action: 'submit_candidate',
      token: ECHAAR_PORTAL_SEC_TOKEN,
      candidate: candidate
    };

    // Use text/plain to avoid CORS preflight options check on Google Apps Script
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to reach central endpoint`);
    }

    const data = await response.json();
    return {
      success: !!data.success,
      message: data.message || 'Candidate test successfully recorded to Central Cloud Portal',
      candidateId: data.candidateId || candidate.id
    };
  } catch (err) {
    console.error('Portal push error:', err);
    return {
      success: false,
      message: err.message || 'Could not connect to central portal. Stored safely on this device.'
    };
  }
}

/**
 * Fetches all candidate submissions dynamically from Sheet 2 of the Google Sheet.
 * @returns {Promise<{success: boolean, candidates: Array, message?: string}>}
 */
export async function fetchCandidatesFromGoogleSheet() {
  const endpoint = getActiveGoogleSheetEndpoint();
  if (!endpoint) {
    return {
      success: false,
      candidates: [],
      message: 'No Google Sheet endpoint available.'
    };
  }

  try {
    // Attempt A: GET request with timestamp cache-buster & portal token
    const url = new URL(endpoint);
    url.searchParams.set('action', 'get_candidates');
    url.searchParams.set('token', ECHAAR_PORTAL_SEC_TOKEN);
    url.searchParams.set('_t', Date.now().toString());

    let data = null;
    let lastError = null;

    try {
      const getResp = await fetch(url.toString(), { method: 'GET' });
      if (getResp.ok) {
        data = await getResp.json();
      }
    } catch (e) {
      lastError = e;
    }

    // Attempt B: POST request fallback with text/plain
    if (!data) {
      try {
        const postResp = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ 
            action: 'get_candidates',
            token: ECHAAR_PORTAL_SEC_TOKEN 
          })
        });
        if (postResp.ok) {
          data = await postResp.json();
        }
      } catch (e) {
        lastError = e;
      }
    }

    if (data && data.success && Array.isArray(data.candidates)) {
      // Merge with local storage cache to keep local reviews in sync
      data.candidates.forEach(cand => {
        if (cand && cand.id) {
          StorageService.saveResult(cand);
        }
      });

      return {
        success: true,
        candidates: data.candidates,
        total: data.total || data.candidates.length,
        message: `Successfully loaded ${data.candidates.length} candidate(s) from Central Directory.`
      };
    } else {
      throw new Error(data?.message || lastError?.message || 'Could not parse candidate list from central server');
    }
  } catch (err) {
    console.warn('Central Directory fetch warning:', err);
    return {
      success: false,
      candidates: [],
      message: err.message || 'Error fetching submissions from Central Directory'
    };
  }
}

/**
 * Updates an evaluated candidate's problem-solving scores, evaluator notes,
 * and review decision in the central assessment repository.
 * @param {string} candidateId
 * @param {Object} psScores - Map of { questionId: numericScore }
 * @param {Object} psNotes - Map of { questionId: feedbackNote }
 * @param {string} reviewStatus - e.g. "Reviewed", "Shortlisted", "Under Review", "Selected"
 */
export async function updateCandidateEvaluationOnGoogleSheet(candidateId, psScores, psNotes, reviewStatus = 'Reviewed') {
  const endpoint = getActiveGoogleSheetEndpoint();
  if (!endpoint) {
    return { success: false, message: 'Central endpoint not configured.' };
  }

  try {
    const payload = {
      action: 'update_evaluation',
      token: ECHAAR_PORTAL_SEC_TOKEN,
      candidateId: candidateId,
      psScores: psScores,
      psNotes: psNotes,
      reviewStatus: reviewStatus
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: Failed to update evaluation on central server`);
    }

    const data = await response.json();
    return {
      success: !!data.success,
      message: data.message || 'Candidate evaluation updated in Central Evaluation Vault!',
      problemSolvingScore: data.problemSolvingScore,
      totalScore: data.totalScore
    };
  } catch (err) {
    console.error('Evaluation update error:', err);
    return {
      success: false,
      message: err.message || 'Failed to sync evaluation to Central Vault. Local copy preserved.'
    };
  }
}

/**
 * Fetches dynamic live statistics for the Admin Login portal:
 *  - Total candidate submissions in Sheet 2
 *  - Count of pending vs evaluated submissions
 */
export async function fetchSheetStats() {
  const endpoint = getActiveGoogleSheetEndpoint();
  if (!endpoint) return null;

  try {
    const url = new URL(endpoint);
    url.searchParams.set('action', 'get_stats');
    url.searchParams.set('token', ECHAAR_PORTAL_SEC_TOKEN);
    url.searchParams.set('_t', Date.now().toString());

    let data = null;
    try {
      const resp = await fetch(url.toString());
      if (resp.ok) data = await resp.json();
    } catch {}

    if (!data) {
      const postResp = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ 
          action: 'get_stats',
          token: ECHAAR_PORTAL_SEC_TOKEN 
        })
      });
      if (postResp.ok) data = await postResp.json();
    }

    if (data && data.success) {
      return {
        total: data.total || 0,
        pending: data.pending || 0,
        reviewed: data.reviewed || 0
      };
    }
    return null;
  } catch (err) {
    return null;
  }
}

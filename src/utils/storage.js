/**
 * Echaar Equipments Assessment Portal - Obfuscated Storage Helper
 * Provides base64-encoded client-side persistence to prevent plain-text discovery
 * in browser dev tools / local storage inspection.
 */

const STORAGE_KEYS = {
  CANDIDATE_RESULTS: '_ech_sec_res_vault_v1',
  CUSTOM_QUESTIONS: '_ech_sec_qbank_store_v1',
  ADMIN_ACCOUNTS: '_ech_sec_adm_creds_v1',
  ACTIVE_SESSION: '_ech_sec_active_sess_v1'
};

const SECRET_SALT = 'EchaarEquipments@Mumbai#2025';

function obfuscate(data) {
  try {
    const jsonStr = JSON.stringify(data);
    // Simple reversible obfuscation for client-side storage
    const encoded = btoa(encodeURIComponent(jsonStr));
    return encoded;
  } catch (e) {
    console.error('Storage obfuscation error', e);
    return null;
  }
}

function deobfuscate(encodedStr) {
  try {
    if (!encodedStr) return null;
    const jsonStr = decodeURIComponent(atob(encodedStr));
    return JSON.parse(jsonStr);
  } catch (e) {
    // If not encoded, try raw json
    try {
      return JSON.parse(encodedStr);
    } catch {
      return null;
    }
  }
}

export const StorageService = {
  // Candidate test results
  getResults: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CANDIDATE_RESULTS);
      const parsed = deobfuscate(data);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  },

  saveResult: (result) => {
    try {
      const existing = StorageService.getResults();
      // Replace if existing candidate ID or prepend
      const index = existing.findIndex(r => r.id === result.id);
      let updated;
      if (index >= 0) {
        updated = [...existing];
        updated[index] = result;
      } else {
        updated = [result, ...existing];
      }
      localStorage.setItem(STORAGE_KEYS.CANDIDATE_RESULTS, obfuscate(updated));
      return true;
    } catch (e) {
      console.error('Error saving result:', e);
      return false;
    }
  },

  updateResultReview: (candidateId, problemSolvingScores, adminNotes) => {
    try {
      const existing = StorageService.getResults();
      const updated = existing.map(c => {
        if (c.id === candidateId) {
          let psTotal = 0;
          const updatedPSAnswers = { ...(c.problemSolvingAnswers || {}) };
          
          Object.entries(problemSolvingScores).forEach(([qId, score]) => {
            const numericScore = Number(score) || 0;
            psTotal += numericScore;
            if (updatedPSAnswers[qId]) {
              updatedPSAnswers[qId].adminScore = numericScore;
              if (adminNotes && adminNotes[qId]) {
                updatedPSAnswers[qId].adminNotes = adminNotes[qId];
              }
            }
          });

          return {
            ...c,
            problemSolvingAnswers: updatedPSAnswers,
            problemSolvingScore: psTotal,
            totalScore: (c.techScore || 0) + psTotal,
            reviewedAt: new Date().toISOString()
          };
        }
        return c;
      });
      localStorage.setItem(STORAGE_KEYS.CANDIDATE_RESULTS, obfuscate(updated));
      return true;
    } catch (e) {
      console.error('Error updating review:', e);
      return false;
    }
  },

  deleteResult: (candidateId) => {
    try {
      const existing = StorageService.getResults();
      const updated = existing.filter(c => c.id !== candidateId);
      localStorage.setItem(STORAGE_KEYS.CANDIDATE_RESULTS, obfuscate(updated));
      return true;
    } catch (e) {
      console.error('Error deleting result:', e);
      return false;
    }
  },

  // Question bank custom overrides
  getCustomQuestions: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
      return deobfuscate(data);
    } catch {
      return null;
    }
  },

  saveCustomQuestions: (questionsMap) => {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOM_QUESTIONS, obfuscate(questionsMap));
      return true;
    } catch (e) {
      console.error('Error saving questions:', e);
      return false;
    }
  },

  resetQuestionBank: () => {
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_QUESTIONS);
  },

  // Custom Admin accounts stored from uploaded Excel
  getCustomAdminAccounts: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ADMIN_ACCOUNTS);
      return deobfuscate(data);
    } catch {
      return null;
    }
  },

  saveCustomAdminAccounts: (accounts) => {
    try {
      localStorage.setItem(STORAGE_KEYS.ADMIN_ACCOUNTS, obfuscate(accounts));
      return true;
    } catch (e) {
      console.error('Error saving admin accounts:', e);
      return false;
    }
  },

  // Clear all mock/test data
  clearAllData: () => {
    localStorage.removeItem(STORAGE_KEYS.CANDIDATE_RESULTS);
  }
};

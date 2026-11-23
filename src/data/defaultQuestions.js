import { getQuestions } from './questions/get.js';
import { designQuestions } from './questions/design.js';
import { productionQuestions } from './questions/production.js';
import { ppcQuestions } from './questions/ppc.js';
import { qualityQuestions } from './questions/quality.js';
import { techMarketingQuestions } from './questions/tech_marketing.js';
import { internEngQuestions } from './questions/intern_eng.js';
import { internAccountsQuestions } from './questions/intern_accounts.js';
import { internHrQuestions } from './questions/intern_hr.js';

export const DEFAULT_QUESTIONS_MAP = {
  get: getQuestions,
  design: designQuestions,
  production: productionQuestions,
  ppc: ppcQuestions,
  quality: qualityQuestions,
  tech_marketing: techMarketingQuestions,
  intern_eng: internEngQuestions,
  intern_accounts: internAccountsQuestions,
  intern_hr: internHrQuestions
};

/**
 * Helper to get questions for a role with user custom overrides
 */
export function getQuestionsForRole(roleId, customQuestionsMap = null) {
  if (customQuestionsMap && customQuestionsMap[roleId] && Array.isArray(customQuestionsMap[roleId])) {
    return customQuestionsMap[roleId];
  }
  return DEFAULT_QUESTIONS_MAP[roleId] || [];
}

import { createId } from '@paralleldrive/cuid2';

/**
 * Format currency
 *
 * @param {number} number
 * @param {string} currency (default: USD)
 * @returns formatted currency string
 */
export const formatCurrency = (number: number, options: Intl.NumberFormatOptions = {}) => {
  if (number != null && Number.isFinite(number * 1))
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: options.currency || 'INR',
      signDisplay: 'auto',
      maximumFractionDigits: 2,
      ...options,
    }).format(number);

  return '-';
};

export const generateSlideId = createId;

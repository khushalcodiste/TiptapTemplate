export const formatDate = (date: Date | string | null) => {
  if (!date) return '-';
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(dateObj);
};

export const formatNumber = (number: number) => {
  return Number.isFinite(number) ? new Intl.NumberFormat('en-US', {}).format(number) : '-';
};

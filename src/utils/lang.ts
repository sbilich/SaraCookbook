export const pluralize = (word: string, count: number) => {
  return count <= 1 ? word : `${word}s`;
};

export const minutesToTimeLabel = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const hourLabel = hours > 0 ? `${hours} ${pluralize('hour', hours)}` : '';
  const minuteLabel =
    remainingMinutes > 0
      ? `${remainingMinutes} ${pluralize('minute', remainingMinutes)}`
      : '';
  return `${hourLabel} ${minuteLabel}`;
};

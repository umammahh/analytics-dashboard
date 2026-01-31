export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}k`;
  }
  return num.toString();
}

export function formatTime(num: number): string {
  return `${num}s`;
}

export function formatTotal(num: number, type: "number" | "time" = "number"): string {
  if (type === "time") {
    return formatTime(num);
  }
  return formatNumber(num);
}

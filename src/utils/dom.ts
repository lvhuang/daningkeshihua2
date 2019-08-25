export function getRootFontSize(key: string): string {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(key)
    .trim();
}

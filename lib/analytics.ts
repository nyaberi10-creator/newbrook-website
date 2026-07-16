export const GA_MEASUREMENT_ID = "G-YBQGCW4NJ6";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackEvent(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window === "undefined") return;

  if (!window.gtag) return;

  window.gtag("event", eventName, parameters);
}
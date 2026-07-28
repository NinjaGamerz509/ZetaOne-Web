/**
 * Centralized, type-safe access to environment variables.
 * Never read process.env directly elsewhere in the app.
 *
 * All values here are optional at build time so the site still builds
 * and runs correctly before any of these are configured.
 */

export type AnalyticsProvider = "none" | "google" | "plausible" | "cloudflare";

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://zetaone.qzz.io",
  analyticsId: process.env.NEXT_PUBLIC_ANALYTICS_ID ?? "",
  analyticsProvider: (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsProvider) ?? "none",
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? "",
  cdnUrl: process.env.NEXT_PUBLIC_CDN_URL ?? "",
} as const;

/** Analytics stays fully disabled until both a provider and an ID are configured. */
export const isAnalyticsEnabled = Boolean(env.analyticsId) && env.analyticsProvider !== "none";

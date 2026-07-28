import { env, isAnalyticsEnabled } from "@/lib/env";

/**
 * Analytics stays fully inert until NEXT_PUBLIC_ANALYTICS_ID and
 * NEXT_PUBLIC_ANALYTICS_PROVIDER are both set in the environment.
 * No analytics script loads, and no tracking code runs, until then.
 */
export const analyticsConfig = {
  enabled: isAnalyticsEnabled,
  provider: env.analyticsProvider,
  id: env.analyticsId,
} as const;

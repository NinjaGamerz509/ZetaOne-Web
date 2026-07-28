export interface AppRequirement {
  label: string;
  value: string;
  icon: string;
}

/**
 * Single source of truth for installation requirements.
 * Referenced by the Download page and Documentation "Getting Started" guide.
 */
export const APP_REQUIREMENTS: AppRequirement[] = [
  { label: "Minimum Android", value: "Android 8.0 (API 26)", icon: "android" },
  { label: "Recommended Android", value: "Android 11 or newer", icon: "verified" },
  { label: "Architecture", value: "ARM64, ARM, x86, Universal", icon: "memory" },
  { label: "Internet Required", value: "No — works fully offline", icon: "wifi_off" },
  { label: "Storage Required", value: "Approximately 120 MB free space", icon: "sd_storage" },
  { label: "Permissions", value: "Storage access for notes, documents and exports", icon: "lock_open" },
];

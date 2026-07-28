export interface TutorialStep {
  step: number;
  title: string;
  caption: string;
  image: string;
  videoUrl?: string;
}

/**
 * Screenshots always come from /assets/tutorial/. Replace the files there
 * once official screenshots exist — no component changes needed.
 */
export const INSTALLATION_STEPS: TutorialStep[] = [
  {
    step: 1,
    title: "Tap Download APK",
    caption: "Go to the Download page and tap the APK that matches your device.",
    image: "/assets/tutorial/step-1.webp",
  },
  {
    step: 2,
    title: "Open Downloads",
    caption: "Open your device's Downloads folder or notification to find the file.",
    image: "/assets/tutorial/step-2.webp",
  },
  {
    step: 3,
    title: "Tap Zeta One APK",
    caption: "Tap the downloaded file to begin installing Zeta One.",
    image: "/assets/tutorial/step-3.webp",
  },
  {
    step: 4,
    title: "Allow installation if Android asks",
    caption: "If prompted, allow installs from this source — this is normal for apps outside the Play Store.",
    image: "/assets/tutorial/step-4.webp",
  },
  {
    step: 5,
    title: "Open Zeta One",
    caption: "Installation is complete. Open Zeta One and start studying.",
    image: "/assets/tutorial/step-5.webp",
  },
];

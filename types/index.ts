import type { ReleaseStatus } from "@/constants/app";

export interface FeatureItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  previewLabel?: string;
}

export interface ReleaseApk {
  arch: "ARM64" | "ARM" | "x86" | "Universal" | "Bundle";
  label: string;
  url: string | null;
  size: string;
}

export interface Changelog {
  added: string[];
  improved: string[];
  fixed: string[];
  removed: string[];
}

export type ReleaseArchiveStatus = "Newest" | "Older" | "Archived";

export interface Release {
  version: string;
  buildNumber: string;
  status: ReleaseStatus;
  archiveStatus: ReleaseArchiveStatus;
  releaseDate: string;
  packageName: string;
  minAndroidVersion: string;
  apkSize: string;
  highlights: string[];
  changelog: Changelog;
  knownIssues: string[];
  apks: ReleaseApk[];
}

export type ArticleCategory =
  | "Announcement"
  | "Update"
  | "Tutorial"
  | "Guide"
  | "Tips"
  | "Release"
  | "Community"
  | "Development";

export interface ArticleSection {
  id: string;
  heading: string;
  body: string;
  callout?: DocCallout;
  image?: string;
  videoUrl?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  author: string;
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
  popular?: boolean;
  sections: ArticleSection[];
  relatedSlugs: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface DocCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface DocCallout {
  type: "tip" | "warning";
  text: string;
}

export interface DocSection {
  id: string;
  heading: string;
  body: string;
  callout?: DocCallout;
  image?: string;
  code?: { language: string; content: string };
}

export interface DocPage {
  slug: string;
  categoryId: string;
  title: string;
  description: string;
  readingTime: string;
  lastUpdated: string;
  sections: DocSection[];
  relatedSlugs: string[];
}

export interface TroubleshootingIssue {
  id: string;
  problem: string;
  cause: string;
  solution: string;
  relatedSlugs: string[];
}

export interface SearchResultItem {
  title: string;
  description: string;
  category: "Documentation" | "Articles" | "Release Notes" | "FAQ" | "Pages";
  href: string;
  icon: string;
}

export type TimelinePhaseStatus = "completed" | "current" | "upcoming";

export interface TimelinePhase {
  id: string;
  label: string;
  description: string;
  status: TimelinePhaseStatus;
}

export interface ProjectLead {
  name: string;
  roles: string[];
  bio: string;
}

export interface AiTool {
  name: string;
  usedFor: string[];
}

export interface Tester {
  name: string;
  role: string;
}

export interface Contributor {
  name: string;
  role: string;
  contribution: string;
  github?: string;
  instagram?: string;
  discord?: string;
}

export interface CommunityLink {
  platform: string;
  icon: string;
  url: string | null;
}

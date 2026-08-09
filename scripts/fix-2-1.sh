#!/usr/bin/env bash
# fix-2.sh — run this from the root of your zeta-one-web repo (where package.json lives)
# Applies: domain change to zetaone.dpdns.org, custom VideoPlayer + YouTube/Instagram
# embed components, and 8 new articles (launch video x3 platforms + 5 feature banners).
#
# BEFORE RUNNING:
#   mkdir -p public/assets/screenshots public/videos
#   Put home.png, notes.png, tasks.png, goals.png, profile.png in public/assets/screenshots/
#   Put zetaone-launch.mp4 in public/videos/

set -e

if [ ! -f "package.json" ]; then
  echo "Run this script from the root of your zeta-one-web project (where package.json lives)."
  exit 1
fi

echo "Applying fix-2.sh changes..."

# ---------------------------------------------------------------------------
# 1. Domain change: zetaone.qzz.io -> zetaone.dpdns.org (site URL only, not email)
# ---------------------------------------------------------------------------
if [ -f "config/site.config.ts" ]; then
  sed -i 's#https://zetaone\.qzz\.io#https://zetaone.dpdns.org#g' config/site.config.ts
  sed -i 's#https://docs\.zetaone\.qzz\.io#https://docs.zetaone.dpdns.org#g' config/site.config.ts
  sed -i 's#help@zetaone\.qzz\.io#help@zetaone.dpdns.org#g' config/site.config.ts
  echo "  [done] config/site.config.ts (domain + email)"
fi

if [ -f ".env.example" ]; then
  sed -i 's#https://zetaone\.qzz\.io#https://zetaone.dpdns.org#g' .env.example
  echo "  [done] .env.example (domain)"
fi

if [ -f "lib/env.ts" ]; then
  sed -i 's#https://zetaone\.qzz\.io#https://zetaone.dpdns.org#g' lib/env.ts
  echo "  [done] lib/env.ts (domain)"
fi

if [ -f "constants/app.ts" ]; then
  sed -i 's#help@zetaone\.qzz\.io#help@zetaone.dpdns.org#g' constants/app.ts
  echo "  [done] constants/app.ts (email)"
fi

# Catch any other stray references to the old domain (including emails)
grep -rl "zetaone\.qzz\.io" app components config constants content lib types README.md 2>/dev/null | while read -r f; do
  sed -i 's#zetaone\.qzz\.io#zetaone.dpdns.org#g' "$f"
  echo "  [done] $f (domain, stray reference)"
done

# ---------------------------------------------------------------------------
# 2. types/index.ts — add VideoEmbedType and videoEmbedType field
# ---------------------------------------------------------------------------
if [ -f "types/index.ts" ] && ! grep -q "VideoEmbedType" types/index.ts; then
  python3 - << 'PYEOF'
import re
path = "types/index.ts"
content = open(path).read()

old = '''export interface ArticleSection {
  id: string;
  heading: string;
  body: string;
  callout?: DocCallout;
  image?: string;
  videoUrl?: string;
}'''

new = '''export type VideoEmbedType = "file" | "youtube" | "instagram";

export interface ArticleSection {
  id: string;
  heading: string;
  body: string;
  callout?: DocCallout;
  image?: string;
  videoUrl?: string;
  videoEmbedType?: VideoEmbedType;
}'''

if old in content:
    content = content.replace(old, new)
    open(path, "w").write(content)
    print("  [done] types/index.ts (VideoEmbedType added)")
else:
    print("  [skip] types/index.ts (pattern not found — may already be updated)")
PYEOF
else
  echo "  [skip] types/index.ts (VideoEmbedType already present)"
fi

# ---------------------------------------------------------------------------
# 3. components/sections/articles/VideoPlayer.tsx
# ---------------------------------------------------------------------------
mkdir -p components/sections/articles
cat > components/sections/articles/VideoPlayer.tsx << 'EOF'
"use client";

import { useRef, useState, useEffect } from "react";
import { Icon } from "@/components/ui/Icon";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * Self-hosted video with a custom emerald-glass control bar instead of the
 * browser's default player chrome — kept visually distinct from the
 * YouTube/Instagram embeds used elsewhere on the same page.
 */
export function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onTimeUpdate = () => {
      setCurrent(video.currentTime);
      setProgress(video.duration ? (video.currentTime / video.duration) * 100 : 0);
    };
    const onLoadedMetadata = () => setDuration(video.duration);
    const onEnded = () => setPlaying(false);

    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("ended", onEnded);
    };
  }, []);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  }

  function toggleMute() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const video = videoRef.current;
    if (!video || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    video.currentTime = ratio * duration;
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-black">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="aspect-video w-full"
        onClick={togglePlay}
        playsInline
      />

      {!playing && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-emerald-500/90 backdrop-blur-glass shadow-glow-emerald transition-transform hover:scale-105">
            <Icon name="play_arrow" size={32} className="text-white" />
          </span>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
        <div
          onClick={seek}
          className="h-1.5 w-full cursor-pointer rounded-full bg-white/20"
          role="slider"
          aria-label="Seek"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div className="h-full rounded-full bg-emerald-400" style={{ width: `${progress}%` }} />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"} className="text-white">
              <Icon name={playing ? "pause" : "play_arrow"} size={22} />
            </button>
            <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="text-white">
              <Icon name={muted ? "volume_off" : "volume_up"} size={20} />
            </button>
            <span className="text-xs text-white/70">
              {formatTime(current)} / {formatTime(duration)}
            </span>
          </div>

          <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
            Zeta One
          </span>
        </div>
      </div>
    </div>
  );
}
EOF
echo "  [done] components/sections/articles/VideoPlayer.tsx"

# ---------------------------------------------------------------------------
# 4. components/sections/articles/YouTubeEmbed.tsx
# ---------------------------------------------------------------------------
cat > components/sections/articles/YouTubeEmbed.tsx << 'EOF'
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-black">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
EOF
echo "  [done] components/sections/articles/YouTubeEmbed.tsx"

# ---------------------------------------------------------------------------
# 5. components/sections/articles/InstagramEmbed.tsx
# ---------------------------------------------------------------------------
cat > components/sections/articles/InstagramEmbed.tsx << 'EOF'
interface InstagramEmbedProps {
  postUrl: string;
}

export function InstagramEmbed({ postUrl }: InstagramEmbedProps) {
  const embedSrc = `${postUrl.replace(/\/$/, "")}/embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-black">
      <iframe
        className="aspect-[9/16] w-full max-h-[600px]"
        src={embedSrc}
        title="Instagram post"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
EOF
echo "  [done] components/sections/articles/InstagramEmbed.tsx"

# ---------------------------------------------------------------------------
# 6. app/articles/[slug]/page.tsx — wire embed-type-aware rendering
# ---------------------------------------------------------------------------
ARTICLE_PAGE="app/articles/[slug]/page.tsx"
if [ -f "$ARTICLE_PAGE" ] && ! grep -q "VideoPlayer" "$ARTICLE_PAGE"; then
  python3 - << PYEOF
path = "$ARTICLE_PAGE"
content = open(path).read()

old_import = '''import { JsonLd } from "@/components/layout/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/structuredData";'''
new_import = '''import { JsonLd } from "@/components/layout/JsonLd";
import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/structuredData";
import { VideoPlayer } from "@/components/sections/articles/VideoPlayer";
import { YouTubeEmbed } from "@/components/sections/articles/YouTubeEmbed";
import { InstagramEmbed } from "@/components/sections/articles/InstagramEmbed";'''

if old_import in content:
    content = content.replace(old_import, new_import)

old_video = '''                  {section.videoUrl && (
                    <div className="mt-5 aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.1] bg-black/40">
                      <video src={section.videoUrl} controls className="h-full w-full" />
                    </div>
                  )}'''
new_video = '''                  {section.videoUrl && (
                    <div className="mt-5">
                      {section.videoEmbedType === "youtube" ? (
                        <YouTubeEmbed videoId={section.videoUrl} title={section.heading} />
                      ) : section.videoEmbedType === "instagram" ? (
                        <InstagramEmbed postUrl={section.videoUrl} />
                      ) : (
                        <VideoPlayer src={section.videoUrl} />
                      )}
                    </div>
                  )}'''

if old_video in content:
    content = content.replace(old_video, new_video)

open(path, "w").write(content)
print("  [done] app/articles/[slug]/page.tsx (embed-aware video rendering)")
PYEOF
else
  echo "  [skip] app/articles/[slug]/page.tsx (already wired or file not found)"
fi

# ---------------------------------------------------------------------------
# 7. content/newArticles.ts — 8 new articles (launch video x3 + 5 feature banners)
# ---------------------------------------------------------------------------
cat > content/newArticles.ts << 'EOF'
import type { Article } from "@/types";

/**
 * New articles for the launch video (3 platforms) and the 5 AI-generated
 * feature banner images. Merged into ARTICLES in articles.ts.
 *
 * BEFORE PUBLISHING:
 * - Replace "REPLACE_YOUTUBE_ID" with the real YouTube video ID.
 * - Replace "REPLACE_INSTAGRAM_URL" with the real Instagram reel/post URL.
 * - Confirm /public/videos/zetaone-launch.mp4 exists.
 * - Confirm /public/assets/screenshots/{home,notes,tasks,goals,profile}.png exist.
 */
export const NEW_ARTICLES: Article[] = [
  {
    slug: "zeta-one-launch-video",
    title: "Watch the Zeta One Launch Video",
    description: "See Zeta One in action — notes, tasks, focus mode and more in one short video.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/home.png",
    featured: true,
    popular: true,
    relatedSlugs: ["zeta-one-launch-video-youtube", "zeta-one-launch-video-instagram"],
    sections: [
      {
        id: "the-video",
        heading: "The Launch Video",
        body: "A short walkthrough of Zeta One — how it looks, how it feels, and what it can do for your studying.",
        videoUrl: "/videos/zetaone-launch.mp4",
        videoEmbedType: "file",
      },
      {
        id: "watch-elsewhere",
        heading: "Watch it elsewhere",
        body: "The same video is also available on YouTube and Instagram if you'd rather watch there.",
      },
    ],
  },
  {
    slug: "zeta-one-launch-video-youtube",
    title: "Zeta One Launch Video (YouTube)",
    description: "The official Zeta One launch video, hosted on YouTube.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/notes.png",
    relatedSlugs: ["zeta-one-launch-video", "zeta-one-launch-video-instagram"],
    sections: [
      {
        id: "the-video",
        heading: "Watch on YouTube",
        body: "The Zeta One launch video, embedded directly from YouTube.",
        videoUrl: "REPLACE_YOUTUBE_ID",
        videoEmbedType: "youtube",
      },
    ],
  },
  {
    slug: "zeta-one-launch-video-instagram",
    title: "Zeta One Launch Video (Instagram)",
    description: "The official Zeta One launch video, hosted on Instagram.",
    category: "Announcement",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/tasks.png",
    relatedSlugs: ["zeta-one-launch-video", "zeta-one-launch-video-youtube"],
    sections: [
      {
        id: "the-video",
        heading: "Watch on Instagram",
        body: "The Zeta One launch video, embedded directly from Instagram.",
        videoUrl: "REPLACE_INSTAGRAM_URL",
        videoEmbedType: "instagram",
      },
    ],
  },
  {
    slug: "all-your-study-tools-one-app",
    title: "All Your Study Tools. One App.",
    description: "Notes, tasks, flashcards and focus — built for deep work, all in Zeta One.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/home.png",
    popular: true,
    relatedSlugs: ["building-better-notes", "getting-started-with-focus-mode"],
    sections: [
      {
        id: "overview",
        heading: "One home screen, everything you need",
        body: "New Note, New Task, New Document, Focus, Flashcards, Documents, Journal, Bookmarks and Formulas — all one tap away from the Zeta One home screen.",
        image: "/assets/screenshots/home.png",
      },
    ],
  },
  {
    slug: "building-better-notes-visual",
    title: "Notes, Reimagined",
    description: "A closer look at how Notes works inside Zeta One.",
    category: "Guide",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/notes.png",
    relatedSlugs: ["building-better-notes", "all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Clean, distraction-free notes",
        body: "Every note is offline-first, fast to open, and easy to scan — no clutter, no accounts required.",
        image: "/assets/screenshots/notes.png",
      },
    ],
  },
  {
    slug: "stay-on-top-of-everything",
    title: "Stay On Top of Everything.",
    description: "Tasks, reminders and priorities — organized your way.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/tasks.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Tasks that keep up with you",
        body: "Check off what's done, track subtasks, and keep your priorities visible without the clutter.",
        image: "/assets/screenshots/tasks.png",
      },
    ],
  },
  {
    slug: "track-every-goal",
    title: "Track Every Goal.",
    description: "Set targets, watch your progress, stay motivated.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/goals.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "Goals you can actually see progress on",
        body: "Every goal shows a live progress bar, so you always know exactly how close you are.",
        image: "/assets/screenshots/goals.png",
      },
    ],
  },
  {
    slug: "everything-in-its-place",
    title: "Everything, In Its Place.",
    description: "Calendar, timetable, analytics and more — all in one profile.",
    category: "Update",
    author: "Shaikh Zaid (NinjaGamerz)",
    publishedAt: "2026-08-15",
    readingTime: "2 min read",
    coverImage: "/assets/screenshots/profile.png",
    relatedSlugs: ["all-your-study-tools-one-app"],
    sections: [
      {
        id: "overview",
        heading: "One place for everything else",
        body: "Calendar, Timetable, Analytics, Settings and About — organized into a single, simple Profile menu.",
        image: "/assets/screenshots/profile.png",
      },
    ],
  },
];
EOF
echo "  [done] content/newArticles.ts"

# ---------------------------------------------------------------------------
# 8. content/articles.ts — import + merge NEW_ARTICLES, un-feature welcome article
# ---------------------------------------------------------------------------
if [ -f "content/articles.ts" ]; then
  if ! grep -q "NEW_ARTICLES" content/articles.ts; then
    python3 - << 'PYEOF'
path = "content/articles.ts"
content = open(path).read()

if 'import { NEW_ARTICLES } from "@/content/newArticles";' not in content:
    content = content.replace(
        'import type { Article } from "@/types";',
        'import type { Article } from "@/types";\nimport { NEW_ARTICLES } from "@/content/newArticles";',
        1,
    )

# Un-feature the old welcome article so the launch video becomes the single featured article
content = content.replace(
    '    featured: true,\n    popular: true,',
    '    popular: true,',
    1,
)

# Append NEW_ARTICLES before the closing bracket of the ARTICLES array
content = content.rstrip()
if content.endswith("];"):
    content = content[: -len("];")] + "  ...NEW_ARTICLES,\n];\n"

open(path, "w").write(content)
print("  [done] content/articles.ts (merged NEW_ARTICLES, un-featured welcome article)")
PYEOF
  else
    echo "  [skip] content/articles.ts (NEW_ARTICLES already merged)"
  fi
fi

echo ""
echo "All fixes applied. Next steps:"
echo "  1. Confirm public/assets/screenshots/{home,notes,tasks,goals,profile}.png exist"
echo "  2. Confirm public/videos/zetaone-launch.mp4 exists"
echo "  3. npm run lint"
echo "  4. npm run build"
echo ""
echo "When you have the YouTube ID and Instagram URL, run:"
echo '  sed -i '"'"'s#REPLACE_YOUTUBE_ID#YOUR_ID_HERE#'"'"' content/newArticles.ts'
echo '  sed -i '"'"'s#REPLACE_INSTAGRAM_URL#YOUR_URL_HERE#'"'"' content/newArticles.ts'

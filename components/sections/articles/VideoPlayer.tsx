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

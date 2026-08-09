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

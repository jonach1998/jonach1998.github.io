interface LogoTileProps {
  readonly src: string;
  readonly alt: string;
  readonly variant?: "wordmark" | "emblem";
}

const LOGO_TILE_CLASSES = {
  wordmark: "h-12 w-28",
  emblem: "h-20 w-28",
} as const;

export function LogoTile({
  src,
  alt,
  variant = "wordmark",
}: LogoTileProps): React.ReactElement {
  return (
    <span
      className={`inline-flex ${LOGO_TILE_CLASSES[variant]} shrink-0 items-center justify-center`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </span>
  );
}

import type { CSSProperties } from "react";

type ShimmerTextProps = {
  text: string;
  className?: string;
  durationMs?: number;
  baseColor?: string;
  highlightColor?: string;
  bandSize?: string;
  hoverOnly?: boolean;
};

type ShimmerStyle = CSSProperties & {
  "--shimmer-dur"?: string;
  "--shimmer-base"?: string;
  "--shimmer-highlight"?: string;
  "--shimmer-band"?: string;
};

export function ShimmerText({
  text,
  className,
  durationMs,
  baseColor,
  highlightColor,
  bandSize,
  hoverOnly,
}: ShimmerTextProps) {
  const style: ShimmerStyle = {
    "--shimmer-dur": durationMs ? `${durationMs}ms` : undefined,
    "--shimmer-base": baseColor,
    "--shimmer-highlight": highlightColor,
    "--shimmer-band": bandSize,
  };

  return (
    <span
      className={[
        "t-shimmer",
        hoverOnly ? "t-shimmer-hover" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      data-text={text}
      style={style}
    >
      {text}
    </span>
  );
}

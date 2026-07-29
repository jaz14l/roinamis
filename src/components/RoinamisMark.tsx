import waveAsset from "@/assets/roinamis-wave.png.asset.json";

interface RoinamisMarkProps {
  className?: string;
  /** kept for API compatibility with previous SVG mark; unused for image mark */
  strokeWidth?: number;
}

/**
 * The official roinamis wave mark. Rendered untouched: no crop, recolor or overlay.
 * Sized via className.
 */
const RoinamisMark = ({ className }: RoinamisMarkProps) => {
  return (
    <img
      src={waveAsset.url}
      alt="roinamis"
      className={className}
      draggable={false}
    />
  );
};

export default RoinamisMark;

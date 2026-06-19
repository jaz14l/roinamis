import waveSymbol from "@/assets/symbol_06_wave.png";

interface RoinamisMarkProps {
  className?: string;
  /** kept for API compatibility with previous SVG mark; unused for image mark */
  strokeWidth?: number;
}

/**
 * The roinamis wave mark — rendered as the chosen symbol image.
 * Sized via className (height); width is auto.
 */
const RoinamisMark = ({ className }: RoinamisMarkProps) => {
  return (
    <img
      src={waveSymbol}
      alt="roinamis"
      className={className}
      draggable={false}
    />
  );
};

export default RoinamisMark;

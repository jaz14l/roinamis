interface RoinamisMarkProps {
  className?: string;
  /** stroke width in SVG units */
  strokeWidth?: number;
}

/**
 * The roinamis arc mark — five concentric half-arches transitioning from
 * deep espresso (outer) to warm gold (inner), with a gold ring "sun" at center.
 * Rendered as inline SVG so it scales crisply and inherits sizing.
 */
const RoinamisMark = ({ className, strokeWidth = 2 }: RoinamisMarkProps) => {
  // arc colors outer → inner, matching --arc-1..5 tokens
  const arcs = [
    { r: 78, color: "hsl(22 55% 18%)" },
    { r: 64, color: "hsl(20 50% 32%)" },
    { r: 50, color: "hsl(24 55% 45%)" },
    { r: 36, color: "hsl(30 60% 56%)" },
    { r: 22, color: "hsl(36 65% 65%)" },
  ];

  return (
    <svg
      viewBox="0 0 200 110"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {arcs.map((a) => (
        <path
          key={a.r}
          d={`M ${100 - a.r} 100 A ${a.r} ${a.r} 0 0 1 ${100 + a.r} 100`}
          stroke={a.color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      ))}
      {/* center gold "sun" */}
      <circle cx="100" cy="100" r="5" fill="hsl(36 65% 60%)" />
      <circle cx="100" cy="100" r="1.6" fill="hsl(38 30% 94%)" />
    </svg>
  );
};

export default RoinamisMark;

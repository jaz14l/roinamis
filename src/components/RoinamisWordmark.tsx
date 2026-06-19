import wordmarkAsset from "@/assets/roinamis-wordmark.png.asset.json";

interface RoinamisWordmarkProps {
  className?: string;
}

/** roinamis word logo — rendered as image for typographic fidelity. */
const RoinamisWordmark = ({ className }: RoinamisWordmarkProps) => (
  <img src={wordmarkAsset.url} alt="roinamis" className={className} draggable={false} />
);

export default RoinamisWordmark;

import wordmark from "@/assets/roinamis-wordmark.png";

interface RoinamisWordmarkProps {
  className?: string;
}

/** roinamis word logo — rendered as image for typographic fidelity. */
const RoinamisWordmark = ({ className }: RoinamisWordmarkProps) => (
  <img src={wordmark} alt="roinamis" className={className} draggable={false} />
);

export default RoinamisWordmark;

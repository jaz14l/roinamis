import wave from "@/assets/roinamis-wave-line.png";

export default function Philosophy() {
  return (
    <section id="philosophy" className="scroll-mt-32 border-t border-border px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-[1fr_1.5fr] md:gap-24">
        <div>
          <p className="store-label mb-8">Philosophy</p>
          <h2 className="store-title max-w-sm text-4xl leading-tight md:text-5xl">i am more<br />than they see.</h2>
          <img src={wave} alt="roinamis wave" className="mt-12 h-auto w-48" />
        </div>
        <div className="max-w-2xl space-y-6 text-base leading-relaxed md:text-lg">
          <p>roinamis is a brand created around the distance between how we’re seen and who we are. A first impression is often treated as the most important, but it rarely tells the whole story. People read the surface and miss the experiences, struggles, faith, and growth behind it. Our clothing starts with what it leaves out: belief, background, optimism, and the person underneath.</p>
          <p>The name carries that. “roi” comes from El Roi, the God who sees me. It’s the foundation, not a slogan. Through every season, including the ones where you feel unseen or misunderstood, you are fully known. God sees the whole person, not just what shows. “i am more than they see” is what we build from.</p>
          <p>The wave is our symbol, not a translation of the name. It marks life’s ups and downs. Like an ocean wave, it carries movement and force, and it reflects the changes that shape us even when they aren’t visible on the surface. Through every shift, God’s presence stays constant. The form changes, the presence doesn’t.</p>
          <p>roinamis explores identity through authenticity and construction. Familiar forms become a place to explore different sides of yourself, without reducing them to a single label. What you wear can say what people don’t see on their own.</p>
          <p className="pt-4 font-medium">roinamis. wear the story.</p>
        </div>
      </div>
    </section>
  );
}
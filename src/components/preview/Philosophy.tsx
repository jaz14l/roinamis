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
          <p>roinamis is a brand that was created around the distance between how we’re seen and who we are. A first impression is often times deemed the most important, but rarely tells the whole story. Our clothing starts with what it leaves out: belief, background, optimism, and the person underneath.</p>
          <p>roinamis explores identity through authenticity and construction.</p>
          <p>The wave is a way of recognising life’s ups and downs, and finding who you are and your purpose within them. Like an ocean wave or a tsunami, it carries both movement and force. It reflects the changes that shape us, even when they aren’t visible on the surface.</p>
          <p>Familiar forms become a place to explore different sides of yourself, without reducing them to a single label.</p>
          <p className="pt-4 font-medium">roinamis. wear the story.</p>
        </div>
      </div>
    </section>
  );
}
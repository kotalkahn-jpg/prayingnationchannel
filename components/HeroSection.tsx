import SlideIn from "./animation/SlideIn";
import BounceButton from "./animation/BounceButton";
import VerseRotator from "./VerseRotator";



export default function HeroSection() {
  return (
    <section
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-center text-white gold-animated-bg overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1507692049790-de58290a4334')",
  }}
>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>

  <div className="relative z-10 p-8 max-w-3xl">
    <SlideIn direction="down" delay={0.5}>
  <h3 className="text-6xl font-bold mb-6 text-[#D4AF37] relative">
  <span className="relative z-10">
    Spreading Faith & Hope Through Prayer
  </span>

  {/* Soft Gold Glow */}
  <span className="absolute inset-0 text-[#D4AF37] blur-lg opacity-25">
    Spreading Faith & Hope Through Prayer
  </span>
</h3>
</SlideIn>

<SlideIn direction="up" delay={0.2}>
  <VerseRotator />
</SlideIn>

<br></br><br></br>
    
    <SlideIn direction="left" delay={0.7}
    ><div className="flex justify-center gap-4">
      <BounceButton className="bg-[#D4AF37] text-[#0B1E3D] px-8 py-3 rounded-md font-semibold tracking-wide shadow-md hover:shadow-xl transition">
  Read Updates
</BounceButton>

  </div>
   </SlideIn>
  </div>
 
</section>

  );
}

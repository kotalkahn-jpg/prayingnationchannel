import { supabase } from "../lib/supabase";
import Countdown from "./countdown";
import Reveal from "./animation/Reveal";
import { fadeUp } from "./animation/motionVariants";

export default async function FeaturedEventsSection() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .gte("event_date", new Date().toISOString())
    .order("event_date", { ascending: true })
    .limit(3);

  if (!events || events.length === 0) return null;

  const mainEvent = events[0];
  const secondaryEvents = events.slice(1);

  return (
    <section className="bg-[#0B1E3D] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <Reveal variants={fadeUp}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Upcoming Events
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Main Featured Event */}
          <Reveal variants={fadeUp}>
            <div className="md:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 shadow-lg">

              <h3 className="text-3xl font-bold mb-4 text-[#D4AF37]">
                {mainEvent.title}
              </h3>

              <p className="text-gray-300 line-clamp-3">
                {mainEvent.description}
              </p>

              <Countdown targetDate={mainEvent.event_date} />

            </div>
          </Reveal>

          {/* Smaller Events */}
          <div className="space-y-8">
            {secondaryEvents.map((event, index) => (
              <Reveal key={event.id} variants={fadeUp} delay={index * 0.15}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] transition-all duration-500">

                  <h4 className="text-xl font-semibold mb-2 group-hover:text-[#D4AF37]">
                    {event.title}
                  </h4>

                  <p className="text-gray-400 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  <Countdown targetDate={event.event_date} />

                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

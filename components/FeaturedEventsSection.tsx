import { supabase } from "../lib/supabase";
import Reveal from "./animation/Reveal";
import { fadeUp } from "./animation/motionVariants";
import Countdown from "./countdown";

export default async function FeaturedEventsSection() {
  const { data: events } = await supabase
    .from("events")
    .select("*")
    .gte("event_date", new Date().toISOString())
    .order("event_date", { ascending: true })
    .limit(3);

  if (!events || events.length === 0) return null;

  return (
    <section className="bg-[#0B1E3D] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* 3 Event Cards in a Row */}
        <div className="grid md:grid-cols-3 gap-10">

          {events.map((event, index) => {
            const date = new Date(event.event_date);
            const day = date.getDate();
            const month = date.toLocaleString("default", { month: "short" });
            const time = date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <Reveal key={event.id} variants={fadeUp} delay={index * 0.1}>
                <div
                  className={`relative overflow-hidden rounded-xl p-5 flex flex-col justify-between transition-all duration-500
                  ${
                    index === 0
                      ? "bg-[#D4AF37]/10 border border-[#D4AF37]/40 shadow-[0_10px_40px_rgba(212,175,55,0.2)]"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(212,175,55,0.25)]"
                  }`}
                >

                  {/* Next Event Badge */}
                  {index === 0 && (
                    <div className="text-xs uppercase tracking-wider text-[#D4AF37] mb-3">
                      Next Event
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="mb-6">
                    <div className="flex flex-col items-center justify-center bg-[#D4AF37] text-[#0B1E3D] rounded-lg px-4 py-3 w-fit shadow-md">
                      <span className="text-xl font-bold leading-none">
                        {day}
                      </span>
                      <span className="text-xs uppercase tracking-wide">
                        {month}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#D4AF37] transition">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 line-clamp-1 flex-grow">
                    {event.description}
                  </p>

                  {/* Time */}
                  <p className="text-sm text-gray-400 mt-4">
                    {time}
                  </p>

                  {/* Countdown */}
                  <div className="mt-6">
                    <Countdown targetDate={event.event_date} />
                  </div>

                  {/* Gold Bottom Animation */}
                  {index !== 0 && (
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></div>
                  )}
                </div>
              </Reveal>
            );
          })}

        </div>
      </div>
    </section>
  );
}

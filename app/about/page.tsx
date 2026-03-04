"use client";

import { motion } from "framer-motion";
import OurStorySection from "@/components/OurStorySection";
import Image from "next/image";
import FadeIn from "@/components/animation/FadeIn";
import ScaleIn from "@/components/animation/ScaleIn";
import SlideIn from "@/components/animation/SlideIn";
import CountUp from "@/components/animation/CountUp"; 
import { Mail, Linkedin } from "lucide-react";

type TeamMember = {
  name: string;
  role: string;
  verse: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "Kad Kapachika",
    role: "praying nation channel President",
    verse: "John 15:3,7; if the word Truly abides in you, it reshapes your heart and desires to align with christ.",
    image: "/team/kad.jpg",
  },
  {
    name: "Emmanuel Msango",
    role: "Prophet",
    verse: "Romans 8:19, creation is waiting for the sons of GOD to be revealed.",
    image: "/team/emma.jpg",
  },
  {
    name: " Tony Daniel Lungu",
    role: "Pastor",
    verse: "Ensuring every initiative reflects the purpose of the gospel.",
    image: "/team/tony.jpg",
  },
  {
    name: "Ummu Kachule",
    role: "secreatary and media Manager ",
    verse: "Serving communities and spreading compassion.",
    image: "/team/ummu.jpg",
  },
  {
    name: "Lucy Kalowekamo",
    role: "Praying Nation Channel",
    verse: "Helping organize and sustain ministry programs.",
    image: "/team/lucy.jpg",
  },
];

export default function AboutPage() {
  const featured = team[0];
  const others = team.slice(1);

  return (
    <div className="bg-white text-[#0B1E3D]">

      {/* HERO */}
      <section className="relative py-40 px-6 bg-[#0B1E3D] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1600"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          >
            More Than a Ministry.
            <br />
            A Movement of Prayer & Impact.
          </motion.h1>

          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>

          <p className="text-lg text-gray-200">
            Praying Nation Channel unites communities through faith,
            outreach, and strategic partnerships that bring
            lasting transformation.
          </p>

        </div>
      </section>

      <OurStorySection />

      {/* TEAM / WHAT MAKES US DIFFERENT */}
     
     
  <section className="py-32 px-6 bg-[#F8FAFC] relative overflow-hidden">

  {/* Floating background shapes */}
  <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-40 right-0 w-96 h-96 bg-[#0B1E3D]/10 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto relative z-10">

    <FadeIn >
      <div className="text-center mb-16">

        <h2 className="text-4xl font-playfair font-bold text-[#0B1E3D]">
          What Makes Us Different
        </h2>

        <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6 rounded"></div>

        <p className="text-gray-600 max-w-2xl mx-auto mt-6">
          Meet the leaders and partners helping expand the impact of
          Praying Nation Channel through prayer initiatives,
          community outreach, and global ministry collaboration.
        </p>

      </div>
    </FadeIn>

    <div className="grid lg:grid-cols-3 gap-12 items-start">

      {/* FEATURED LEADER */}
      <SlideIn>
        <div className="lg:col-span-1 group rounded-2xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_70px_rgba(212,175,55,0.25)] transition">

          <div className="relative h-80 w-full">

            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-2xl font-semibold">
                {featured.name}
              </p>
              <p className="text-sm text-[#D4AF37]">
                {featured.role}
              </p>
            </div>

          </div>

          <div className="p-8 text-center">

            <p className="text-gray-700 italic leading-relaxed">
              {featured.verse}
            </p>

            {/* social icons */}
            <div className="flex justify-center gap-4 mt-6">

              <a className="text-gray-500 hover:text-[#D4AF37] transition">
                <Linkedin size={18}/>
              </a>

              <a className="text-gray-500 hover:text-[#D4AF37] transition">
                <Mail size={18}/>
              </a>

            </div>

          </div>

        </div>
      </SlideIn>


      {/* OTHER TEAM MEMBERS */}
      <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

        {others.map((member, index) => {

          const Animation = index % 2 === 0 ? FadeIn : ScaleIn;

          return (

            <Animation key={index}>

              <div className="group rounded-2xl overflow-hidden bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.18)] hover:-translate-y-2 transition-all duration-300">

                <div className="relative h-60 w-full">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-6 text-white">
                    <p className="font-semibold text-lg">
                      {member.name}
                    </p>
                    <p className="text-xs text-[#D4AF37]">
                      {member.role}
                    </p>
                  </div>

                </div>

                <div className="p-6 text-center">

                  <p className="text-sm text-gray-700 italic">
                    {member.verse}
                  </p>

                 

                  

                </div>

              </div>

            </Animation>

          )

        })}

      </div>

    </div>

  </div>
</section>
<section className="bg-[#0B1E3D] py-32 px-6">

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">

    <div>
      <h3 className="text-5xl font-bold text-[#D4AF37]">
        <CountUp end={15} suffix="+" />
      </h3>

      <p className="mt-4 text-lg text-gray-200">
        Strategic Partnerships
      </p>
    </div>

    <div>
      <h3 className="text-5xl font-bold text-[#D4AF37]">
        <CountUp end={120} suffix="+" />
      </h3>

      <p className="mt-4 text-lg text-gray-200">
        Prayer Gatherings Hosted
      </p>
    </div>

    <div>
      <h3 className="text-5xl font-bold text-[#D4AF37]">
        <CountUp end={5000} suffix="+" />
      </h3>

      <p className="mt-4 text-lg text-gray-200">
        Lives Reached
      </p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">

        <h2 className="text-4xl font-playfair font-bold mb-6">
          Join the Movement
        </h2>

        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Whether through partnership, participation, or support —
          your involvement helps us expand our reach and deepen our impact.
        </p>

        <button className="bg-[#D4AF37] text-[#0B1E3D] px-8 py-3 rounded-lg font-semibold hover:brightness-110 transition">
          Partner With Us
        </button>

      </section>

      

    </div>
  );
}
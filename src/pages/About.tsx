import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Button } from '../components/ui/Button';
import { teamMembers, agencyStats, agencyValues } from '../data/teamData';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-36 md:pt-44 pb-20">
      {/* ========================================================= */}
      {/* 1. HERO / ABOUT VYRO */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] animate-pulse" />
          // ABOUT VYRO STUDIO
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98] max-w-5xl"
        >
          An independent studio driven by{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF4D] to-[#F5F4F0]">
            radical craft.
          </span>
        </motion.h1>

        {/* Big Editorial Photo & Intro Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#191A21] border border-white/10 group shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
                alt="VYRO Studio Creative Atelier"
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 font-mono text-xs text-[#F5F4F0] bg-[#101116]/80 px-4 py-2 rounded-lg backdrop-blur-md border border-white/10">
                // ATELIER ZURICH — EST. 2018
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6 text-base sm:text-lg text-[#A6A6B0] font-light leading-relaxed">
            <p className="text-xl sm:text-2xl text-[#F5F4F0] font-syne font-semibold leading-snug">
              We operate at the nexus of fine art direction, human ergonomics, and surgical software engineering.
            </p>
            <p>
              Founded in Zurich with operational presence in New York and Tokyo, VYRO Studio was born from a frustration with homogenised agencies that treat design as a checklist and code as an afterthought.
            </p>
            <p>
              We deliberately cap our client roster each calendar quarter to guarantee our partners direct access to our most senior creative minds.
            </p>
            <div className="pt-4">
              <Button to="/contact" size="md" showArrow>
                Work With Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. OUR STORY & TIMELINE */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#14151C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="GENESIS & EVOLUTION"
            title="The Journey of"
            titleAccent="VYRO Studio"
            subtitle="From a two-person underground design experiment into an internationally recognized creative powerhouse."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                year: '2018',
                title: 'The Inception',
                desc: 'Founded in Zurich by Julian Vance and Maya Lin-Chen as an experimental digital laboratory dedicated to WebGL and Swiss typography.'
              },
              {
                year: '2020',
                title: 'Global Expansion',
                desc: 'Established our Manhattan atelier. Expanded practice to headless e-commerce, receiving our first international Awwwards Site of the Day honor.'
              },
              {
                year: '2022',
                title: 'Architectural Systems',
                desc: 'Introduced enterprise design systems and creative engineering divisions, serving premier European luxury maisons and Silicon Valley startups.'
              },
              {
                year: '2024+',
                title: 'The Benchmark Standard',
                desc: 'Over 38 flagship releases shipped, 16 design awards won, and continuous leadership in real-time 3D and high-velocity web development.'
              }
            ].map((milestone, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-[#191A21] border border-white/[0.08] relative group hover:border-[#A6FF4D]/40 transition-all"
              >
                <span className="font-mono text-2xl font-bold text-[#A6FF4D] block mb-4">
                  {milestone.year}
                </span>
                <h3 className="font-syne text-xl font-bold uppercase text-[#F5F4F0] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-sm text-[#A6A6B0] leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MISSION & VISION */}
      {/* ========================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="p-10 md:p-14 rounded-3xl bg-[#191A21] border border-white/[0.08] relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#A6FF4D]/10 text-[#A6FF4D] flex items-center justify-center mb-8 border border-[#A6FF4D]/20">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6FF4D] block mb-3">
              // OUR MISSION
            </span>
            <h3 className="font-syne text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#F5F4F0] mb-6">
              To move brands forward through uncompromising digital craft.
            </h3>
            <p className="text-base text-[#A6A6B0] font-light leading-relaxed">
              We exist to elevate how humanity interacts with brands online. By blending artistic courage with surgical technical precision, we build digital artifacts that inspire loyalty and drive demonstrable enterprise value.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 md:p-14 rounded-3xl bg-[#191A21] border border-white/[0.08] relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-[#A6FF4D]/10 text-[#A6FF4D] flex items-center justify-center mb-8 border border-[#A6FF4D]/20">
              <Eye className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6FF4D] block mb-3">
              // OUR VISION
            </span>
            <h3 className="font-syne text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#F5F4F0] mb-6">
              To define the aesthetic and technical benchmark of the web.
            </h3>
            <p className="text-base text-[#A6A6B0] font-light leading-relaxed">
              We envision an internet where speed, emotion, and aesthetic beauty are unified. A web free from generic mediocrity, where every pixel, layout, and interaction honors human attention.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR VALUES */}
      {/* ========================================================= */}
      <section className="py-24 bg-[#14151C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="CORE VALUES"
            title="The principles that"
            titleAccent="guide our hands"
            subtitle="Our standards are non-negotiable. They shape every proposal, prototype, and line of code."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agencyValues.map((val) => (
              <div
                key={val.number}
                className="p-8 rounded-2xl bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-sm text-[#A6FF4D] block mb-4">
                    // {val.number}
                  </span>
                  <h3 className="font-syne text-2xl font-bold uppercase tracking-tight text-[#F5F4F0] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[#A6A6B0] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TEAM MEMBERS */}
      {/* ========================================================= */}
      <section className="py-28 max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="LEADERSHIP & TALENT"
          title="The minds behind"
          titleAccent="the work"
          subtitle="A multidisciplinary collective of award-winning designers, creative technologists, and brand strategists."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/40 transition-all duration-500"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#101116]">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#191A21] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F5F4F0]">
                  <span className="px-2.5 py-1 rounded bg-[#101116]/80 backdrop-blur-md border border-white/10">
                    {member.experienceYears}y Experience
                  </span>
                  <span className="text-[#A6FF4D]">
                    {member.discipline}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-6">
                <h3 className="font-syne text-2xl font-bold uppercase text-[#F5F4F0] group-hover:text-[#A6FF4D] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-[#A6A6B0] mt-1 mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-[#A6A6B0] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. AGENCY STATS & IMPACT */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#14151C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {agencyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  className="text-4xl sm:text-5xl text-[#A6FF4D] font-extrabold"
                />
                <span className="mt-2 text-xs font-mono text-[#A6A6B0] uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

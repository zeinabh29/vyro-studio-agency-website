import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { servicesData } from '../data/servicesData';

export const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-36 md:pt-44 pb-20">
      {/* ========================================================= */}
      {/* 1. SERVICES HERO */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] animate-pulse" />
          // CAPABILITIES & PRACTICE
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98] max-w-5xl"
        >
          Transformative disciplines for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF4D] to-[#F5F4F0]">
            visionary brands.
          </span>
        </motion.h1>

        <p className="mt-8 text-lg sm:text-xl text-[#A6A6B0] max-w-2xl font-light leading-relaxed">
          We combine strategic rigor, award-winning visual craft, and deep frontend engineering to build category-defining digital products.
        </p>
      </section>

      {/* ========================================================= */}
      {/* 2. DETAILED SERVICES BREAKDOWN (Each Visually Unique) */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-24 md:space-y-36">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className={`p-8 sm:p-12 md:p-16 rounded-3xl bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/30 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Subtle visual accent glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#A6FF4D]/5 rounded-full blur-[100px] pointer-events-none" />

              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Left: Content Details */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Service Number Badge */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-mono text-3xl sm:text-4xl font-extrabold text-[#A6FF4D]">
                      {service.number}
                    </span>
                    <span className="h-[1px] w-12 bg-white/20" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6B0]">
                      VYRO PRACTICE
                    </span>
                  </div>

                  <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#F5F4F0] mb-6">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#F5F4F0] font-normal leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm sm:text-base text-[#A6A6B0] leading-relaxed mb-8">
                    {service.detailedExplanation}
                  </p>

                  {/* Highlight pill */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-8 inline-flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-[#A6FF4D] shrink-0" />
                    <span className="text-xs sm:text-sm font-mono text-[#F5F4F0]">
                      {service.highlight}
                    </span>
                  </div>

                  {/* Deliverables List */}
                  <div className="mb-8">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] mb-4">
                      // Core Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A6A6B0]">
                          <CheckCircle2 className="w-4 h-4 text-[#A6FF4D] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Methodologies */}
                  <div className="pt-6 border-t border-white/5 mb-8">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-[#A6A6B0] mb-3">
                      // Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-md bg-[#101116] border border-white/10 font-mono text-xs text-[#F5F4F0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Service CTA */}
                  <div>
                    <Button to="/contact" size="md" showArrow>
                      Inquire About {service.title}
                    </Button>
                  </div>
                </div>

                {/* Right: Bespoke Visual Preview */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#101116] border border-white/10 group shadow-2xl">
                    <img
                      src={service.visualPreview.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-70" />

                    {/* Visual Overlay Tag */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#101116]/85 backdrop-blur-md border border-white/10">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6FF4D] block mb-1">
                        FOCUS AREA
                      </span>
                      <span className="font-syne font-bold text-sm text-[#F5F4F0]">
                        {service.visualPreview.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ========================================================= */}
      {/* 3. OUR PROCESS (Discover, Define, Design, Develop, Deploy) */}
      {/* ========================================================= */}
      <section className="mt-36 py-28 bg-[#14151C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="ENGAGEMENT LIFECYCLE"
            title="Our five-phase"
            titleAccent="creative methodology"
            subtitle="Predictable delivery, radical transparency, and obsessive focus on exceptional outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                name: 'Discover',
                desc: 'Audience analysis, market landscape immersion, and technical architecture scoping.'
              },
              {
                step: '02',
                name: 'Define',
                desc: 'Strategic brand positioning, user flow choreography, and information architecture.'
              },
              {
                step: '03',
                name: 'Design',
                desc: 'High-fidelity UI, typography curation, design tokens, and tactile interactive prototypes.'
              },
              {
                step: '04',
                name: 'Develop',
                desc: 'Production-grade frontend engineering, WebGL, 60fps animations, and CMS integration.'
              },
              {
                step: '05',
                name: 'Deploy',
                desc: 'Global CDN rollout, Core Web Vitals audit, Lighthouse verification, and SEO launch.'
              }
            ].map((phase, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xl font-bold text-[#A6FF4D] block mb-3">
                    {phase.step}
                  </span>
                  <h3 className="font-syne text-lg font-bold uppercase text-[#F5F4F0] mb-2">
                    {phase.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A6A6B0] leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles, Zap, Layers, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { AnimatedCounter } from '../components/ui/AnimatedCounter';
import { Marquee } from '../components/ui/Marquee';
import { projectsData } from '../data/projectsData';
import { servicesData } from '../data/servicesData';
import { testimonialsData, trustedClients } from '../data/testimonialsData';
import { agencyStats } from '../data/teamData';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] overflow-hidden">
      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="relative min-h-[92vh] pt-36 md:pt-44 pb-20 flex flex-col justify-between overflow-hidden">
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#A6FF4D]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-[#22232B]/80 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 my-auto">
          {/* Studio status pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#191A21] border border-white/10 text-xs font-mono tracking-wider text-[#A6A6B0] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#A6FF4D] animate-ping" />
            <span className="text-[#F5F4F0] font-semibold">VYRO STUDIO</span>
            <span className="text-white/20">|</span>
            <span>AWARD-WINNING DIGITAL PRACTICE</span>
          </motion.div>

          {/* Large Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="max-w-5xl"
          >
            <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98]">
              We create digital experiences that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF4D] via-[#c6ff88] to-[#F5F4F0]">
                move brands forward.
              </span>
            </h1>
          </motion.div>

          {/* Hero Subtitle & CTA Row with Editorial Grid */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6"
            >
              <p className="text-lg md:text-xl text-[#A6A6B0] font-light leading-relaxed max-w-xl">
                An independent creative studio engineering high-impact web design, brand systems, and transformative digital experiences for market pioneers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button to="/work" size="lg" showArrow cursorText="PROJECTS">
                  Explore Our Work
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Let's Talk
                </Button>
              </div>
            </motion.div>

            {/* Abstract Visual / Interactive 3D Mockup Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#191A21] to-[#121319] border border-white/10 p-3 shadow-2xl group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-[#101116]">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                    alt="Creative Digital Experience Visual"
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Micro-Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-[#101116]/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#A6FF4D]" />
                      <span className="text-[#F5F4F0]">WebGL & Architectural Shaders</span>
                    </div>
                    <span className="text-[#A6FF4D] font-bold">60 FPS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-16 pt-8 flex items-center justify-between border-t border-white/5 text-xs font-mono text-[#A6A6B0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A6FF4D]" />
            <span>ZURICH // NEW YORK // TOKYO</span>
          </div>
          <div className="flex items-center gap-2 text-[#F5F4F0]">
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-[#A6FF4D]" />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. TRUSTED BY SECTION */}
      {/* ========================================================= */}
      <section className="py-14 border-y border-white/[0.08] bg-[#14151C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
          <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6A6B0] text-center">
            // TRUSTED BY FORWARD-THINKING ENTERPRISES & CULTURAL PIONEERS
          </p>
        </div>
        <Marquee speed="normal" pauseOnHover={true}>
          {trustedClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#A6FF4D]/30 transition-all cursor-default"
            >
              <span className="font-syne text-xl md:text-2xl font-extrabold tracking-tighter text-[#F5F4F0] hover:text-[#A6FF4D] transition-colors">
                {client.name}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6A6B0]">
                [{client.sector} — {client.location}]
              </span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* ========================================================= */}
      {/* 3. INTRODUCTION / PHILOSOPHY */}
      {/* ========================================================= */}
      <section className="py-28 md:py-36 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#A6FF4D] block mb-4">
                // 01 PHILOSOPHY
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F4F0]">
                We believe digital craft is the purest differentiator in modern commerce.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8 text-lg sm:text-xl text-[#A6A6B0] font-light leading-relaxed">
              <p>
                In a digital landscape drowned in homogenised templates, pre-packaged libraries, and indistinguishable software interfaces, genuine creative conviction is extraordinarily rare.
              </p>
              <p className="text-[#F5F4F0] font-normal border-l-2 border-[#A6FF4D] pl-6 py-2">
                VYRO Studio operates at the bleeding edge where architectural design discipline converges with surgical engineering speed. We build digital flagships that do not simply exist—they dominate.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#A6FF4D] hover:underline group"
                >
                  <span>Explore Agency Manifesto & Story</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SERVICES PREVIEW */}
      {/* ========================================================= */}
      <section className="py-28 md:py-36 bg-[#14151C] relative border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="EXPERTISE"
              title="Disciplines that fuel"
              titleAccent="category leaders"
              subtitle="End-to-end creative capabilities engineered to scale from initial brand conception to global deployment."
              className="mb-0"
            />
            <Button to="/services" variant="outline" showArrow>
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {servicesData.slice(0, 4).map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-10 rounded-2xl bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/40 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm text-[#A6FF4D] px-3 py-1 rounded-full bg-[#A6FF4D]/10 border border-[#A6FF4D]/20">
                      {service.number}
                    </span>
                    <ArrowUpRight className="w-5 h-5 text-[#A6A6B0] group-hover:text-[#A6FF4D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-syne text-2xl sm:text-3xl font-bold uppercase tracking-tight text-[#F5F4F0] group-hover:text-[#A6FF4D] transition-colors mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#A6A6B0] leading-relaxed mb-8">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {service.deliverables.slice(0, 3).map((d, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-[#A6A6B0] bg-white/[0.03] px-3 py-1 rounded-md"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. FEATURED PROJECTS */}
      {/* ========================================================= */}
      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              badge="PORTFOLIO"
              title="Selected"
              titleAccent="Case Studies"
              subtitle="A curated showcase of recent digital flagships, brand systems, and platform architectures."
              className="mb-0"
            />
            <Button to="/work" showArrow cursorText="ALL">
              View All 6 Projects
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout={idx === 0 ? 'featured' : 'grid'}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. WHY VYRO STUDIO */}
      {/* ========================================================= */}
      <section className="py-28 md:py-36 bg-[#14151C] border-y border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="WHY PARTNER WITH US"
            title="Engineered for"
            titleAccent="unrivalled impact"
            subtitle="Four guiding pillars that govern how we conceptualize, execute, and deliver world-class digital products."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: 'High Velocity Execution',
                desc: 'Zero corporate bureaucracy. Direct access to elite senior partners delivering production-grade milestones with blistering cadence.'
              },
              {
                icon: Layers,
                title: 'Bespoke Art Direction',
                desc: 'We never reuse generic UI templates. Every typography system, grid, and layout is custom designed to capture your distinctive brand DNA.'
              },
              {
                icon: Cpu,
                title: 'Sub-Second Performance',
                desc: 'Clean code architecture and surgical optimization achieving 100/100 Core Web Vitals and frictionless conversion flows.'
              },
              {
                icon: Award,
                title: 'International Recognition',
                desc: 'Over 16 global honors from Awwwards, FWA, and CSS Design Awards ensuring your brand stands proud at the industry pinnacle.'
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-[#191A21] border border-white/[0.08] hover:border-[#A6FF4D]/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 text-[#A6FF4D] flex items-center justify-center mb-6">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-syne text-xl font-bold uppercase text-[#F5F4F0] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#A6A6B0] leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. ANIMATED STATISTICS */}
      {/* ========================================================= */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 text-center">
            {agencyStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  className="text-4xl sm:text-5xl lg:text-6xl text-[#A6FF4D] font-extrabold"
                />
                <span className="mt-3 text-xs md:text-sm font-mono text-[#A6A6B0] uppercase tracking-wider max-w-[160px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. TESTIMONIALS */}
      {/* ========================================================= */}
      <section className="py-28 md:py-36 bg-[#14151C] border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            badge="TESTIMONIALS"
            title="Voices from our"
            titleAccent="client partners"
            subtitle="Verified feedback from founders, managing partners, and design leaders who have experienced the VYRO standard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-2xl bg-[#191A21] border border-white/[0.08] flex flex-col justify-between relative group hover:border-[#A6FF4D]/30 transition-all"
              >
                {item.highlightMetric && (
                  <span className="absolute top-8 right-8 text-xs font-mono px-3 py-1 rounded-full bg-[#A6FF4D]/10 text-[#A6FF4D] border border-[#A6FF4D]/20">
                    {item.highlightMetric}
                  </span>
                )}
                <p className="text-base sm:text-lg text-[#F5F4F0] font-light leading-relaxed mb-8 pr-12">
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <h4 className="font-syne font-bold text-[#F5F4F0]">
                      {item.author}
                    </h4>
                    <p className="text-xs text-[#A6A6B0] font-mono">
                      {item.role} // {item.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

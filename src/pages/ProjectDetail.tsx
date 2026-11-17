import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { getProjectBySlug, getNextProject } from '../data/projectsData';
import { Button } from '../components/ui/Button';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/work" replace />;
  }

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-40 px-6 text-center">
        <h1 className="font-syne text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-[#A6A6B0] mb-8">The requested case study does not exist or has been archived.</p>
        <Button to="/work" showArrow>Back to Portfolio</Button>
      </div>
    );
  }

  const nextProject = getNextProject(project.slug);

  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-32 md:pt-40 pb-28">
      {/* Top Breadcrumb & Return */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A6A6B0] hover:text-[#A6FF4D] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to All Works</span>
        </Link>
      </div>

      {/* Case Study Hero */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20">
            {project.category}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-[#A6A6B0] bg-[#191A21] border border-white/10">
            Year {project.year}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-mono text-[#A6A6B0] bg-[#191A21] border border-white/10">
            Client: {project.client}
          </span>
        </div>

        <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98] max-w-5xl">
          {project.name}
        </h1>

        <p className="mt-8 text-xl sm:text-2xl text-[#A6A6B0] font-light leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Services & Metadata strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6B0] block mb-2">
              // Client Partner
            </span>
            <span className="font-syne font-bold text-base text-[#F5F4F0]">
              {project.client}
            </span>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6B0] block mb-2">
              // Timeline / Year
            </span>
            <span className="font-syne font-bold text-base text-[#F5F4F0]">
              {project.year}
            </span>
          </div>
          <div className="col-span-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6A6B0] block mb-2">
              // Core Services Provided
            </span>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s, i) => (
                <span
                  key={i}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-[#191A21] text-[#F5F4F0] border border-white/5"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Cover Visual */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-[#191A21] border border-white/10 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover filter brightness-95"
          />
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#191A21] border border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {project.results.map((r, i) => (
            <div key={i} className="pt-6 md:pt-0 md:px-6 first:pt-0">
              <span className="font-syne text-4xl sm:text-5xl font-extrabold text-[#A6FF4D] block mb-2">
                {r.metric}
              </span>
              <span className="font-mono text-xs uppercase tracking-wider text-[#A6A6B0]">
                {r.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Breakdown: Challenge & Strategy */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Challenge */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[#191A21] border border-white/[0.08]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block mb-4">
              // 01 THE CHALLENGE
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold uppercase text-[#F5F4F0] mb-6">
              Shattering category conformity
            </h3>
            <p className="text-base text-[#A6A6B0] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Strategy */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-[#191A21] border border-white/[0.08]">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block mb-4">
              // 02 THE STRATEGY
            </span>
            <h3 className="font-syne text-2xl sm:text-3xl font-bold uppercase text-[#F5F4F0] mb-6">
              Designing the benchmark
            </h3>
            <p className="text-base text-[#A6A6B0] leading-relaxed">
              {project.strategy}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Showcase 1 */}
      {project.galleryImages.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
          <div className="rounded-3xl overflow-hidden bg-[#191A21] border border-white/10">
            <div className="relative aspect-[16/9]">
              <img
                src={project.galleryImages[0].url}
                alt={project.galleryImages[0].caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-[#101116] border-t border-white/5 font-mono text-xs text-[#A6A6B0]">
              FIG 01 // {project.galleryImages[0].caption}
            </div>
          </div>
        </section>
      )}

      {/* Narrative Breakdown: Design Process & Final Solution */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block">
              // 03 DESIGN & ENGINEERING PROCESS
            </span>
            <h2 className="font-syne text-3xl sm:text-4xl font-bold uppercase text-[#F5F4F0]">
              Crafting every interaction at 60 frames per second
            </h2>
            <p className="text-base text-[#A6A6B0] leading-relaxed">
              {project.designProcess}
            </p>
            <p className="text-base text-[#A6A6B0] leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#14151C] border border-white/10">
            <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block mb-6">
              // DELIVERED ARTIFACTS
            </span>
            <ul className="space-y-4">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#F5F4F0]">
                  <CheckCircle2 className="w-5 h-5 text-[#A6FF4D] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Showcase 2 & 3 */}
      {project.galleryImages.length > 1 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.galleryImages.slice(1).map((img, idx) => (
              <div key={idx} className="rounded-3xl overflow-hidden bg-[#191A21] border border-white/10 flex flex-col justify-between">
                <div className="relative aspect-[4/3]">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-[#101116] border-t border-white/5 font-mono text-xs text-[#A6A6B0]">
                  FIG 0{idx + 2} // {img.caption}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project Footer Bar */}
      <section className="border-t border-white/[0.08] pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A6FF4D] block mb-4">
            // NEXT CASE STUDY
          </span>
          <Link
            to={`/work/${nextProject.slug}`}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-6"
            data-cursor="NEXT"
          >
            <div>
              <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase text-[#F5F4F0] group-hover:text-[#A6FF4D] transition-colors">
                {nextProject.name}
              </h2>
              <p className="font-mono text-sm text-[#A6A6B0] mt-2">
                {nextProject.category} — {nextProject.tagline}
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-[#191A21] border border-white/10 group-hover:bg-[#A6FF4D] group-hover:border-[#A6FF4D] text-[#F5F4F0] group-hover:text-[#101116] flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-8 h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

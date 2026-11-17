import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  layout?: 'grid' | 'featured' | 'compact';
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layout = 'grid',
  index = 0,
}) => {
  const isFeatured = layout === 'featured';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.15 }}
      className={`group relative flex flex-col ${isFeatured ? 'md:col-span-2' : ''}`}
    >
      <Link
        to={`/work/${project.slug}`}
        className="block overflow-hidden rounded-2xl bg-[#191A21] border border-[rgba(255,255,255,0.08)] transition-all duration-500 hover:border-[rgba(166,255,77,0.4)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        data-cursor="VIEW"
      >
        {/* Image Container with Zoom & Vignette */}
        <div className={`relative w-full overflow-hidden ${isFeatured ? 'aspect-[16/9]' : 'aspect-[4/3]'} bg-[#191A21]`}>
          <img
            src={project.heroImage}
            alt={`${project.name} – ${project.tagline}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
          />

          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#101116] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Top Badges: Category & Year */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase bg-[#101116]/80 backdrop-blur-md text-[#F5F4F0] border border-white/10 group-hover:border-[#A6FF4D]/40 transition-colors">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono text-[#A6A6B0] bg-[#101116]/80 backdrop-blur-md border border-white/10">
              {project.year}
            </span>
          </div>

          {/* Floating Hover Arrow Circle */}
          <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-[#A6FF4D] text-[#101116] flex items-center justify-center opacity-0 translate-y-4 scale-75 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out shadow-lg shadow-[#A6FF4D]/25">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Card Info Details */}
        <div className="p-6 md:p-8 bg-[#191A21]/90">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-syne text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#F5F4F0] group-hover:text-[#A6FF4D] transition-colors duration-300">
                  {project.name}
                </h3>
                <span className="text-xs text-[#A6A6B0] font-mono">
                  // {project.client}
                </span>
              </div>
              <p className="mt-2 text-sm text-[#A6A6B0] line-clamp-2 leading-relaxed">
                {project.tagline}
              </p>
            </div>
          </div>

          {/* Services tags */}
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {project.services.slice(0, 3).map((service, i) => (
              <span
                key={i}
                className="text-[11px] font-mono text-[#A6A6B0] bg-white/[0.04] px-2.5 py-1 rounded-md"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projectsData } from '../data/projectsData';
import { FilterCategory } from '../types';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');

  const categories: FilterCategory[] = [
    'All',
    'Web Design',
    'Branding',
    'Development',
    'Digital Experience',
  ];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-36 md:pt-44 pb-28">
      {/* ========================================================= */}
      {/* 1. PORTFOLIO HERO */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] animate-pulse" />
          // SELECTED CASE STUDIES (2022–2024)
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98] max-w-4xl"
            >
              Excellence across{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF4D] to-[#F5F4F0]">
                every touchpoint.
              </span>
            </motion.h1>
            <p className="mt-6 text-base sm:text-lg text-[#A6A6B0] max-w-xl font-light leading-relaxed">
              Explore our portfolio of award-nominated platforms, luxury brand transformations, and interactive WebGL experiences.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#A6A6B0] pb-2">
            <span>SHOWING:</span>
            <span className="px-3 py-1 rounded-full bg-[#191A21] border border-white/10 text-[#A6FF4D] font-bold">
              {filteredProjects.length} OF {projectsData.length} WORKS
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-12 flex flex-wrap gap-2.5 pt-8 border-t border-white/[0.08]">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 select-none ${
                  isActive
                    ? 'text-[#101116] font-bold shadow-[0_0_20px_rgba(166,255,77,0.3)]'
                    : 'text-[#A6A6B0] bg-[#191A21] border border-white/10 hover:border-white/20 hover:text-[#F5F4F0]'
                }`}
                data-cursor="FILTER"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 rounded-full bg-[#A6FF4D]"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. PROJECT GRID */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                layout={idx === 0 && activeCategory === 'All' ? 'featured' : 'grid'}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Copy, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    services: [] as string[],
    budget: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const availableServices = [
    'Web Design & Development',
    'UI/UX & Product Design',
    'Branding & Visual Identity',
    'Digital Strategy',
    'Technical SEO & Growth',
    'Creative 3D / WebGL Experience',
  ];

  const budgetRanges = [
    '<$25k (Sprint)',
    '$25k – $50k',
    '$50k – $100k',
    '$100k – $250k+',
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service],
      };
    });
    if (errors.services) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated.services;
        return updated;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid work email address.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required.';
    }

    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service.';
    }

    if (!formData.projectDetails.trim() || formData.projectDetails.trim().length < 15) {
      newErrors.projectDetails = 'Please provide a brief description (at least 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable inquiry processing and local persistence
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('vyro_inquiries') || '[]');
        stored.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('vyro_inquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('LocalStorage unavailable for inquiry cache');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('partnerships@vyrostudio.design');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#101116] text-[#F5F4F0] pt-36 md:pt-44 pb-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-[#A6FF4D] bg-[#A6FF4D]/10 border border-[#A6FF4D]/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A6FF4D] animate-pulse" />
            // INITIATE ENGAGEMENT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-[#F5F4F0] leading-[0.98]"
          >
            Let's build something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6FF4D] to-[#F5F4F0]">
              exceptional.
            </span>
          </motion.h1>

          <p className="mt-8 text-lg sm:text-xl text-[#A6A6B0] font-light leading-relaxed max-w-2xl">
            Have a project in mind, an upcoming RFP, or a brand ready to redefine its space? Tell us about your vision below. We review all submissions within 24 hours.
          </p>
        </div>

        {/* Main Grid: Form (Col 7) & Contact Sidebar (Col 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* ========================================================= */}
          {/* LEFT: INTERACTIVE CONTACT FORM */}
          {/* ========================================================= */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl bg-[#191A21] border border-white/[0.08] relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#A6FF4D]/10 border border-[#A6FF4D]/30 text-[#A6FF4D] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="font-syne text-3xl font-bold uppercase text-[#F5F4F0] mb-3">
                      Inquiry Received
                    </h2>
                    <p className="text-sm sm:text-base text-[#A6A6B0] max-w-md mx-auto mb-8 leading-relaxed">
                      Thank you, <span className="text-[#F5F4F0] font-semibold">{formData.fullName}</span>. Our partners at VYRO Studio have logged your details. We will respond with an initial project discovery brief within 24 hours.
                    </p>
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs text-[#A6A6B0] max-w-sm mx-auto mb-8 text-left space-y-1">
                      <div>// SUBMITTED: {formData.email}</div>
                      <div>// COMPANY: {formData.company}</div>
                      <div>// SERVICES: {formData.services.join(', ')}</div>
                    </div>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          company: '',
                          services: [],
                          budget: '',
                          projectDetails: '',
                        });
                      }}
                      variant="secondary"
                    >
                      Submit Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Elena Rostova"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#101116] border ${
                            errors.fullName ? 'border-red-500' : 'border-white/10'
                          } text-[#F5F4F0] placeholder:text-[#A6A6B0]/50 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors`}
                        />
                        {errors.fullName && (
                          <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-2">
                          Work Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. elena@company.com"
                          className={`w-full px-4 py-3.5 rounded-xl bg-[#101116] border ${
                            errors.email ? 'border-red-500' : 'border-white/10'
                          } text-[#F5F4F0] placeholder:text-[#A6A6B0]/50 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-2">
                        Company or Organization *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. PULSE Compute Inc."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#101116] border ${
                          errors.company ? 'border-red-500' : 'border-white/10'
                        } text-[#F5F4F0] placeholder:text-[#A6A6B0]/50 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors`}
                      />
                      {errors.company && (
                        <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.company}
                        </p>
                      )}
                    </div>

                    {/* Services Required (Interactive selectable chips) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-3">
                        Services Required * (Select all that apply)
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {availableServices.map((svc) => {
                          const isSelected = formData.services.includes(svc);
                          return (
                            <button
                              type="button"
                              key={svc}
                              onClick={() => handleServiceToggle(svc)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 select-none ${
                                isSelected
                                  ? 'bg-[#A6FF4D] text-[#101116] font-bold shadow-[0_0_15px_rgba(166,255,77,0.3)]'
                                  : 'bg-[#101116] text-[#A6A6B0] border border-white/10 hover:border-white/20 hover:text-[#F5F4F0]'
                              }`}
                            >
                              {svc}
                            </button>
                          );
                        })}
                      </div>
                      {errors.services && (
                        <p className="text-red-400 text-xs mt-2 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.services}
                        </p>
                      )}
                    </div>

                    {/* Project Budget (Optional Selection) */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-3">
                        Estimated Investment Range (Optional)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {budgetRanges.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setFormData({ ...formData, budget: isSelected ? '' : b })}
                              className={`py-2.5 px-3 rounded-xl text-xs font-mono text-center transition-all ${
                                isSelected
                                  ? 'bg-[#A6FF4D] text-[#101116] font-bold'
                                  : 'bg-[#101116] text-[#A6A6B0] border border-white/10 hover:border-white/20 hover:text-[#F5F4F0]'
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-[#F5F4F0] mb-2">
                        Project Overview & Goals *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDetails}
                        onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                        placeholder="Tell us about the timeline, current challenges, and what success looks like for this engagement..."
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#101116] border ${
                          errors.projectDetails ? 'border-red-500' : 'border-white/10'
                        } text-[#F5F4F0] placeholder:text-[#A6A6B0]/50 text-sm focus:outline-none focus:border-[#A6FF4D] transition-colors resize-none`}
                      />
                      {errors.projectDetails && (
                        <p className="text-red-400 text-xs mt-1 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.projectDetails}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2"
                        showArrow={!isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-[#101116] border-t-transparent rounded-full animate-spin" />
                            Transmitting Inquiry...
                          </span>
                        ) : (
                          'Send Project Inquiry'
                        )}
                      </Button>
                    </div>

                    <p className="text-[11px] font-mono text-[#A6A6B0] text-center pt-2">
                      🔒 Strictly Confidential. We execute Non-Disclosure Agreements prior to all deep discovery calls.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT: CONTACT INFORMATION & STUDIOS */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-[#191A21] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block mb-3">
                // DIRECT CORRESPONDENCE
              </span>
              <h3 className="font-syne text-xl font-bold uppercase text-[#F5F4F0] mb-4">
                Prefer direct email?
              </h3>
              <p className="text-sm text-[#A6A6B0] leading-relaxed mb-6">
                Send your deck, brief, or request directly to our partnership team.
              </p>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#101116] border border-white/10 font-mono text-xs text-[#F5F4F0]">
                <span>partnerships@vyrostudio.design</span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#A6A6B0] hover:text-[#A6FF4D] transition-colors"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#A6FF4D]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Studio Locations */}
            <div className="p-8 rounded-3xl bg-[#191A21] border border-white/[0.08] space-y-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block">
                // GLOBAL STUDIOS
              </span>

              <div className="space-y-4 text-sm divide-y divide-white/5">
                <div className="pt-2 first:pt-0">
                  <h4 className="font-syne font-bold text-[#F5F4F0] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#A6FF4D]" />
                    Atelier Zurich (Headquarters)
                  </h4>
                  <p className="text-xs text-[#A6A6B0] mt-1">Bleicherweg 10, 8002 Zürich, Switzerland</p>
                  <p className="text-xs font-mono text-[#A6A6B0] mt-1">+41 44 215 90 00</p>
                </div>

                <div className="pt-4">
                  <h4 className="font-syne font-bold text-[#F5F4F0] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    Studio New York
                  </h4>
                  <p className="text-xs text-[#A6A6B0] mt-1">520 Broadway, SoHo, NY 10012, USA</p>
                </div>

                <div className="pt-4">
                  <h4 className="font-syne font-bold text-[#F5F4F0] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    Creative Lab Tokyo
                  </h4>
                  <p className="text-xs text-[#A6A6B0] mt-1">Minato-ku, Minami-Aoyama 5-chōme, Tokyo, Japan</p>
                </div>
              </div>
            </div>

            {/* Client FAQ accordion preview */}
            <div className="p-8 rounded-3xl bg-[#191A21] border border-white/[0.08]">
              <span className="font-mono text-xs uppercase tracking-widest text-[#A6FF4D] block mb-4">
                // FREQUENTLY ASKED
              </span>
              <div className="space-y-4 text-xs">
                <div>
                  <h5 className="font-bold text-[#F5F4F0] mb-1">What is typical engagement duration?</h5>
                  <p className="text-[#A6A6B0] leading-relaxed">Flagship web and branding engagements typically range from 6 to 14 weeks from discovery to deployment.</p>
                </div>
                <div>
                  <h5 className="font-bold text-[#F5F4F0] mb-1">Do you work with startups?</h5>
                  <p className="text-[#A6A6B0] leading-relaxed">Yes, provided there is strong conviction, product-market validation, and ambition to lead the category.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

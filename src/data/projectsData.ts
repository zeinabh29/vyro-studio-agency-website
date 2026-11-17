import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'nova',
    slug: 'nova',
    name: 'NOVA',
    tagline: 'Haute Couture Digital Flagship & Immersive Runway Experience',
    client: 'NOVA Paris',
    year: '2024',
    category: 'Web Design',
    services: ['Creative Direction', 'UI/UX Design', 'Headless E-Commerce', 'WebGL Interactive'],
    summary: 'A boundary-pushing digital flagship for Paris-based luxury fashion maison NOVA, transforming seasonal runway drops into interactive 3D digital artifacts.',
    challenge: 'NOVA required an online presence that mirrored the tactile exclusivity of their private Paris salons while delivering lightning-fast global e-commerce performance with sub-second page transitions.',
    strategy: 'We conceptualized a minimalist editorial canvas stripped of conventional e-commerce clutter, employing editorial typography, kinetic layout grids, and WebGL-accelerated material previews.',
    designProcess: 'Over a 16-week cycle, our design team collaborated directly with NOVA’s atelier, capturing high-resolution garment textures, crafting bespoke typography pairings, and prototyping dynamic cursor interactions.',
    solution: 'An Awwwards Site of the Year nominee featuring fluid WebGL runway transitions, custom micro-interactions, editorial lookbooks, and an instant frictionless bag checkout.',
    deliverables: [
      'Brand Art Direction & Digital Guidelines',
      'Full Responsive Flagship E-Commerce Website',
      'WebGL Interactive Garment Viewer',
      'Micro-animations & Custom Soundscape UI',
      'Bespoke Shopify Plus / Next.js Architecture'
    ],
    results: [
      { metric: '+184%', label: 'Mobile Conversion Rate' },
      { metric: '0.8s', label: 'Average Interaction Speed' },
      { metric: '4.2x', label: 'Time Spent Per Session' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=80',
        caption: 'Seasonal collection landing page with dynamic typographic overlay',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Lookbook grid with fluid hover reveals and cursor-tracked garment details',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1400&q=80',
        caption: 'Minimalist product detail view emphasizing silhouette and materiality',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    accentColor: '#A6FF4D'
  },
  {
    id: 'estate',
    slug: 'estate',
    name: 'ESTATE',
    tagline: 'Ultra-Prime Architectural Living & Curated Property Portal',
    client: 'ESTATE Holdings International',
    year: '2024',
    category: 'Development',
    services: ['Platform Architecture', 'Interactive Map UI', 'Full-Stack Development', 'Brand Identity'],
    summary: 'A sophisticated real estate platform connecting discerning international buyers with architectural masterworks across the Swiss Alps, Côte d’Azur, and Manhattan.',
    challenge: 'Conventional real estate listings are notoriously chaotic and uninspired. ESTATE demanded a gallery-like sanctuary where multimillion-dollar properties feel like curated museum exhibitions.',
    strategy: 'We discarded traditional filter forms in favor of an intuitive, cinematic spatial exploration model that focuses on natural light, architectural pedigree, and panoramic spatial photography.',
    designProcess: 'We engineered custom interactive floor plans, ultra-smooth SVG geospatial navigation, and an appointment booking engine with private virtual concierge integration.',
    solution: 'A razor-sharp, dark-mode real estate experience offering high-resolution architectural tours, real-time sun angle simulations, and encrypted broker communication.',
    deliverables: [
      'Digital Brand Identity & Logo System',
      'Architectural Property Showcase Web App',
      'Interactive 3D Floorplan & Sunlight Explorer',
      'Private Client VIP Portal',
      'Ultra-responsive Multi-currency Engine'
    ],
    results: [
      { metric: '€120M+', label: 'Transaction Inquiries in 60 Days' },
      { metric: '99.8%', label: 'Lighthouse Performance Score' },
      { metric: '3.8 min', label: 'Average Listing Dwell Time' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80',
        caption: 'Alpine Residence detail page highlighting panoramic cantilever views',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Curated architectural taxonomy categorized by materiality and geography',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
        caption: 'Interior spatial view with bespoke lighting simulation controls',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    accentColor: '#A6FF4D'
  },
  {
    id: 'origin',
    slug: 'origin',
    name: 'ORIGIN',
    tagline: 'Botanical Biotechnology & Clean Cellular Skincare',
    client: 'ORIGIN Lab Scandinavia',
    year: '2023',
    category: 'Branding',
    services: ['Visual Identity System', 'Packaging Design', 'E-Commerce Platform', 'Content Direction'],
    summary: 'A transformative brand universe and digital e-commerce ecosystem for a Copenhagen-based laboratory pioneering cellular extraction from Arctic botanical flora.',
    challenge: 'Conveying scientific clinical rigor alongside deep, earthy Scandinavian mindfulness without feeling sterile or commoditized.',
    strategy: 'We built a visual language grounded in organic minimalism, muted stone tones, macro botanical photography, and laboratory-inspired typography.',
    designProcess: 'From the tactile embossing of the recycled glass bottles to the micro-interactions on the skin diagnostic tool, every brand touchpoint was meticulously choreographed.',
    solution: 'A serene, high-converting digital sanctuary that educates consumers on molecular formulation while simplifying subscription regimens.',
    deliverables: [
      'Comprehensive Brand Identity & Packaging Guidelines',
      'Art Direction for Laboratory & Natural Macro Photography',
      'Interactive Custom Skin Diagnostic Quiz',
      'Headless E-Commerce with Automated Subscription Flow',
      'Sensory Unboxing & Printed Collateral Suite'
    ],
    results: [
      { metric: '+240%', label: 'Organic D2C Growth' },
      { metric: '68%', label: 'Skin Diagnostic Completion' },
      { metric: '52%', label: 'Repeat Subscription Retention' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80',
        caption: 'Laboratory botanical extraction interactive visualization',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
        caption: 'Packaging and minimalist glass serum formulation details',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1508759073847-9ca702cec7d2?auto=format&fit=crop&w=1400&q=80',
        caption: 'Diagnostic outcome screen with customized cellular routine recommendations',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    accentColor: '#A6FF4D'
  },
  {
    id: 'mono',
    slug: 'mono',
    name: 'MONO',
    tagline: 'Brutalist Monolithic Architecture & Structural Integrity',
    client: 'MONO Studio Tokyo',
    year: '2023',
    category: 'Web Design',
    services: ['Portfolio Website', 'Editorial Direction', 'Design Systems', 'Creative Front-end'],
    summary: 'A dramatic digital monograph showcasing the raw concrete, monolithic structures, and light installations of award-winning Tokyo architectural collective MONO.',
    challenge: 'How to present heavyweight, physical architectural structures of concrete and stone in the weightless, ethereal environment of the web.',
    strategy: 'We treated the browser window as an architectural void: generous negative space, uncompromising grid alignment, and deliberate typographic rhythm.',
    designProcess: 'Monochrome imagery was paired with micro-tonal sound design and asymmetric scrolling patterns that reflect the balance of mass and void in brutalist architecture.',
    solution: 'An uncompromising editorial portfolio that won FWA of the Day and Awwwards Developer Award, presenting 40+ global architectural commissions with peerless elegance.',
    deliverables: [
      'Interactive Architectural Monograph Web Design',
      'Bilingual Editorial CMS Architecture (EN/JP)',
      'Custom Audio-responsive Ambient Sound UI',
      'Case Study Deep Dives with Blueprint Layering',
      'Interactive 360 Photogrammetry Render Integration'
    ],
    results: [
      { metric: 'FWA of the Day', label: 'International Recognition' },
      { metric: '3 Awards', label: 'Awwwards Honors & Developer Award' },
      { metric: '250k+', label: 'Global Unique Visitors in Month 1' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
        caption: 'Concrete monolith perspective view with blueprint toggle',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80',
        caption: 'Minimalist Tokyo civic pavilion exterior lighting capture',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
        caption: 'Atrium light study with interactive solar shadow projection',
        aspectRatio: 'wide'
      }
    ],
    featured: false,
    accentColor: '#A6FF4D'
  },
  {
    id: 'atlas',
    slug: 'atlas',
    name: 'ATLAS',
    tagline: 'Remote Expeditions & Regenerative Wilderness Lodges',
    client: 'ATLAS Explorations',
    year: '2024',
    category: 'Digital Experience',
    services: ['Interactive Expedition Maps', 'Brand Narrative', 'Mobile Application', 'Creative Development'],
    summary: 'An evocative digital odyssey for a sustainable expedition outfit guiding conservation journeys through Iceland’s black sand deserts and Patagonia’s ice fields.',
    challenge: 'Translating the awe, isolation, and sensory majesty of the world’s most untouched frontiers into a digital journey that sparks immediate wanderlust.',
    strategy: 'We built a story-led digital platform powered by atmospheric ambient sounds, satellite-guided cartography, and interactive expedition itineraries.',
    designProcess: 'Our team journeyed with the ATLAS guides to capture field soundscapes, topographical lidar points, and diary entries, integrating them into an exploratory timeline.',
    solution: 'A cinematic web experience that feels like opening a secret explorer’s field journal with real-time weather stations and expedition booking.',
    deliverables: [
      'Interactive 3D Topographical Map System',
      'Expedition Storytelling Journal Web Experience',
      'Ambient Soundscape & Field Audio Mixer',
      'Offline-capable Guest Itinerary Mobile PWA',
      'Conservation Transparency Tracker'
    ],
    results: [
      { metric: '100%', label: 'Expedition Bookings Sold Out in 48h' },
      { metric: '+320%', label: 'Waitlist Registrations' },
      { metric: '94%', label: 'Positive Brand Sentiment Rating' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80',
        caption: 'Icelandic highland route preview with elevation gradient tracking',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
        caption: 'Night sky observatory lodge accommodations detail',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80',
        caption: 'Interactive expedition equipment and preparation checklist interface',
        aspectRatio: 'wide'
      }
    ],
    featured: false,
    accentColor: '#A6FF4D'
  },
  {
    id: 'pulse',
    slug: 'pulse',
    name: 'PULSE',
    tagline: 'Autonomous AI Compute & Neural Infrastructure Systems',
    client: 'PULSE Compute Inc.',
    year: '2024',
    category: 'Development',
    services: ['Brand Transformation', 'Web Application UI', 'Data Visualization', 'Design Engineering'],
    summary: 'A futuristic visual identity and developer marketing platform for a Silicon Valley startup providing enterprise distributed GPU orchestration.',
    challenge: 'Distributed neural compute is notoriously complex. PULSE needed a platform that instantly makes extreme compute power tangible, credible, and visually mesmerizing.',
    strategy: 'We transformed real-time telemetry, cluster health, and node throughput into elegant, glowing visual metaphors that react to cursor movement and real benchmarks.',
    designProcess: 'Created a proprietary design system featuring luminous accent lines, modular data cards, monospace metric readouts, and dark-mode terminal aesthetics.',
    solution: 'A high-velocity platform with live interactive cluster benchmarks, self-serve developer playground, and developer CLI integration docs.',
    deliverables: [
      'Visual Identity, Logo & Generative Iconography',
      'High-performance Developer Marketing Platform',
      'Interactive Neural Cluster Benchmark Simulator',
      'Dark-mode Design System with 80+ Reusable Components',
      'API Reference & Documentation UI Architecture'
    ],
    results: [
      { metric: '14,000+', label: 'Developer Sign-ups on Launch Day' },
      { metric: '<40ms', label: 'Average Web Application Latency' },
      { metric: '$24M', label: 'Series A Funding Announcement Momentum' }
    ],
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80',
        caption: 'Telemetry dashboard overview with live cluster throughput charts',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
        caption: 'Hardware node cluster topology in dark industrial finish',
        aspectRatio: 'tall'
      },
      {
        url: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80',
        caption: 'Developer CLI sandbox and automated pipeline configuration screen',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    accentColor: '#A6FF4D'
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((p) => p.slug === slug);
};

export const getNextProject = (currentSlug: string): Project => {
  const currentIndex = projectsData.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1 || currentIndex === projectsData.length - 1) {
    return projectsData[0];
  }
  return projectsData[currentIndex + 1];
};

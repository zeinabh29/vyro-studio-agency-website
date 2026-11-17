import React from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: 'normal' | 'slow' | 'fast';
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  speed = 'normal',
  reverse = false,
  pauseOnHover = true,
  className = '',
}) => {
  const speedClass = {
    fast: 'duration-[18s]',
    normal: 'duration-[30s]',
    slow: 'duration-[50s]',
  }[speed];

  return (
    <div
      className={`group relative flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)] ${className}`}
    >
      <div
        className={`flex shrink-0 items-center justify-around gap-12 min-w-full animate-marquee ${speedClass} ${
          reverse ? '[animation-direction:reverse]' : ''
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={`flex shrink-0 items-center justify-around gap-12 min-w-full animate-marquee ${speedClass} ${
          reverse ? '[animation-direction:reverse]' : ''
        } ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}`}
      >
        {children}
      </div>
    </div>
  );
};

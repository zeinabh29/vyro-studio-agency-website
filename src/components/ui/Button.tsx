import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  showArrow?: boolean;
  className?: string;
  cursorText?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  showArrow = false,
  className = '',
  cursorText,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium font-syne tracking-wide transition-all duration-300 rounded-full group overflow-hidden select-none focus:outline-none focus:ring-2 focus:ring-[#A6FF4D] focus:ring-offset-2 focus:ring-offset-[#101116]";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs gap-1.5",
    md: "px-7 py-3.5 text-sm gap-2",
    lg: "px-9 py-4.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary: "bg-[#A6FF4D] text-[#101116] font-semibold hover:bg-[#b5ff6a] hover:shadow-[0_0_30px_rgba(166,255,77,0.4)] active:scale-[0.98]",
    secondary: "bg-[#22232B] text-[#F5F4F0] border border-[rgba(255,255,255,0.12)] hover:border-[#A6FF4D] hover:bg-[#2c2e38] hover:text-[#A6FF4D] active:scale-[0.98]",
    outline: "bg-transparent text-[#F5F4F0] border border-[rgba(255,255,255,0.18)] hover:border-[#A6FF4D] hover:text-[#A6FF4D] hover:bg-[rgba(166,255,77,0.06)] active:scale-[0.98]",
    ghost: "bg-transparent text-[#A6A6B0] hover:text-[#A6FF4D] hover:bg-[rgba(255,255,255,0.04)]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} data-cursor={cursorText}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} data-cursor={cursorText}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} data-cursor={cursorText} {...props}>
      {content}
    </button>
  );
};

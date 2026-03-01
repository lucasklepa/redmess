// Red Mess Logo Component
// The main band logo displayed in the hero section

import logoSvgPaths from "../imports/svg-mia2lkl4th";

interface RedMessLogoProps {
  className?: string;
}

export default function RedMessLogo({ className = "" }: RedMessLogoProps) {
  return (
    <svg
      className={`w-[85vw] md:w-full max-w-[600px] h-auto ${className}`}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 505.684 159.767"
      aria-label="Red Mess"
    >
      <path
        clipRule="evenodd"
        d={logoSvgPaths.p2f56c800}
        fill="#CF6857"
        fillRule="evenodd"
      />
    </svg>
  );
}

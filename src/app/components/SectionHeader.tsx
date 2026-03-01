// Section Header Component
// Reusable header with accent background used throughout the site

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({ children, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <div className="inline-block bg-[#cf6857] px-5 py-2">
        <h2 className="font-['STRRETCH_SANS:Regular',sans-serif] text-[#191919] text-xl sm:text-3xl md:text-4xl uppercase">
          {children}
        </h2>
      </div>
    </div>
  );
}

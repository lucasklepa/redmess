// VHS Visual Effects Component
// Includes animated noise grain and vignette overlay

export function NoiseOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.5] md:opacity-[0.45] mix-blend-multiply">
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="1.6" numOctaves="5" stitchTiles="stitch">
            <animate attributeName="baseFrequency" dur="0.4s" values="1.6;1.65;1.55;1.6" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="discrete" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}

export function VignetteOverlay() {
  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-[104]"
      style={{
        background: "radial-gradient(circle, transparent 50%, rgba(0,0,0,0.6) 100%)",
      }}
    />
  );
}

// Social Media Links Component
// Displays clickable logos for YouTube, Bandcamp, Spotify, and Deezer

import svgPaths from "../imports/svg-xqmqmfama1";

function YouTubeLogo() {
  return (
    <a
      className="block cursor-pointer h-[25.937px] overflow-clip relative shrink-0 w-[116.386px] hover:opacity-70 transition-opacity"
      href="https://www.youtube.com/@redmess8011"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Red Mess on YouTube"
    >
      <div className="absolute inset-[0_68.11%_0_0]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.1162 25.9375">
          <path d={svgPaths.p32ba24f0} fill="#F0F0F0" />
        </svg>
      </div>
      <div className="absolute inset-[3.93%_0_6.17%_35.04%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6005 23.3174">
          <path d={svgPaths.p392aa900} fill="#F0F0F0" />
          <path d={svgPaths.p3e4954f1} fill="#F0F0F0" />
          <path d={svgPaths.p4322300} fill="#F0F0F0" />
          <path d={svgPaths.p10aa40c0} fill="#F0F0F0" />
          <path d={svgPaths.p3249fbf2} fill="#F0F0F0" />
          <path d={svgPaths.p5f1ce00} fill="#F0F0F0" />
          <path d={svgPaths.p6bfa500} fill="#F0F0F0" />
        </svg>
      </div>
    </a>
  );
}

function BandcampLogo() {
  return (
    <a
      className="cursor-pointer inline-grid relative hover:opacity-70 transition-opacity"
      href="https://redmess.bandcamp.com/album/breathtaker"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Red Mess on Bandcamp"
    >
      <div className="h-[21.468px] relative w-[136.67px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.67 21.4678">
          <path d={svgPaths.p14966000} fill="#F0F0F0" />
          <path d={svgPaths.p256de100} fill="#F0F0F0" />
          <path d={svgPaths.p3e2a6100} fill="#F0F0F0" />
          <path d={svgPaths.p4a54900} fill="#F0F0F0" />
          <path d={svgPaths.p67368c0} fill="#F0F0F0" />
          <path d={svgPaths.p1aa0b1f0} fill="#F0F0F0" />
          <path d={svgPaths.pf7dd00} fill="#F0F0F0" />
        </svg>
      </div>
    </a>
  );
}

function SpotifyLogo() {
  return (
    <a
      className="block cursor-pointer h-[31.28px] relative shrink-0 w-[104.082px] hover:opacity-70 transition-opacity"
      href="https://open.spotify.com/intl-pt/artist/4FfzUSp1S2dTPkkxd9l7l1?si=9SBOS7UqQouxSgW9NTzAYw"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Red Mess on Spotify"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.082 31.2804">
        <g clipPath="url(#clip0_spotify)">
          <path d={svgPaths.p15bed800} fill="#F0F0F0" />
        </g>
        <defs>
          <clipPath id="clip0_spotify">
            <rect fill="white" height="31.2804" width="104.082" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function DeezerLogo() {
  return (
    <a
      className="block cursor-pointer h-[34.285px] relative shrink-0 w-[122.371px] hover:opacity-70 transition-opacity"
      href="https://deezer.page.link/A51WgRwAWGbvAoe9A"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Red Mess on Deezer"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.371 34.2848">
        <path clipRule="evenodd" d={svgPaths.p2858e080} fill="#F0F0F0" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p3d5ed00} fill="#F0F0F0" fillRule="evenodd" />
      </svg>
    </a>
  );
}

export default function SocialLinks() {
  return (
    <div className="content-center flex flex-wrap gap-[35px_46px] items-center justify-center relative size-full">
      <YouTubeLogo />
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <BandcampLogo />
        </div>
      </div>
      <SpotifyLogo />
      <DeezerLogo />
    </div>
  );
}

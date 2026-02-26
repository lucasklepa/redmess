import svgPaths from "./svg-xqmqmfama1";

function Group1() {
  return (
    <div className="absolute inset-[0_68.11%_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.1162 25.9375">
        <g id="Group">
          <path d={svgPaths.p32ba24f0} fill="var(--fill-0, #F0F0F0)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function YoutubePaths() {
  return (
    <div className="absolute inset-[3.93%_0_6.17%_35.04%]" data-name="youtube-paths">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6005 23.3174">
        <g id="youtube-paths">
          <path d={svgPaths.p392aa900} fill="var(--fill-0, #F0F0F0)" id="Vector" />
          <path d={svgPaths.p3e4954f1} fill="var(--fill-0, #F0F0F0)" id="Vector_2" />
          <path d={svgPaths.p4322300} fill="var(--fill-0, #F0F0F0)" id="Vector_3" />
          <path d={svgPaths.p10aa40c0} fill="var(--fill-0, #F0F0F0)" id="Vector_4" />
          <path d={svgPaths.p3249fbf2} fill="var(--fill-0, #F0F0F0)" id="Vector_5" />
          <path d={svgPaths.p5f1ce00} fill="var(--fill-0, #F0F0F0)" id="Vector_6" />
          <path d={svgPaths.p6bfa500} fill="var(--fill-0, #F0F0F0)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[3.93%_0_6.17%_35.04%]" data-name="Group">
      <YoutubePaths />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-0" data-name="Group">
      <Group1 />
      <Group2 />
    </div>
  );
}

function YouTubeLogo() {
  return (
    <a className="block cursor-pointer h-[25.937px] overflow-clip relative shrink-0 w-[116.386px]" data-name="YouTube_Logo_2017 1" href="https://www.youtube.com/@redmess8011">
      <Group />
    </a>
  );
}

function G1() {
  return (
    <div className="col-1 h-[21.468px] ml-0 mt-0 relative row-1 w-[136.67px]" data-name="g12">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136.67 21.4678">
        <g id="g12">
          <path d={svgPaths.p14966000} fill="var(--fill-0, #F0F0F0)" id="path14" />
          <path d={svgPaths.p256de100} fill="var(--fill-0, #F0F0F0)" id="path16" />
          <path d={svgPaths.p3e2a6100} fill="var(--fill-0, #F0F0F0)" id="path18" />
          <path d={svgPaths.p4a54900} fill="var(--fill-0, #F0F0F0)" id="path20" />
          <path d={svgPaths.p67368c0} fill="var(--fill-0, #F0F0F0)" id="path22" />
          <path d={svgPaths.p1aa0b1f0} fill="var(--fill-0, #F0F0F0)" id="path24" />
          <path d={svgPaths.pf7dd00} fill="var(--fill-0, #F0F0F0)" id="path26" />
        </g>
      </svg>
    </div>
  );
}

function G() {
  return (
    <a className="cursor-pointer grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="g10" href="https://redmess.bandcamp.com/album/breathtaker">
      <G1 />
    </a>
  );
}

function SpotifyLogoWithText() {
  return (
    <a className="block cursor-pointer h-[31.28px] relative shrink-0 w-[104.082px]" data-name="Spotify_logo_with_text 1" href="https://open.spotify.com/intl-pt/artist/4FfzUSp1S2dTPkkxd9l7l1?si=9SBOS7UqQouxSgW9NTzAYw">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104.082 31.2804">
        <g clipPath="url(#clip0_35_62)" id="Spotify_logo_with_text 1">
          <path d={svgPaths.p15bed800} fill="var(--fill-0, #F0F0F0)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_35_62">
            <rect fill="white" height="31.2804" width="104.082" />
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function Group3() {
  return (
    <a className="block cursor-pointer h-[34.285px] relative shrink-0 w-[122.371px]" href="https://deezer.page.link/A51WgRwAWGbvAoe9A">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 122.371 34.2848">
        <g id="Group 33">
          <path clipRule="evenodd" d={svgPaths.p2858e080} fill="var(--fill-0, #F0F0F0)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p3d5ed00} fill="var(--fill-0, #F0F0F0)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </a>
  );
}

export default function Frame() {
  return (
    <div className="content-center flex flex-wrap gap-[35px_46px] items-center justify-center relative size-full">
      <YouTubeLogo />
      <div className="flex items-center justify-center leading-[0] relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <G />
        </div>
      </div>
      <SpotifyLogoWithText />
      <Group3 />
    </div>
  );
}
import svgPaths from "./svg-0n9t3z7v40";

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

export default function YouTubeLogo() {
  return (
    <a className="block cursor-pointer relative size-full" data-name="YouTube_Logo_2017 1" href="https://www.youtube.com/@redmess8011">
      <Group />
    </a>
  );
}
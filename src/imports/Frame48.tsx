import imgRectangle41 from "figma:asset/f6d98f970bf4b87dc09b228191298827486ce6c7.png";
import imgRectangle42 from "figma:asset/49d03c1ed56c6615e0fd971f9e667533870f6ed0.png";
import imgRectangle44 from "figma:asset/c8adfa1d39e88e7929765d7f388e07f77ceca601.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[443.573px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle41} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 content-center flex flex-wrap gap-y-[30px] items-center justify-between ml-0 mt-0 relative row-1 w-[444.442px]">
      <Group />
    </div>
  );
}

function Group3() {
  return (
    <a className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" href="https://redmess.bandcamp.com/album/hi-tech-starvation">
      <Frame />
      <div className="col-1 font-['STRRETCH_SANS:Regular',sans-serif] ml-[138.24px] mt-[458.65px] not-italic relative row-1 text-[#e8dedd] text-[0px] text-[18.088px] text-center whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[100.2750015258789%] mb-0">Hi-Tech Starvation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5]">Album - 2025</p>
      </div>
    </a>
  );
}

function Group2() {
  return (
    <a className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" href="https://redmess.bandcamp.com/album/breathtaker">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[206.313px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle42} />
      </div>
      <div className="col-1 font-['STRRETCH_SANS:Regular',sans-serif] ml-[43.97px] mt-[217.78px] not-italic relative row-1 text-[#e8dedd] text-[0px] text-[18.088px] text-center whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[100.2750015258789%] mb-0">Breathtaker</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5]">Album - 2022</p>
      </div>
    </a>
  );
}

function Group1() {
  return (
    <a className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" href="https://redmess.bandcamp.com/album/phantom-limb-ep">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[206.313px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle44} />
      </div>
      <div className="col-1 font-['STRRETCH_SANS:Regular',sans-serif] ml-[38.36px] mt-[217.97px] not-italic relative row-1 text-[#e8dedd] text-[0px] text-[18.088px] text-center whitespace-nowrap">
        <p className="font-['Inter:Bold',sans-serif] font-bold leading-[100.2750015258789%] mb-0">Phantom Limb</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.5]">EP - 2022</p>
      </div>
    </a>
  );
}

export default function Frame1() {
  return (
    <div className="content-start cursor-pointer flex flex-wrap gap-[31px_31.008px] items-start justify-center leading-[0] relative size-full">
      <Group3 />
      <Group2 />
      <Group1 />
    </div>
  );
}
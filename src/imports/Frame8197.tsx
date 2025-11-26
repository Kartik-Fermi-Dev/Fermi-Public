import imgImage1 from "figma:asset/0b0efeec6906b66a419e53e5a793735860e6db32.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0a2f51] text-[24px] text-nowrap">
        <p className="leading-[22.5px] whitespace-pre">{`Backed  by `}</p>
      </div>
      <div className="h-[24px] relative shrink-0 w-[99.927px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[rgba(212,199,232,0.4)] relative rounded-[15px] size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}
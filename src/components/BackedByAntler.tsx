import imgImage1 from "figma:asset/0b0efeec6906b66a419e53e5a793735860e6db32.png";

export default function BackedByAntler() {
  return (
    <div className="bg-[rgba(212,199,232,0.4)] relative rounded-[15px] w-fit">
      <div className="w-fit">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.75px] not-italic relative shrink-0 text-[#6b6d71] text-[13.125px] text-nowrap whitespace-pre">{`Backed by `}</p>
          <div className="h-[16px] relative shrink-0 w-[15.5px]" data-name="image 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[429.79%]" src={imgImage1} />
            </div>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.75px] not-italic relative shrink-0 text-[#6b6d71] text-[13.125px] text-nowrap whitespace-pre">Antler</p>
        </div>
      </div>
    </div>
  );
}
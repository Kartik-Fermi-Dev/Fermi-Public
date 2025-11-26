import imgImage1 from "figma:asset/0b0efeec6906b66a419e53e5a793735860e6db32.png";

export default function Container() {
  return (
    <div className="bg-[rgba(212,199,232,0.2)] relative rounded-[1.67772e+07px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d4c7e8] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[8px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18.75px] not-italic relative shrink-0 text-[#6b6d71] text-[13.125px] text-nowrap whitespace-pre">{`Backed by `}</p>
          <div className="h-[16px] relative shrink-0 w-[66.618px]" data-name="image 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
          </div>
        </div>
      </div>
    </div>
  );
}
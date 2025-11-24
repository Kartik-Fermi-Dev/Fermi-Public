import svgPaths from "./svg-eav4ga3vff";

function SvgjsG() {
  return (
    <div className="absolute inset-[29.6%_58.87%_27.78%_2.72%]" data-name="SvgjsG4779">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 14">
        <g id="SvgjsG4779">
          <path d={svgPaths.pd211300} fill="var(--fill-0, #0E2F56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SvgjsG1() {
  return (
    <div className="absolute inset-[11.84%_35.64%_11.44%_46.57%]" data-name="SvgjsG4780">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="SvgjsG4780">
          <path d={svgPaths.p17ee9300} fill="var(--fill-0, #0E2F56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SvgjsG2() {
  return (
    <div className="absolute inset-[29.6%_2.72%_27.78%_69.72%]" data-name="SvgjsG4781">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 14">
        <g id="SvgjsG4781">
          <path d={svgPaths.p6f22500} fill="var(--fill-0, #0E2F56)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[11.84%_2.72%_11.44%_2.72%]" data-name="Group">
      <SvgjsG />
      <SvgjsG1 />
      <SvgjsG2 />
    </div>
  );
}

export default function ColorLogoNoBackground() {
  return (
    <div className="relative size-full" data-name="Color logo - no background 1">
      <Group />
    </div>
  );
}
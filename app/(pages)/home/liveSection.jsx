import Image from "next/image";
import "./liveSection.css";

export default function LiveSection() {
  return (
    <main className="liveSection-container1 f">
      <main className="liveSection-container2">
        <div className="liveSection-sec1">
          <div className="live">بث مباشر</div>
          <div className="controlers">
            <div className="done">
              <Image
                src="/assets/icons/left-arrow.svg"
                alt="img"
                width={20}
                height={20}
              />
              <span>تأكيد</span>
            </div>
            <div className="prev">
              <Image
                src="/assets/smallArrowDown.svg"
                alt="img"
                width={11}
                height={8}
                className="rotate-90"
              />
              <span>7 سباق</span>
            </div>
            <div className="current">
              <Image
                src="/assets/smallArrowDown.svg"
                alt="img"
                width={11}
                height={8}
              />
              <span>6 سباق</span>
            </div>
            <div className="next">
              <Image
                src="/assets/smallArrowDown.svg"
                alt="img"
                width={11}
                height={8}
                className="-rotate-90"
              />
              <span>5 سباق</span>
            </div>
            <div className="title">
              <Image
                src="/assets/smallArrowDown.svg"
                alt="img"
                width={11}
                height={8}
              />
              <span>ميدان الفروسية</span>
            </div>
          </div>
        </div>
        <div className="liveSection-sec2">
          <div className="horses">
            <div className="raceInfo">
              <div className="relative bg-[#A2C77C] border-4 border-white rounded-full flex justify-between items-center gap-1 px-6 py-3 w-[338px] h-[87px]">
                <div className="w-1/4">
                  <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center text-black text-[24px] font-bold">
                    81
                  </div>
                </div>

                <div className="flex justify-between items-center w-full text-md text-black font-normal leading-snug pr-4">
                  <div className="flex flex-col justify-center items-center">
                    <span>+3</span>
                    <span>2000$</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span>مضمار</span>
                    <span>عشب</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span>1 متر</span>
                    <span>صلبة</span>
                  </div>
                </div>

                <div className="ml-4">
                  <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[18px] border-t-transparent border-b-transparent border-l-black"></div>
                </div>

                <div className="absolute bottom-[-18px] right-[20px]">
                  <div className="bg-[#5A9949] border border-white text-white text-sm px-4 py-0.5 rounded-full">
                    البداية
                  </div>
                </div>
                <div className="absolute bottom-[-18px] right-[100px]">
                  <div className="bg-[#EA3323] border border-white text-white text-sm px-4 py-0.5 rounded-full">
                    النهاية
                  </div>
                </div>
              </div>
            </div>
            <div className="list">
              <div className="horse1 bg-[#EA3323]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  01
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
              <div className="horse1 bg-[#FFFFFF]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  02
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
              <div className="horse1 bg-[#0000F5]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  03
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
              <div className="horse1 bg-[#FFFF55]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  04
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
              <div className="horse1 bg-[#377E23]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  05
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
              <div className="horse1 bg-[#377E23]">
                <span className="flex justify-center items-center text-2xl w-[60px] h-[60px] rounded-full bg-black text-white">
                  06
                </span>
                <span className="">بلاك هورس</span>
                <span className="">2-1</span>
              </div>
            </div>
            <div className="flex justify-end items-center w-full">
              <div className="raceCard">
                <Image
                  src="/assets/icons/left-arrow.svg"
                  alt="img"
                  width={20}
                  height={20}
                />
                <span>بطاقة سباق</span>
              </div>
            </div>
          </div>
          <iframe
            className="liveVideo"
            width="1047"
            height="556"
            src="https://www.youtube.com/embed/NqrDJmmh1AA"
          ></iframe>
        </div>
      </main>
    </main>
  );
}

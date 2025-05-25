"use client";
import "./landing.css";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="landing-container1 bg-[url(/assets/home-page/main-img.svg)] bg-cover">
      <main className="landing-container2">
        <div className="info">
          <div className="main-title text-onSmall animate__animated animate__backInRight">
            عنوان رئيسى
          </div>
          <div className="sub-title text-onSmall animate__animated animate__backInRight animate__slow">
            العنوان الفرعى هنا أو التفاصيل
          </div>
          <div className="custom-btn animate__animated animate__backInRight animate__slower">
            <Image
              src="/assets/icons/left-arrow.svg"
              alt="img"
              width={15}
              height={15}
            />
            <div>إذهب إلى</div>
          </div>
          <div className="info-viewer">
            <div className="view1 card-onSmall animate__animated animate__fadeInUp">
              <div className="date text-onSmall">20/3/2025</div>
              <div className="main-title text-onSmall">عنوان رئيسى</div>
              <div className="sub-title text-onSmall">
                العنوان الفرعى هنا أو التفاصيل
              </div>
            </div>
            <div className="view2 card-onSmall animate__animated animate__fadeInUp">
              <div className="date text-onSmall">20/3/2025</div>
              <div className="main-title text-onSmall">عنوان رئيسى</div>
              <div className="sub-title text-onSmall">
                العنوان الفرعى هنا أو التفاصيل
              </div>
            </div>
            <div className="view3 card-onSmall animate__animated animate__fadeInUp">
              <div className="date text-onSmall">20/3/2025</div>
              <div className="main-title text-onSmall">عنوان رئيسى</div>
              <div className="sub-title text-onSmall">
                العنوان الفرعى هنا أو التفاصيل
              </div>
            </div>
            <div className="view4 card-onSmall animate__animated animate__fadeInUp">
              <div className="date text-onSmall">20/3/2025</div>
              <div className="main-title text-onSmall">عنوان رئيسى</div>
              <div className="sub-title text-onSmall">
                العنوان الفرعى هنا أو التفاصيل
              </div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

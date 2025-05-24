"use client";
import "./landing.css";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Landing() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // slight delay for effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="landing-container1 bg-[url(/assets/home-page/main-img.svg)] bg-cover">
      <main className="landing-container2">
        <div className="info">
          <div className="main-title animate__animated animate__backInRight">
            عنوان رئيسى
          </div>
          <div className="sub-title animate__animated animate__backInRight animate__slow">
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
            <div className="view1 animate__animated animate__fadeInUp">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view2 animate__animated animate__fadeInUp">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view3 animate__animated animate__fadeInUp">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view4 animate__animated animate__fadeInUp">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

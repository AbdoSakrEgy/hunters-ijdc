import "./landing.css";
import Image from "next/image";

export default function Landing() {
  return (
    <main className="landing-container1 bg-[url(/assets/home-page/main-img.svg)] bg-cover">
      <main className="landing-container2">
        <div className="info">
          <div className="main-title">عنوان رئيسى</div>
          <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
          <div className="custom-btn">
            <Image
              src="/assets/icons/left-arrow.svg"
              alt="img"
              width={15}
              height={15}
            />
            <div>إذهب إلى</div>
          </div>
          <div className="info-viewer">
            <div className="view1">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view2">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view3">
              <div className="date">20/3/2025</div>
              <div className="main-title">عنوان رئيسى</div>
              <div className="sub-title">العنوان الفرعى هنا أو التفاصيل</div>
            </div>
            <div className="view4">
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

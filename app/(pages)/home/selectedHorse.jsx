import Image from "next/image";
import "./selectedHorse.css";

export default function SelectedHorse() {
  return (
    <main className="selectedHorse-container1" data-aos="fade-up">
      <main className="selectedHorse-container2">
        <div className="selectedHorse-sec1">
          <div className="title">
            <Image src="/assets/saoudi.svg" alt="img" width={35} height={35} />
            <div className="text-[34px]">ساندى ستورم</div>
            <div className="number">03</div>
          </div>
        </div>
        <div className="selectedHorse-sec2">
          <div className="info1">
            <div className="header">
              <span>معيار</span>
              <span>1-2-3%</span>
              <span>الفوز%</span>
              <span>العام الماضى</span>
              <span>التقييم</span>
              <span>التفاصيل</span>
              <span>المعيار</span>
            </div>
            <div className="row">
              <span></span>
              <span>43</span>
              <span>15</span>
              <span>678</span>
              <span>75</span>
              <span>اسم المدرب</span>
              <span>المدرب</span>
            </div>
            <div className="row">
              <span></span>
              <span>43</span>
              <span>15</span>
              <span>200</span>
              <span>70</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span></span>
              <span>43</span>
              <span>15</span>
              <span>678</span>
              <span>75</span>
              <span></span>
              <span></span>
            </div>
            <div className="row">
              <span></span>
              <span>43</span>
              <span>15</span>
              <span>678</span>
              <span></span>
              <span>اسم المدرب</span>
              <span>الخيال</span>
            </div>
            <div className="row">
              <span></span>
              <span>43</span>
              <span>15</span>
              <span>678</span>
              <span></span>
              <span>اسم المدرب</span>
              <span></span>
            </div>
          </div>
          <div className="info2">
            <div className="header">
              <div className="">
                <span className="text-black">سجل</span> : 23 بداية : 0-1-16
                &nbsp; 4.16 مليون دولار
              </div>
              <div className="text-[11px]">
                حصان مخصى | عمره 6 سنوات | فبراير | مولود فى ولاية كنتاكى
              </div>
            </div>
            <div className="row">
              <span>10 بدايات 1-1-1</span>
              <span>السجل</span>
            </div>
            <div className="row">
              <span>نصية</span>
              <span>التربية</span>
            </div>
            <div className="row">
              <span>غير متوفر</span>
              <span>التصنيف</span>
            </div>
            <div className="row">
              <span>فلان الفلانى</span>
              <span>المربى</span>
            </div>
            <div className="row">
              <span>اسم فلان الفلانى</span>
              <span>المالك</span>
            </div>
          </div>
          <div className="info3">
            <div className="header"> التقييم العام: 83</div>
            <div className="row">
              <span>5/2</span>
              <span>الخط الصباحى</span>
            </div>
            <div className="row">
              <span>32,000.00 ر.س</span>
              <span>الجائزة</span>
            </div>
            <div className="row">
              <span>LASIX</span>
              <span>المكونات</span>
            </div>
            <div className="row">
              <span>120 كيلوغرام</span>
              <span>الوزن</span>
            </div>
            <div className="row">
              <span>3 سنوات</span>
              <span>العمر</span>
            </div>
          </div>
        </div>
      </main>
    </main>
  );
}

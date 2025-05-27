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
        <div className="selectedHorse-sec2 col-onMediam">
          <div className="TtableContainer">
            <table className="Ttable">
              <thead className="Theader">
                <tr>
                  <th>معيار</th>
                  <th>1-2-3%</th>
                  <th>الفوز%</th>
                  <th>العام الماضى</th>
                  <th>التقييم</th>
                  <th>التفاصيل</th>
                  <th className="pr-5">المعيار</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="Trow">
                  <td></td>
                  <td>43</td>
                  <td>15</td>
                  <td>678</td>
                  <td>75</td>
                  <td>اسم المدرب</td>
                  <td>المدرب</td>
                </tr>
                <tr className="Trow">
                  <td></td>
                  <td>43</td>
                  <td>15</td>
                  <td>678</td>
                  <td>75</td>
                  <td>اسم المدرب</td>
                  <td>المدرب</td>
                </tr>
                <tr className="Trow">
                  <td></td>
                  <td>43</td>
                  <td>15</td>
                  <td>678</td>
                  <td>75</td>
                  <td>اسم المدرب</td>
                  <td>المدرب</td>
                </tr>
                <tr className="Trow">
                  <td></td>
                  <td>43</td>
                  <td>15</td>
                  <td>678</td>
                  <td>75</td>
                  <td>اسم المدرب</td>
                  <td>المدرب</td>
                </tr>
                <tr className="Trow">
                  <td></td>
                  <td>43</td>
                  <td>15</td>
                  <td>678</td>
                  <td>75</td>
                  <td>اسم المدرب</td>
                  <td>المدرب</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="info2 fullw-onMediam">
            <div className="header fullw-onMediam">
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
          <div className="info3 fullw-onMediam">
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

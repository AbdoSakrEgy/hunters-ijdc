import Image from "next/image";
import "./footerComp.css";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function FooterComp() {
  return (
    <main
      className="footerComp-container1 flex justify-center items-center"
      data-aos="fade-up"
    >
      <main className="footerComp-container2 flex flex-col w-full text-white">
        <div className="max-[1700]:px-10 footerComp-sec1 flex max-[1700]:flex-wrap justify-between items-center w-full py-20 px-32 bg-[#000000E6]">
          <div className="contact flex flex-col items-end gap-3">
            <div className="title text-[24px]">النشرة البريدية</div>
            <div className="subTitle text-[17px]">النص أو الوصف يكتب هنا</div>
            <div className="emailSec flex justify-end items-center gap-3">
              <div className="send flex justify-center items-center rounded-lg w-[150px] h-[55px] bg-[#008062]">
                إشترك
              </div>
              <input
                type="email"
                className="emailBox w-[338px] h-[55px] rounded-xl text-black bg-white px-5"
                placeholder="abdulrahimsakr@gmail.com"
              ></input>
            </div>
          </div>
          <div className="about flex flex-col gap-10 w-full">
            <div className="socials flex justify-end items-center gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clipPath="url(#primeTwitter0)">
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
              >
                <g fill="none" fillRule="evenodd">
                  <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M12 2a6 6 0 0 0-6 6v1.875L5.1 9.2a1 1 0 1 0-1.2 1.6l1.866 1.4c-.444 1.168-1.527 2.39-3.28 3.443a1.01 1.01 0 0 0-.318 1.412C3.286 18.732 5.06 20 7 20c1.784 0 3.007 2 5 2c2.011 0 3.209-2 5-2c1.94 0 3.714-1.268 4.832-2.945a1.01 1.01 0 0 0-.318-1.412c-1.753-1.053-2.836-2.275-3.28-3.443l1.866-1.4a1 1 0 0 0-1.2-1.6l-.9.675V8a6 6 0 0 0-6-6"
                  ></path>
                </g>
              </svg>
              <Image src="/assets/logo.svg" alt="img" width={193} height={58} />
            </div>
            <div className="links flex justify-end items-center pr-20 gap-10">
              <Link href={`/contact-us`} className="text-[20px]">
                اتصل بنا
              </Link>
              <Link href={`/live-broadcast`} className="text-[20px]">
                البث المباشر
              </Link>
              <Link href={`/competitions`} className="text-[20px]">
                المسابقات
              </Link>
              <Link href={`/services`} className="text-[20px]">
                الخدمات
              </Link>
              <Link href={`/about-us`} className="text-[20px]">
                عن ميدان
              </Link>
            </div>
          </div>
        </div>
        <div className="max-[1700]:px-10  footerComp-sec2 flex justify-between items-center h-[54px] px-32 bg-black">
          <div className="text-[16px]text-white">
            سياسة الخصوصية | أحكام وشروط | ميثاق العملاء | ادوات الموقع
          </div>
          <div className="text-[16px]text-white">جميع الحقوق محفوظة</div>
        </div>
      </main>
    </main>
  );
}

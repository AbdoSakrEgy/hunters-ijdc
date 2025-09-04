"use client";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

export default function Navbar() {
  return (
    <main className="show-on-large navbar-container1">
      <main className="navbar-container2 padding-onMediam">
        <div className="sec1">
          <div className="link"></div>
          <div className="link hide-onMobile">
            <div>حسابى</div>
            <Image
              src="/assets/icons/account.svg"
              alt="img"
              width={15}
              height={15}
            />
          </div>
          <div className="link hide-onMobile">
            <div>...بحث</div>
            <Image
              src="/assets/icons/search.svg"
              alt="img"
              width={15}
              height={15}
            />
          </div>
        </div>
        <div className="sec2">
          <div className="flex justify-end items-center gap-5 w-full hide-onMobile">
            <Link href={`/contact-us`} className="link">
              اتصل بنا
            </Link>
            <Link href={`/live-broadcast`} className="link">
              البث المباشر
            </Link>
            <Link href={`/competitions`} className="link">
              المسابقات
            </Link>
            <Link href={`/services`} className="link">
              الخدمات
            </Link>
            <Link href={`/about-us`} className="link">
              عن ميدان
            </Link>
          </div>
          <Link
            href={`/home`}
            className="link animate__animated animate__backInDown"
          >
            <div className="w-[150px]">
              <Image src="/assets/logo.svg" alt="img" width={193} height={58} />
            </div>{" "}
          </Link>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="cursor-pointer hidden show-onMobile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
              ></path>
            </svg>
          </button>
          {/* dialog content */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box flex flex-col justify-start p-0 items-center h-full w-full bg-black text-white">
              <div className="flex flex-row-reverse justify-between items-center w-full p-5 border-b border-gray-800">
                <div className="modal-action">
                  <form method="dialog">
                    <button>
                      <svg
                        className="cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        width={35}
                        height={35}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                        ></path>
                      </svg>
                    </button>
                  </form>
                </div>
                <Image
                  src="/assets/logo.svg"
                  alt="img"
                  width={193}
                  height={58}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-[90%] pt-10">
                <Link
                  href={`/home`}
                  className="border-b border-gray-800 w-full text-right py-3"
                >
                  الرئيسية
                </Link>
                <Link
                  href={`/about-us`}
                  className="border-b border-gray-800 w-full text-right py-3"
                >
                  عن ميدان
                </Link>
                <Link
                  href={`/services`}
                  className="border-b border-gray-800 w-full text-right py-3"
                >
                  الخدمات
                </Link>
                <Link
                  href={`/competitions`}
                  className="flex justify-end items-center gap-3 border-b border-gray-800 w-full text-right py-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="#ebc31e"
                      d="M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0V9h4a1 1 0 0 0 0-2H9z"
                    ></path>
                  </svg>
                  المسابقات
                </Link>
                <Link
                  href={`/live-broadcast`}
                  className="border-b border-gray-800 w-full text-right py-3"
                >
                  البث المباشر
                </Link>
                <Link
                  href={`/contact-us`}
                  className="border-b border-gray-800 w-full text-right py-3"
                >
                  اتصل بنا
                </Link>
              </div>
              <div className="sec3 flex justify-center items-center w-[90%] pt-10 gap-10">
                <div className="flex justify-center items-center gap-3">
                  <div>...بحث</div>
                  <Image
                    src="/assets/icons/search.svg"
                    alt="img"
                    width={15}
                    height={15}
                  />
                </div>
                <div className="flex justify-center items-center gap-3">
                  <div>حسابى</div>
                  <Image
                    src="/assets/icons/account.svg"
                    alt="img"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            </div>
          </dialog>
          {/* dialog content */}
        </div>
      </main>
    </main>
  );
}

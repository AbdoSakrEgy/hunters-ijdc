import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

export default function Navbar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <main className="show-on-large navbar-container1">
          <main className="navbar-container2 padding-onMediam">
            <div className="sec1">
              <div className="link"></div>
              <div className="link">
                <div>حسابى</div>
                <Image
                  src="/assets/icons/account.svg"
                  alt="img"
                  width={15}
                  height={15}
                />
              </div>
              <div className="link">
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
              <div className="flex justify-end items-center gap-5 w-full">
                <Link href={`/contact-us`} className="link hide-onMobile">
                  اتصل بنا
                </Link>
                <Link href={`/live-broadcast`} className="link hide-onMobile">
                  البث المباشر
                </Link>
                <Link href={`/competitions`} className="link hide-onMobile">
                  المسابقات
                </Link>
                <Link href={`/services`} className="link hide-onMobile">
                  الخدمات
                </Link>
                <Link href={`/about-us`} className="link hide-onMobile">
                  عن ميدان
                </Link>
              </div>
              <Link
                href={`/home`}
                className="link animate__animated animate__backInDown"
              >
                <Image
                  src="/assets/logo.svg"
                  alt="img"
                  width={193}
                  height={58}
                />
              </Link>
              <label
                htmlFor="my-drawer"
                className="cursor-pointer drawer-button hidden show-onMobile"
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
              </label>
            </div>
          </main>
        </main>
        {/* Page content here */}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        {/* Sidebar content here */}
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-[#008062] text-white">
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/home`}>الرئيسية</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/about-us`}>عن ميدان</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/services`}>الخدمات</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/competitions`}>المسابقات</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/live-broadcast`}>البث المباشر</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <Link href={`/contact-us`}>اتصل بنا</Link>
          </li>
          <li className="flex juctify-center items-center text-xl w-full mt-20">
            <div>
              <div>...بحث</div>
              <Image
                src="/assets/icons/search.svg"
                alt="img"
                width={15}
                height={15}
              />
            </div>
          </li>
          <li className="flex juctify-center items-center text-xl w-full">
            <div>
              <div>حسابى</div>
              <Image
                src="/assets/icons/account.svg"
                alt="img"
                width={15}
                height={15}
              />
            </div>
          </li>
        </ul>
        {/* Sidebar content here */}
      </div>
    </div>
  );
}

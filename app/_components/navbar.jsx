import "./navbar.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <main className="navbar-container1">
      <main className="navbar-container2">
        <div className="sec1">
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
          <Link href={`/contact-us`} className="link">
            اتصل بنا
          </Link>
          <Link href={`/live-broadcast`} className="link">
            البث المباشر
          </Link>
          <Link href={`/competitions`}>المسابقات</Link>
          <Link href={`/services`} className="link">
            الخدمات
          </Link>
          <Link href={`/about-us`} className="link">
            عن ميدان
          </Link>
          <Link href={`/home`} className="link">
            <Image src="/assets/logo.svg" alt="img" width={193} height={58} />
          </Link>
        </div>
      </main>
    </main>
  );
}

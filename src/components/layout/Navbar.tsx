"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/ThemeToggle"; // 🌟 Import nút đổi theme

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Detect locale từ URL
  const locale = pathname.startsWith("/en") ? "en" : "vi";
  
  const NAV_ITEMS = [
    { label: locale === "vi" ? "Trang chủ"   : "Home",       href: `/${locale}` },
    { label: locale === "vi" ? "Về mình"      : "About",      href: `/${locale}/about` },
    { label: locale === "vi" ? "Dự án"        : "Projects",   href: `/${locale}/projects` },
    { label: locale === "vi" ? "Kinh nghiệm"  : "Experience", href: `/${locale}/experience` },
    { label: locale === "vi" ? "Kỹ năng"  : "Skills", href: `/${locale}/skills` },
    { label: locale === "vi" ? "Blog"          : "Blog",       href: `/${locale}/blog` },
    { label: locale === "vi" ? "Liên hệ"      : "Contact",    href: `/${locale}/contact` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    window.location.href = window.location.origin + newPath;
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50
      flex items-center justify-between
      px-8 md:px-16 h-[60px]
      border-b transition-all duration-300
      ${scrolled 
        ? "bg-white/95 dark:bg-[#09090f]/95 border-gray-200 dark:border-[#1c1c2e] backdrop-blur-xl" 
        : "bg-white/60 dark:bg-[#09090f]/60 border-gray-100 dark:border-[#1c1c2e] backdrop-blur-md"}
    `}>
      {/* Logo */}
      <Link href={`/${locale}`} className="text-lg font-extrabold text-[#6c63ff] dark:text-[#a78bfa] tracking-wider hover:opacity-80 transition-opacity">
        NQĐ.
      </Link>

      {/* Nav links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                pathname === href 
                  ? "text-[#6c63ff] dark:text-[#a78bfa]" 
                  : "text-gray-500 dark:text-[#9494b0] hover:text-black dark:hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Right side controls */}
      <div className="hidden md:flex items-center gap-3">
        {/* Nút Đổi Theme Xịn Mịn */}
        <ThemeToggle />

        {/* Language switcher */}
        <button
          onClick={toggleLocale}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#252538] text-gray-500 dark:text-[#9494b0] text-[12px] font-bold hover:border-[#6c63ff] dark:hover:border-[#a78bfa] hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-all"
        >
          {locale === "vi" ? "VI → EN" : "EN → VI"}
        </button>

        {/* 🌟 NÂNG CẤP: Biến nút Hire Me thành nút Tải CV tự động */}
        <a
          href="/Nguyen_Quoc_Duong_CV.pdf" // 🌟 Trỏ thẳng vào file PDF nằm trong thư mục public/
          download="Nguyen_Quoc_Duong_CV.pdf" // 🌟 Thần chú ép trình duyệt tự động tải xuống
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#6c63ff] text-white font-bold px-5 py-2 rounded-lg text-[13px] hover:bg-[#5b52e0] hover:scale-105 active:scale-95 transition-all shadow-md inline-flex items-center gap-1 cursor-pointer"
        >
          <span>{locale === "vi" ? "Tải CV 📄" : "Download CV 📄"}</span>
        </a>
      </div>
    </nav>
  );
}
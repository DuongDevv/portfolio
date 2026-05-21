"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, FileText, Globe } from "lucide-react"; 
import ThemeToggle from "@/components/ui/ThemeToggle";

// 🌟 TỐI ƯU SENIOR: Đưa mảng cấu hình ra hẳn ngoài Component để tránh re-render thừa và cố định Scope
const getNavItems = (locale: string) => [
  { label: locale === "vi" ? "Trang chủ"   : "Home",       href: `/${locale}` },
  { label: locale === "vi" ? "Về mình"      : "About",      href: `/${locale}/about` },
  { label: locale === "vi" ? "Dự án"        : "Projects",   href: `/${locale}/projects` },
  { label: locale === "vi" ? "Kinh nghiệm"  : "Experience", href: `/${locale}/experience` },
  { label: locale === "vi" ? "Kỹ năng"    : "Skills",     href: `/${locale}/skills` },
  { label: locale === "vi" ? "Blog"          : "Blog",       href: `/${locale}/blog` },
  { label: locale === "vi" ? "Liên hệ"      : "Contact",    href: `/${locale}/contact` },
];

export default function Navbar() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const lastScrollY = useRef(0);

  const locale = pathname.startsWith("/en") ? "en" : "vi";
  const NAV_ITEMS = getNavItems(locale); // 🌟 Triệu hồi mảng động mượt mà

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      
      // Nếu cuộn xuống dưới qua 60px thì ẩn Navbar, cuộn lên thì hiện lại
      if (currentScrollY > lastScrollY.current && currentScrollY > 60) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Đóng menu di động khi người dùng chuyển trang
  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => setIsOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname, isOpen]);

  const toggleLocale = () => {
    const newLocale = locale === "vi" ? "en" : "vi";
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");
    window.location.href = window.location.origin + newPath;
  };

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-5 md:px-16 h-[60px]
        border-b transition-all duration-300 select-none
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled 
          ? "bg-white dark:bg-[#09090f] border-gray-200 dark:border-zinc-800/80 shadow-sm" 
          : "bg-white dark:bg-[#09090f] border-transparent dark:border-transparent"}
      `}>
        {/* Logo */}
        <Link href={`/${locale}`} className="text-lg font-extrabold text-[#6c63ff] dark:text-[#a78bfa] tracking-wider hover:opacity-80 transition-opacity z-50">
          NQD
        </Link>

        {/* 💻 PC: Nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                prefetch={true}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                  pathname === href 
                    ? "text-[#6c63ff] dark:text-[#a78bfa] font-bold" 
                    : "text-gray-500 dark:text-[#9494b0] hover:text-black dark:hover:text-white"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* 💻 PC: Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-[#252538] text-gray-500 dark:text-[#9494b0] text-[12px] font-bold hover:border-[#6c63ff] dark:hover:border-[#a78bfa] hover:text-[#6c63ff] dark:hover:text-white transition-all"
          >
            {locale === "vi" ? "VI → EN" : "EN → VI"}
          </button>
          <a
            href="/Nguyen_Quoc_Duong_CV.pdf"
            download="Nguyen_Quoc_Duong_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6c63ff] text-white font-bold px-4 py-2 rounded-lg text-[12px] hover:bg-[#5b52e0] transition-colors shadow-md inline-flex items-center gap-1.5"
          >
            <span>{locale === "vi" ? "Tải CV" : "Download CV"}</span>
          </a>
        </div>

        {/* 📱 MOBILE: Nút bấm Hamburger cựa quậy */}
        <div className="flex md:hidden items-center gap-3 z-50">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-gray-600 dark:text-[#9494b0] p-1.5 hover:text-black dark:hover:text-white transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* 📱 MOBILE: Menu trượt từ trên xuống bao phủ màn hình */}
      <div className={`
        fixed inset-0 bg-white dark:bg-[#09090f] z-40 md:hidden
        flex flex-col pt-24 px-8 space-y-6 transition-all duration-300 ease-in-out
        ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-10 pointer-events-none"}
      `}>
        {/* Danh sách Link dọc */}
        <ul className="flex flex-col space-y-4 border-b border-gray-100 dark:border-[#1c1c2e] pb-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-lg font-semibold tracking-wide block py-1 transition-colors ${
                  pathname === href ? "text-[#6c63ff] dark:text-[#a78bfa]" : "text-gray-500 dark:text-[#9494b0]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cụm chức năng phụ trên Mobile */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={toggleLocale}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 dark:border-[#252538] text-gray-700 dark:text-[#9494b0] text-[13px] font-bold"
          >
            <Globe size={16} />
            {locale === "vi" ? "Chuyển sang TIẾNG ANH" : "Switch to VIETNAMESE"}
          </button>

          <a
            href="/Nguyen_Quoc_Duong_CV.pdf"
            download="Nguyen_Quoc_Duong_CV.pdf"
            className="bg-[#6c63ff] text-white font-bold py-3 rounded-xl text-[13px] shadow-lg flex items-center justify-center gap-2"
          >
            <FileText size={16} />
            <span>{locale === "vi" ? "Tải xuống bản CV PDF" : "Download CV (PDF)"}</span>
          </a>
        </div>
      </div>
    </>
  );
}
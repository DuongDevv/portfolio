import { getTranslations } from "next-intl/server";
import Link from "next/link"; // 🌟 Đã đưa về Link chuẩn

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return (
    <main className="flex flex-col justify-start max-w-5xl mx-auto w-full px-12 md:px-24 py-16 relative overflow-hidden select-none bg-white dark:bg-[#09090f] text-black dark:text-white transition-colors duration-300">
      
      {/* Hiệu ứng glow phía sau — ẩn trên nền sáng để trông sạch sẽ hơn */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.05)_0%,transparent_65%)] pointer-events-none hidden dark:block" />

      {/* Badge trạng thái */}
      <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-[rgba(108,99,255,0.08)] border border-purple-200 dark:border-[rgba(108,99,255,0.2)] text-[#6c63ff] dark:text-[#a78bfa] text-[12px] font-mono px-4 py-1.5 rounded-full mb-7 w-fit backdrop-blur-md">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        {t("badge")} 🇻🇳
      </div>

      {/* Tên chính chủ — Tự thích ứng màu */}
      <h1 className="text-[clamp(36px,6vw,72px)] font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight mb-3 font-sans">
        Nguyễn Quốc Đương
      </h1>

      {/* Vai trò (Role) kèm hiệu ứng gõ chữ Blinking Cursor */}
      <p className="text-[clamp(16px,2.5vw,24px)] font-mono text-[#6c63ff] dark:text-[#a78bfa] mb-6 flex items-center gap-1">
        <span>{t("role")}</span>
        <span className="w-[3px] h-[28px] bg-[#6c63ff] dark:bg-[#a78bfa] animate-[pulse_1s_infinite]" />
      </p>

      {/* Bio ngắn gọn — 🌟 Đã sửa lỗi mờ chữ trên nền trắng */}
      <p className="text-[15px] text-gray-600 dark:text-[#9494b0] max-w-[580px] leading-relaxed mb-10 font-sans font-normal">
        {t("bio")}
      </p>

      {/* Nhóm nút Call to Action (CTA) — 🌟 Đã sửa nút Liên hệ bị ẩn màu */}
      <div className="flex flex-wrap gap-4 mb-16 z-10">
        <Link
          href={`/${locale}/projects`}
          className="bg-[#6c63ff] text-white font-bold px-7 py-3.5 rounded-lg text-sm hover:bg-[#5b52e0] transition-all duration-200 shadow-lg shadow-[#6c63ff]/10"
        >
          {t("viewProjects")} &rarr;
        </Link>
        <Link
          href={`/${locale}/contact`}
          className="border border-gray-200 dark:border-[#252538] text-gray-600 dark:text-[#9494b0] font-medium px-7 py-3.5 rounded-lg text-sm hover:border-[#6c63ff] dark:hover:border-[#a78bfa] hover:text-[#6c63ff] dark:hover:text-white transition-all duration-200 bg-transparent"
        >
          {t("contactMe")}
        </Link>
      </div>

      {/* Khối thống kê chỉ số (Stats Section) — 🌟 Sửa nền card đồng bộ sáng tối */}
      <div className="grid grid-cols-3 gap-4 max-w-[500px] z-10">
        {[
          { num: "14+", label: "Skills & Tech" },
          { num: "∞",   label: "Tinh thần tự học" },
          { num: "24/7", label: "Nghiên cứu & Code" },
        ].map((s) => (
          <div key={s.num} className="bg-gray-50 dark:bg-[#0d0d18]/60 border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-4 hover:border-[#6c63ff] dark:hover:border-[#252538] transition-all duration-300 backdrop-blur-sm group">
            <div className="text-2xl font-extrabold text-gray-900 dark:text-white font-mono group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa] transition-colors">{s.num}</div>
            <div className="text-[11px] text-gray-400 dark:text-[#4a4a6a] font-mono mt-1 uppercase tracking-wider">{s.label}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
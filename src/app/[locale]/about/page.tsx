import { getTranslations } from "next-intl/server";
import { User, GraduationCap, MapPin, Mail, Sparkles, PhilippinePeso } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 select-none text-black dark:text-white">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">
          Profile
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {t("title")}
        </h1>
        <p className="text-sm text-[#9494b0]">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Cột trái: Thông tin nhanh (Quick Info Card) */}
        <div className="bg-gray-50 dark:bg-[#0d0d18]/60 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6 space-y-4 shadow-sm">
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <GraduationCap size={18} className="text-[#6c63ff] dark:text-[#a78bfa]" />
            <span className="text-[12px] font-medium leading-relaxed">{t("education")}</span>
          </div>
          
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <MapPin size={18} className="text-emerald-500" />
            <span className="text-[12px] font-medium">{t("locationValue")}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 border-t border-gray-100 dark:border-gray-900/50 pt-4">
            <Mail size={16} className="text-amber-500" />
            <span className="text-[11px] font-mono text-gray-500 dark:text-[#9494b0]">duongdevv@gmail.com</span>
          </div>
        </div>

        {/* Cột phải: Câu chuyện bản thân (Story paragraphs) */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-purple-50/40 dark:bg-[rgba(108,99,255,0.03)] border border-purple-100/50 dark:border-[rgba(108,99,255,0.08)] rounded-2xl p-6 relative group">
            <Sparkles size={16} className="absolute top-4 right-4 text-[#6c63ff] dark:text-[#a78bfa] opacity-60 group-hover:scale-125 transition-transform" />
            <p className="text-[13.5px] text-gray-600 dark:text-[#9494b0] leading-relaxed font-sans">
              {t("bio1")}
            </p>
          </div>

          <div className="border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6c63ff] dark:text-[#a78bfa] mb-2 font-mono">
              <span>{t("philosophyTitle")}</span> 
            </h3>
            <p className="text-[13.5px] text-gray-600 dark:text-[#9494b0] leading-relaxed font-sans">
              {t("bio2")}
            </p>
          </div>

          <div className="border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
              <span>{t("aimTitle")}</span> 
            </h3>
            <p className="text-[13.5px] text-gray-600 dark:text-[#9494b0] leading-relaxed font-sans">
              {t("bio3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
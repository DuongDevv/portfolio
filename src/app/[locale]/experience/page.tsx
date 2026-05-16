import { getTranslations } from "next-intl/server";
import { Briefcase, Calendar } from "lucide-react";

interface ExpItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  details: string[];
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "experience" });

  // 🌟 Bốc nguyên mảng động từ file JSON ra cực sạch!
  const expList: ExpItem[] = t.raw("list");

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">
          Timeline
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {t("pageTitle")}
        </h1>
        <p className="text-sm text-[#9494b0]">
          {t("pageSubtitle")}
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-gray-200 dark:border-[#1c1c2e] ml-4 md:ml-6 space-y-10">
        {expList.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Nút tròn Timeline có hiệu ứng hover đổi màu */}
            <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0d0d18] border-2 border-gray-200 dark:border-[#1c1c2e] flex items-center justify-center text-gray-400 group-hover:border-[#6c63ff] group-hover:text-[#6c63ff] transition-colors duration-300 shadow-sm">
              <Briefcase size={14} />
            </div>

            {/* Khối nội dung chính */}
            <div className="bg-gray-50/50 dark:bg-[#0d0d18]/40 border border-gray-100/70 dark:border-[#1c1c2e]/60 rounded-2xl p-6 hover:border-[#6c63ff]/30 dark:hover:border-[#6c63ff]/20 transition-all duration-300">
              {/* Vị trí & Công ty */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                <h3 className="text-[16px] font-bold text-gray-900 dark:text-white group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa] transition-colors">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-gray-400 dark:text-[#5e5e7a]">
                  <Calendar size={12} />
                  {exp.duration}
                </span>
              </div>

              <div className="text-[13px] font-semibold text-[#6c63ff] dark:text-[#a78bfa] mb-4">
                {exp.company}
              </div>

              {/* Chi tiết công việc / Đồ án */}
              <ul className="space-y-2.5 text-[12px] text-gray-500 dark:text-[#9494b0] list-disc pl-4 leading-relaxed font-sans">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="hover:text-gray-900 dark:hover:text-white transition-colors">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
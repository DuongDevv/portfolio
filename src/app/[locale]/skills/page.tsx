import { getTranslations } from "next-intl/server";
import { Code2, Database, Terminal } from "lucide-react";

const frontendSkills = [
  { name: "HTML5 / CSS3", color: "hover:text-[#e34f26] hover:border-[#e34f26]/30" },
  { name: "JavaScript ES6+", color: "hover:text-[#f7df1e] hover:border-[#f7df1e]/30" },
  { name: "React.js", color: "hover:text-[#61dafb] hover:border-[#61dafb]/30" },
  { name: "Next.js 15", color: "hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30" },
  { name: "TypeScript", color: "hover:text-[#3178c6] hover:border-[#3178c6]/30" },
  { name: "Tailwind CSS", color: "hover:text-[#38bdf8] hover:border-[#38bdf8]/30" },
];

const logicDbSkills = [
  { name: "C# (.NET)", color: "hover:text-[#239120] hover:border-[#239120]/30" },
  { name: "WinForms", color: "hover:text-[#512bd4] hover:border-[#512bd4]/30" },
  { name: "SQL Server", color: "hover:text-[#cc292b] hover:border-[#cc292b]/30" },
  { name: "C++", color: "hover:text-[#00599c] hover:border-[#00599c]/30" },
];

const toolSkills = [
  { name: "Git", color: "hover:text-[#f05032] hover:border-[#f05032]/30" },
  { name: "GitHub", color: "hover:text-[#24292e] dark:hover:text-white hover:border-black/30 dark:hover:border-white/30" },
  { name: "VS Code / Visual Studio", color: "hover:text-[#007acc] hover:border-[#007acc]/30" },
  { name: "Vercel", color: "hover:text-black dark:hover:text-white hover:border-black/30 dark:hover:border-white/30" },
];

// 🌟 Đã cấu hình params chuẩn chỉnh để làm trang độc lập nhận đa ngôn ngữ từ URL
export default async function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "skills" });

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">
          Abilities
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {t("pageTitle")}
        </h1>
        <p className="text-sm text-[#9494b0]">
          {t("pageSubtitle")}
        </p>
      </div>

      {/* Grid 3 nhóm kỹ năng */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Nhóm 1: FrontEnd */}
        <div className="bg-gray-50/50 dark:bg-[#0d0d18]/40 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6 hover:border-[#6c63ff]/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-[#6c63ff] dark:text-[#a78bfa] mb-6">
            <Code2 size={18} />
            <h3 className="text-sm font-bold tracking-wide uppercase">{t("categories.frontend")}</h3>
          </div>
          <div className="flex flex-col gap-2.5">
            {frontendSkills.map((skill) => (
              <div key={skill.name} className={`text-[13px] font-medium text-gray-600 dark:text-[#9494b0] bg-white dark:bg-[#09090f] border border-gray-100 dark:border-[#1c1c2e] px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${skill.color}`}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Nhóm 2: Tư duy Logic & DB */}
        <div className="bg-gray-50/50 dark:bg-[#0d0d18]/40 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6 hover:border-[#6c63ff]/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 mb-6">
            <Database size={18} />
            <h3 className="text-sm font-bold tracking-wide uppercase">{t("categories.logicDb")}</h3>
          </div>
          <div className="flex flex-col gap-2.5">
            {logicDbSkills.map((skill) => (
              <div key={skill.name} className={`text-[13px] font-medium text-gray-600 dark:text-[#9494b0] bg-white dark:bg-[#09090f] border border-gray-100 dark:border-[#1c1c2e] px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${skill.color}`}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Nhóm 3: Công cụ */}
        <div className="bg-gray-50/50 dark:bg-[#0d0d18]/40 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6 hover:border-[#6c63ff]/20 transition-colors duration-300">
          <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 mb-6">
            <Terminal size={18} />
            <h3 className="text-sm font-bold tracking-wide uppercase">{t("categories.tools")}</h3>
          </div>
          <div className="flex flex-col gap-2.5">
            {toolSkills.map((skill) => (
              <div key={skill.name} className={`text-[13px] font-medium text-gray-600 dark:text-[#9494b0] bg-white dark:bg-[#09090f] border border-gray-100 dark:border-[#1c1c2e] px-4 py-3 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-sm ${skill.color}`}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
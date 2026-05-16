import { getTranslations } from "next-intl/server";
import { Github, Mail, MapPin } from "lucide-react";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  const skills = {
    languages: ["JavaScript", "TypeScript", "C++", "C#", "Python"],
    frontend:  ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    backend:   ["Node.js", "MySQL"],
    tools:     ["Git", "GitHub", "VS Code", "VS 2022"],
  };

  const chipColors: Record<string, string> = {
    languages: "bg-yellow-400/10 border-yellow-400/25 text-yellow-600 dark:text-yellow-300",
    frontend:  "bg-sky-400/10   border-sky-400/25   text-sky-600 dark:text-sky-300",
    backend:   "bg-pink-400/10  border-pink-400/25  text-pink-600 dark:text-pink-300",
    tools:     "bg-green-400/10 border-green-400/25 text-green-600 dark:text-green-300",
  };

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 bg-white dark:bg-[#09090f] text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] dark:text-[#a78bfa] mb-2">About me</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{t("title")}</h1>
        <p className="text-sm text-gray-500 dark:text-[#9494b0]">{t("subtitle")}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-4">
          {/* Bio Card */}
          <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 transition-colors duration-300">
            <h3 className="text-[10px] font-bold text-[#6c63ff] dark:text-[#a78bfa] tracking-[2px] uppercase mb-4">Bio</h3>
            <p className="text-[13px] text-gray-600 dark:text-[#9494b0] leading-[1.85] mb-3">{t("bio1")}</p>
            <p className="text-[13px] text-gray-600 dark:text-[#9494b0] leading-[1.85] mb-3">{t("bio2")}</p>
            <p className="text-[13px] text-gray-600 dark:text-[#9494b0] leading-[1.85]">{t("bio3")}</p>
            <div className="mt-4 flex items-center gap-2 bg-purple-50 dark:bg-[rgba(167,139,250,0.08)] border border-purple-100 dark:border-[rgba(167,139,250,0.18)] rounded-lg px-3 py-2.5 text-[12px] text-[#6c63ff] dark:text-[#a78bfa] font-medium">
              🎓 {t("education")}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 transition-colors duration-300">
            <h3 className="text-[10px] font-bold text-[#6c63ff] dark:text-[#a78bfa] tracking-[2px] uppercase mb-4">{t("contactTitle")}</h3>
            <a href="https://github.com/DuongDevv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-[#1c1c2e] hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] shrink-0"><Github size={15} /></div>
              <div>
                <div className="text-[13px] font-semibold text-gray-800 dark:text-white group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa]">GitHub</div>
                <div className="text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a]">github.com/DuongDevv</div>
              </div>
            </a>
            <a href="mailto:dathuynh594@gmail.com" className="flex items-center gap-3 py-2.5 border-b border-gray-100 dark:border-[#1c1c2e] hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] shrink-0"><Mail size={15} /></div>
              <div>
                <div className="text-[13px] font-semibold text-gray-800 dark:text-white group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa]">Email</div>
                <div className="text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a]">dathuynh594@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 py-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] shrink-0"><MapPin size={15} /></div>
              <div>
                <div className="text-[13px] font-semibold text-gray-800 dark:text-white">{t("locationTitle")}</div>
                <div className="text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a]">{t("locationValue")}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 transition-colors duration-300">
          <h3 className="text-[10px] font-bold text-[#6c63ff] dark:text-[#a78bfa] tracking-[2px] uppercase mb-5">Tech Stack</h3>
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="mb-5 last:mb-0">
              <div className="text-[10px] text-gray-400 dark:text-[#4a4a6a] font-bold tracking-[1.5px] uppercase mb-2.5">
                {cat === "languages" ? (locale === "vi" ? "Ngôn ngữ" : "Languages") : cat}
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className={`text-[11px] font-semibold font-mono px-3 py-1 rounded-full border ${chipColors[cat]}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
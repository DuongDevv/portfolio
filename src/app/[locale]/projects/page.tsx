import { getTranslations } from "next-intl/server";
import { Github } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard"; 

// 🌟 Định nghĩa kiểu dữ liệu (TypeScript Type) cho dự án để code không bị lỗi đỏ
interface ProjectItem {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
  status: "live" | "wip";
  github: string;
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

  // 🌟 Thần chú chuẩn Senior: Bốc nguyên mảng động từ file JSON ra ngoài!
  const projectList: ProjectItem[] = t.raw("list");

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">
          Portfolio
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {t("pageTitle")}
        </h1>
        <p className="text-sm text-[#9494b0]">
          {t("pageSubtitle")}
        </p>
      </div>

      {/* Grid Cards tự động lặp theo mảng JSON */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {projectList.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            emoji={proj.emoji}
            index={index} 
            title={proj.title}
            description={proj.desc}
            tags={proj.tags}
            githubUrl={proj.github}
            isLive={proj.status === "live"}
            statusText={proj.status === "live" ? t("statusLive") : t("statusWip")}
          />
        ))}
      </div>

      {/* View all button ở dưới cùng */}
      <div className="flex justify-center">
        <a
          href="https://github.com/DuongDevv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gray-200 dark:border-[#252538] text-gray-700 dark:text-white font-medium px-6 py-3 rounded-lg text-sm hover:border-[#6c63ff] dark:hover:border-[#a78bfa] hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-all bg-transparent"
        >
          <Github size={16} />
          {t("viewAll")}
        </a>
      </div>
    </div>
  );
}
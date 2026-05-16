import { getTranslations } from "next-intl/server";
import { Github } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard"; // 🌟 Import component card có hiệu ứng

const projects = [
  {
    id: "portfolio",
    emoji: "🌐",
    titleKey: "proj1_title",
    descKey: "proj1_desc",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    status: "live",
    github: "https://github.com/DuongDevv",
  },
  {
    id: "webapp",
    emoji: "📊",
    titleKey: "proj2_title",
    descKey: "proj2_desc",
    tags: ["React.js", "Node.js", "MySQL", "REST API"],
    status: "wip",
    github: "https://github.com/DuongDevv",
  },
  {
    id: "ui-lib",
    emoji: "🎨",
    titleKey: "proj3_title",
    descKey: "proj3_desc",
    tags: ["React", "Tailwind CSS", "TypeScript"],
    status: "live",
    github: "https://github.com/DuongDevv",
  },
  {
    id: "desktop",
    emoji: "🖥️",
    titleKey: "proj4_title",
    descKey: "proj4_desc",
    tags: ["C#", "VS 2022", "SQL Server", ".NET"],
    status: "wip",
    github: "https://github.com/DuongDevv",
  },
];

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });

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

      {/* Grid Cards áp dụng hiệu ứng Motion */}
      <div className="grid md:grid-cols-2 gap-4 mb-10">
        {projects.map((proj, index) => (
          <ProjectCard
            key={proj.id}
            emoji={proj.emoji}
            index={index} // Truyền index vào để xử lý hiệu ứng so le mượt mà
            title={t(proj.titleKey)}
            description={t(proj.descKey)}
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
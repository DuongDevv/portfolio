"use client"; // 🌟 THẦN CHÚ 1: Biến file này thành Client Component

import { use } from "react"; // 🌟 Dùng để giải nén params dạng Promise ở Client
import { useTranslations } from "next-intl"; // 🌟 THẦN CHÚ 2: Hook dịch thuật chạy thẳng dưới trình duyệt
import { 
  Code2, Layout, Server, Database, 
  Terminal, Monitor, Brain, CheckCircle2 
} from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // Ở Client Component của Next.js 15+, params là một Promise nên ta dùng hàm use() để giải nén
  use(params);
  
  // 🌟 Dùng hook useTranslations (đồng bộ, KHÔNG CẦN AWAIT nữa!)
  const t = useTranslations("skills");

  // Bộ mảng tĩnh giữ nguyên cấu trúc
  const skillMatrix = [
    {
      title: t("categories.languages"),
      icon: <Code2 size={18} className="text-[#6c63ff] dark:text-[#a78bfa]" />,
      glow: "hover:border-[#6c63ff]/30 dark:hover:bg-[#6c63ff]/5",
      items: [
        { name: "JavaScript", color: "hover:text-[#f7df1e] hover:border-[#f7df1e]/30" },
        { name: "TypeScript", color: "hover:text-[#3178c6] hover:border-[#3178c6]/30" },
        { name: "C#", color: "hover:text-[#239120] hover:border-[#239120]/30" },
        { name: "C++", color: "hover:text-[#00599c] hover:border-[#00599c]/30" },
      ]
    },
    {
      title: t("categories.frontend"),
      icon: <Layout size={18} className="text-[#38bdf8]" />,
      glow: "hover:border-[#38bdf8]/30 dark:hover:bg-[#38bdf8]/5",
      items: [
        { name: "Next.js", color: "hover:text-black dark:hover:text-white hover:border-white/30" },
        { name: "React.js", color: "hover:text-[#61dafb] hover:border-[#61dafb]/30" },
        { name: "Tailwind CSS", color: "hover:text-[#38bdf8] hover:border-[#38bdf8]/30" },
        { name: "HTML5", color: "hover:text-[#e34f26] hover:border-[#e34f26]/30" },
        { name: "CSS3", color: "hover:text-[#1572b6] hover:border-[#1572b6]/30" },
      ]
    },
    {
      title: t("categories.backend"),
      icon: <Server size={18} className="text-emerald-500" />,
      glow: "hover:border-emerald-500/30 dark:hover:bg-emerald-500/5",
      items: [
        { name: "Node.js", color: "hover:text-[#339933] hover:border-[#339933]/30" },
        { name: "WinForms Application", color: "hover:text-[#512bd4] hover:border-[#512bd4]/30" },
      ]
    },
    {
      title: t("categories.database"),
      icon: <Database size={18} className="text-amber-500" />,
      glow: "hover:border-amber-500/30 dark:hover:bg-amber-500/5",
      items: [
        { name: "SQL Server", color: "hover:text-[#cc292b] hover:border-[#cc292b]/30" },
      ]
    },
    {
      title: t("categories.tools"),
      icon: <Terminal size={18} className="text-red-500" />,
      glow: "hover:border-red-500/30 dark:hover:bg-red-500/5",
      items: [
        { name: "Git", color: "hover:text-[#f05032] hover:border-[#f05032]/30" },
        { name: "GitHub", color: "hover:text-black dark:hover:text-white hover:border-white/30" },
        { name: "VS Code", color: "hover:text-[#007acc] hover:border-[#007acc]/30" },
        { name: "Vercel", color: "hover:text-black dark:hover:text-white hover:border-white/30" },
      ]
    },
    {
      title: t("categories.os"),
      icon: <Monitor size={18} className="text-blue-500" />,
      glow: "hover:border-blue-500/30 dark:hover:bg-blue-500/5",
      items: [
        { name: "Windows", color: "hover:text-[#0078d4] hover:border-[#0078d4]/30" },
        { name: "Linux", color: "hover:text-[#f82c00] hover:border-[#f82c00]/30" },
      ]
    },
    {
      title: t("categories.softskills"),
      icon: <Brain size={18} className="text-pink-500" />,
      glow: "hover:border-pink-500/30 dark:hover:bg-pink-500/5",
      items: [
        { name: t("skillsList.adaptability"), color: "hover:text-pink-500 hover:border-pink-500/30" },
        { name: t("skillsList.hardworking"), color: "hover:text-pink-500 hover:border-pink-500/30" },
        { name: t("skillsList.openminded"), color: "hover:text-pink-500 hover:border-pink-500/30" },
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-8 md:px-50 py-20 relative overflow-hidden select-none min-h-screen text-black dark:text-white bg-white dark:bg-[#09090f] transition-colors duration-300">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="mb-5 relative z-20">
        <div className="inline-flex items-center gap-1.5 bg-purple-50 dark:bg-[#11111e] border border-purple-100 dark:border-gray-800 text-[#6c63ff] dark:text-[#a78bfa] text-[10px] font-bold tracking-[3px] uppercase px-3 py-1 rounded-md mb-3 text-[#6c63ff] mb-2">
          <CheckCircle2 size={11} />
          Tech Stack
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          {t("pageTitle")}
        </h1>
        <p className="text-xs md:text-sm text-[#9494b0] max-w-xl">
          {t("pageSubtitle")}
        </p>
      </div>

      {/* Grid tự động căn chỉnh khoảng cách các khối */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
        {skillMatrix.map((block, index) => (
          <motion.div 
            key={block.title} 
            // 🌟 CẤU HÌNH HIỆU ỨNG SO LE (STAGGER):
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }} // Ô sau lên trễ hơn ô trước 0.08 giây
            
            className={`bg-gray-50/40 dark:bg-[#0d0d18]/40 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-5 shadow-sm transition-all duration-300 ${block.glow}`}
          >
            {/* ... Toàn bộ phần ruột bên trong của cái Card giữ nguyên vẹn tăm tắp ... */}
            <div className="flex items-center gap-2.5 mb-4 border-b border-gray-100 dark:border-[#1c1c2e]/60 pb-3">
              {block.icon}
              <h3 className="text-[13px] font-bold tracking-wide uppercase text-gray-800 dark:text-gray-200">{block.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {block.items.map((item) => (
                <div key={item.name} className={`text-[12px] font-medium text-gray-600 dark:text-[#9494b0] bg-white dark:bg-[#09090f] border border-gray-100/80 dark:border-[#161625] px-3 py-2 rounded-xl transition-all duration-200 cursor-default shadow-sm ${item.color}`}>
                  {item.name}
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
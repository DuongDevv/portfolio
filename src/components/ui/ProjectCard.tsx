"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  emoji: string;
  statusText: string;
  isLive: boolean;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  index: number;
}

export default function ProjectCard({ emoji, statusText, isLive, title, description, tags = [], githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      // 🌟 NÂNG CẤP: Tăng độ bo tròn lên rounded-2xl, thêm shadow mịn khi hover và hiệu ứng mượt hơn hẳn
      className="bg-white dark:bg-[#0d0d18] border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6 hover:border-[#6c63ff] dark:hover:border-[#6c63ff]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(108,99,255,0.15)] dark:hover:shadow-[0_12px_30px_-10px_rgba(108,99,255,0.08)] group relative flex flex-col justify-between h-full"
    >
      <div>
        {/* Top Header của Card */}
        <div className="flex items-start justify-between mb-5">
          {/* Ô chứa Emoji bo tròn mềm mại */}
          <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-[rgba(108,99,255,0.06)] border border-gray-100 dark:border-[rgba(108,99,255,0.12)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
          {/* Badge trạng thái */}
          <span className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full border ${
            isLive 
              ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
              : "bg-amber-500/5 border-amber-500/20 text-amber-600 dark:text-amber-400"
          }`}>{statusText}</span>
        </div>

        {/* Tiêu đề dự án */}
        <h3 className="text-[16px] font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa] transition-colors flex items-center gap-1">
          {title}
        </h3>

        {/* Mô tả dự án */}
        <p className="text-[12px] text-gray-500 dark:text-[#9494b0] leading-relaxed mb-5 font-sans min-h-[36px]">
          {description}
        </p>

        {/* Danh sách các Tags công nghệ */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tags?.map((tag) => (
            <span 
              key={tag} 
              className="text-[10px] font-semibold bg-gray-50 dark:bg-[rgba(255,255,255,0.03)] border border-gray-200/60 dark:border-gray-800 text-gray-600 dark:text-[#9494b0] px-2.5 py-1 rounded-md transition-colors group-hover:border-[#6c63ff]/20 dark:group-hover:border-[#a78bfa]/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 🌟 NÂNG CẤP: Khu vực nút bấm GitHub gọn gàng, tinh tế */}
      <div className="pt-2 border-t border-gray-50 dark:border-gray-900/50 flex justify-between items-center">
        <a 
          href={githubUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-1.5 text-[12px] font-medium text-gray-400 dark:text-[#5e5e7a] hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-colors group/link"
        >
          <Github size={14} className="group-hover/link:rotate-6 transition-transform" /> 
          <span>Source Code</span>
          <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}
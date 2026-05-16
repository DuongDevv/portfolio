"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

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

export default function ProjectCard({ emoji, statusText, isLive, title, description, tags, githubUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 hover:border-[#6c63ff] dark:hover:border-[#6c63ff] transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-[rgba(108,99,255,0.12)] flex items-center justify-center text-xl">{emoji}</div>
        <span className={`text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-full border ${
          isLive ? "bg-green-500/10 border-green-500/20 text-emerald-600 dark:text-green-400" : "bg-yellow-500/10 border-yellow-500/20 text-amber-600 dark:text-yellow-400"
        }`}>{statusText}</span>
      </div>
      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#6c63ff] dark:group-hover:text-[#a78bfa] transition-colors">{title}</h2>
      <p className="text-[12px] text-gray-600 dark:text-[#9494b0] leading-relaxed mb-4 font-sans">{description}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono bg-sky-50 dark:bg-[rgba(56,189,248,0.06)] border border-sky-100 dark:border-[rgba(56,189,248,0.16)] text-sky-600 dark:text-[#38bdf8] px-2.5 py-1 rounded-full">{tag}</span>
        ))}
      </div>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[12px] text-gray-500 dark:text-[#9494b0] hover:text-black dark:hover:text-white transition-colors">
        <Github size={13} /> GitHub
      </a>
    </motion.div>
  );
}
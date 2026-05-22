"use client"; 

import { use } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { GraduationCap, MapPin, Mail, Sparkles, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  const t = useTranslations("about");

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090f] text-slate-900 dark:text-slate-100 py-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-12 md:px-24">
        
        <div className="mb-10">
          <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">
            {t("sectionLabel") ?? "Profile"}
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
            {t("title")}
          </h1>
          <p className="text-sm text-[#9494b0]">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start justify-start relative"
          >
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-full lg:h-[290px] rounded-full lg:rounded-[28px] overflow-hidden border-4 border-transparent p-1 shadow-[0_0_30px_rgba(108,99,255,0.15)] dark:shadow-[0_0_40px_rgba(167,139,250,0.12)] transition-all duration-300 hover:scale-[1.02]">
              <div className="w-full h-full bg-[#09090f] rounded-full lg:rounded-[24px] overflow-hidden relative">
                <Image
                  src="/avatar.jpg"
                  alt="Nguyen Quoc Duong Avatar"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[20px] border border-slate-200/70 bg-slate-50/60 p-5 shadow-sm dark:border-[#1c1c2e] dark:bg-[#0d0d18]/40 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <GraduationCap size={22} className="text-[#6c63ff] dark:text-[#a78bfa] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-bold tracking-wide text-slate-900 dark:text-slate-100 uppercase font-mono mb-0.5">{("education")}</h3>
                  <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 font-medium">Cao Thang Technical College</p>
                  <p className="text-[11px] text-[#9494b0]">Information Technology</p>
                </div>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-slate-200 dark:border-[#1c1c2e] pt-3 md:pt-0 md:pl-5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-emerald-500" />
                  <span>{t("locationValue")}</span>
                </div>
                <a href="mailto:duongdevv@gmail.com" className="flex items-center gap-2 hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-colors font-mono text-slate-500 dark:text-slate-400">
                  <Mail size={15} className="text-amber-500" />
                  <span>duongdevv@gmail.com</span>
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-gradient-to-br from-[#f8fafc] to-[#eff6ff] p-6 md:p-7 shadow-sm dark:border-[#1c1c2e] dark:from-[#0d0d18]/60 dark:to-[#0d0d18]/20"
            >
              <Sparkles size={16} className="mb-3 text-[#6c63ff] dark:text-[#a78bfa]" />
              <p className="text-xs md:text-sm md:text-base leading-7 md:leading-8 text-slate-700 dark:text-slate-300">
                {t("bio1")}
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-[24px] border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-[#1c1c2e] dark:bg-[#0d0d18]/40"
              >
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#6c63ff] dark:text-[#a78bfa] mb-2 font-mono">
                  {t("philosophyTitle")}
                </p>
                <p className="text-xs md:text-sm leading-6 md:leading-7 text-slate-600 dark:text-slate-400">
                  {t("bio2")}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-[24px] border border-slate-200/80 bg-white/90 p-6 shadow-sm dark:border-[#1c1c2e] dark:bg-[#0d0d18]/40"
              >
                <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-emerald-600 dark:text-emerald-400 mb-2 font-mono">
                  {t("aimTitle")}
                </p>
                <p className="text-xs md:text-sm leading-6 md:leading-7 text-slate-600 dark:text-slate-400">
                  {t("bio3")}
                </p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-3 justify-end pt-1"
            >
              <a href="https://github.com/duongdevv" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-[#0d0d18]/40 border border-slate-200 dark:border-[#1c1c2e] hover:border-[#6c63ff] dark:hover:border-[#a78bfa] text-xs font-bold text-slate-600 dark:text-[#9494b0] hover:text-[#6c63ff] dark:hover:text-white transition-all">
                <Github size={13} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-[#0d0d18]/40 border border-slate-200 dark:border-[#1c1c2e] hover:border-[#6c63ff] dark:hover:border-[#a78bfa] text-xs font-bold text-slate-600 dark:text-[#9494b0] hover:text-[#6c63ff] dark:hover:text-white transition-all">
                <Linkedin size={13} />
                <span>LinkedIn</span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  );
}
"use client"; // 🌟 Bắt buộc vì Framer Motion chạy dưới Trình duyệt (Client)

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="min-h-screen w-full"
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -12, opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.36 }}
    >
      {children}
    </motion.div>
  );
}
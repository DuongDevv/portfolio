import type { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
  title: "Nguyễn Quốc Đương | Portfolio",
  description:
    "Frontend Developer Intern/Fresher - Portfolio cá nhân sử dụng Next.js, TypeScript và Tailwind CSS.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black antialiased transition-colors duration-300 dark:bg-[#09090f] dark:text-white">
        {children}
      </body>
    </html>
  );
}

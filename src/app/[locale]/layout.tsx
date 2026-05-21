import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Syne, DM_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/ui/ThemeProvider"; 
import "../globals.css";

const syne = Syne({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const locales = ["vi", "en"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  const title = locale === "vi" ? "Nguyễn Quốc Đương | Portfolio" : "Nguyen Quoc Duong | Portfolio";
  const description = locale === "vi" 
    ? "Frontend Developer Intern/Fresher - Sinh viên CNTT Cao đẳng Kỹ thuật Cao Thắng. Chuyên sâu về React, Next.js, TypeScript và có tư duy logic hệ thống vững chắc."
    : "Frontend Developer Intern/Fresher - Student at Cao Thang Technical College. Specialize in React, Next.js, TypeScript with solid logical thinking.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: "https://duongdevv.vercel.app",
      siteName: "Nguyen Quoc Duong Portfolio",
      images: [
        {
          url: "/icon.png", 
          width: 800,
          height: 800,
          alt: "Nguyen Quoc Duong Portfolio Avatar",
        },
      ],
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="bg-white dark:bg-[#09090f] overscroll-none"> 
      <body className={`${syne.variable} ${dmMono.variable} font-sans antialiased bg-white dark:bg-[#09090f] pt-[60px] transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages}>
          {/* 🌟 VÁ TẠI ĐÂY: Thêm lại đầy đủ các thuộc tính cấu hình cho ThemeProvider */}
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar />
            <main>{children}</main>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
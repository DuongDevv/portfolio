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

// 🌟 Thêm hàm generateMetadata động chuẩn Senior để đổi chữ trên Tab trình duyệt
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return {
    title: locale === "vi" ? "Nguyễn Quốc Đương - Portfolio" : "Nguyen Quoc Duong - Portfolio",
    description: "Frontend Developer Portfolio built with Next.js & Tailwind CSS",
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
    <html lang={locale} suppressHydrationWarning> 
      <body className={`${syne.variable} ${dmMono.variable} bg-white dark:bg-[#09090f] text-black dark:text-white antialiased transition-colors duration-300`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider> 
            <Navbar/>
            <div className="pt-[60px]">
              {children}
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
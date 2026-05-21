"use client";

import { useState, useEffect, ReactNode } from "react";
// 🌟 ĐỒNG BỘ CHUẨN LÕI: Quay lại dùng Named Import đích danh từ next-themes
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: ReactNode;
  [key: string]: unknown;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect chỉ kích hoạt sau khi đã xuống Client an toàn
  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  // Trong lúc chờ đợi Hydration trên trình duyệt, render component thô để giữ vững cấu trúc DOM
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
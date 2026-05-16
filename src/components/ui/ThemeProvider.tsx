"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="dark" // Mặc định vào trang web sẽ là giao diện tối
      enableSystem={false}
    >
      {children}
    </NextThemesProvider>
  );
}
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; // 🌟 Đã đảm bảo import useState
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false); // 🌟 Đã thêm dòng khởi tạo state này

    // Chỉ kích hoạt hiển thị sau khi component đã mounted trên client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Trả về một block trống để giữ layout không bị nhảy (Layout Shift)
        return <div className="w-8 h-8" />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg border border-gray-200 text-gray-500 hover:border-[#6c63ff] hover:text-[#6c63ff] dark:border-[#252538] dark:text-[#9494b0] dark:hover:border-[#a78bfa] dark:hover:text-[#a78bfa] transition-all duration-200 flex items-center justify-center w-8 h-8 bg-transparent"
            aria-label="Toggle Theme"
        >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
    );
}
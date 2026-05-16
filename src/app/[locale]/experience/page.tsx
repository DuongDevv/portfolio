import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const timelineData = [
  {
    id: "edu-1",
    type: "education",
    title: "Chuyên ngành Thiết kế & Lập trình Web",
    organization: "Trường Cao đẳng Kỹ thuật Cao Thắng",
    duration: "2024 - Hiện tại",
    location: "TP. Hồ Chí Minh, Việt Nam",
    description: {
      vi: "Xây dựng nền tảng vững chắc về thuật toán, cấu trúc dữ liệu, cơ sở dữ liệu và chuyên sâu phát triển ứng dụng Frontend với React, Next.js, TypeScript.",
      en: "Building a solid foundation in algorithms, data structures, databases, and specializing in Frontend development with React, Next.js, and TypeScript."
    }
  },
  {
    id: "proj-1",
    type: "project",
    title: "Hệ thống Quản lý Cửa hàng Quần áo",
    organization: "Đồ án Môn học / Dự án Cá nhân",
    duration: "03/2026 - Hiện tại",
    location: "TP. Hồ Chí Minh",
    description: {
      vi: "Thiết kế kiến trúc cơ sở dữ liệu và xây dựng ứng dụng quản lý bằng C# WinForms kết nối SQL Server. Tối ưu hóa các câu lệnh truy vấn và xử lý logic luồng nghiệp vụ.",
      en: "Designed database architecture and developed a desktop management system using C# WinForms and SQL Server. Optimized queries and business logic operations."
    }
  }
];

export default async function ExperiencePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 bg-white dark:bg-[#09090f] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] dark:text-[#a78bfa] mb-2">Timeline</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{locale === "vi" ? "Kinh nghiệm & Học vấn" : "Experience & Education"}</h1>
        <p className="text-sm text-gray-500 dark:text-[#9494b0]">{locale === "vi" ? "Hành trình phát triển kiến thức của mình" : "My professional journey"}</p>
      </div>

      <div className="relative border-l border-gray-200 dark:border-[#1c1c2e] ml-4 md:ml-6 flex flex-col gap-10">
        {timelineData.map((item) => (
          <div key={item.id} className="relative pl-8 group">
            <div className="absolute left-0 top-1 -translate-x-1/2 w-9 h-9 rounded-xl bg-white dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] group-hover:border-[#6c63ff] transition-all duration-300">
              {item.type === "education" ? <GraduationCap size={16} /> : <Briefcase size={16} />}
            </div>
            <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 transition-all duration-300">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mb-3 text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a]">
                <span className="flex items-center gap-1 text-[#6c63ff] dark:text-[#a78bfa] font-semibold bg-purple-50 dark:bg-[rgba(167,139,250,0.06)] px-2.5 py-0.5 rounded-full border border-purple-100 dark:border-[rgba(167,139,250,0.15)]">
                  <Calendar size={12} /> {item.duration}
                </span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {item.location}</span>
              </div>
              <h2 className="text-[16px] font-bold mb-1 group-hover:text-[#6c63ff] dark:text-[#a78bfa] transition-colors">{item.title}</h2>
              <p className="text-[13px] text-[#6c63ff] font-medium mb-4">{item.organization}</p>
              <p className="text-[12px] text-gray-600 dark:text-[#9494b0] leading-relaxed font-sans">{item.description[locale as "vi" | "en"]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
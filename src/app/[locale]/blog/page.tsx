import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "nextjs-i18n",
    title: "Hướng dẫn cấu hình Đa ngôn ngữ (i18n) trong Next.js 15/16 chuẩn Fresher",
    excerpt: "Chia sẻ cách tích hợp next-intl vào hệ sinh thái Next.js App Router, giải quyết các bài toán tối ưu SEO và chuyển đổi mượt mà giữa các quốc gia.",
    date: "15/05/2026",
    readTime: "5 min read",
    tags: ["Next.js", "i18n", "Frontend"],
  },
  {
    id: "clean-code-js",
    title: "Tư duy xử lý dữ liệu và Clean Code JavaScript cho Sinh viên CNTT",
    excerpt: "Làm thế nào để viết code gọn gàng, áp dụng ES6+ hiệu quả vào các bài toán thực tế thay vì tư duy code rườm rà, khó bảo trì.",
    date: "10/05/2026",
    readTime: "7 min read",
    tags: ["JavaScript", "Clean Code", "Tư duy"],
  }
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 bg-white dark:bg-[#09090f] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] dark:text-[#a78bfa] mb-2">Articles</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{locale === "vi" ? "Bài viết & Chia sẻ" : "Technical Blog"}</h1>
        <p className="text-sm text-gray-500 dark:text-[#9494b0]">{locale === "vi" ? "Nơi mình ghi lại quá trình tự học" : "Where I write about technology"}</p>
      </div>

      <div className="flex flex-col gap-6">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 hover:border-[#6c63ff]/60 transition-all duration-300 group">
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a] mb-3">
              <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            </div>
            <h2 className="text-lg font-bold mb-2 text-gray-900 dark:text-white group-hover:text-[#6c63ff] dark:text-[#a78bfa] transition-colors line-clamp-2">{post.title}</h2>
            <p className="text-[13px] text-gray-600 dark:text-[#9494b0] leading-relaxed mb-4 line-clamp-2 font-sans">{post.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-[#1c1c2e]">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono bg-gray-200 dark:bg-[#1c1c2e] text-[#6c63ff] dark:text-[#a78bfa] px-2.5 py-0.5 rounded-md">{tag}</span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#6c63ff] dark:text-[#a78bfa] cursor-pointer">
                {locale === "vi" ? "Đọc bài viết" : "Read post"}
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
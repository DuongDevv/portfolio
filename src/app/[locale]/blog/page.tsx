import { getTranslations } from "next-intl/server";

interface BlogPost {
  title: string;
  desc: string;
  date: string;
  readTime: string;
  tags: string[];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  const posts = t.raw("posts") as BlogPost[]; // 🌟 Bốc mảng động từ JSON

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 text-black dark:text-white">
      {/* Header */}
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] mb-2">Articles</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">{t("pageTitle")}</h1>
        <p className="text-sm text-[#9494b0]">{t("pageSubtitle")}</p>
      </div>

      {/* List bài viết */}
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-gray-50/50 dark:bg-[#0d0d18]/40 border border-gray-100 dark:border-[#1c1c2e] rounded-2xl p-6">
            <div className="flex gap-4 text-xs text-gray-400 mb-3">
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 hover:text-[#6c63ff] dark:hover:text-[#a78bfa] transition-colors">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-[#9494b0] mb-4 leading-relaxed">{post.desc}</p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">{tag}</span>
                ))}
              </div>
              <button className="text-xs font-bold text-[#6c63ff] dark:text-[#a78bfa] hover:underline">{t("readMore")} →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
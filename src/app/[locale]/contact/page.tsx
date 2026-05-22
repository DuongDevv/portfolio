import { Mail, Github, Send, Terminal } from "lucide-react";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="max-w-5xl mx-auto px-12 md:px-24 py-16 bg-white dark:bg-[#09090f] text-gray-900 dark:text-white transition-colors duration-300">
      <div className="mb-12">
        <p className="text-[10px] font-bold tracking-[3px] uppercase text-[#6c63ff] dark:text-[#a78bfa] mb-2">
          Get In Touch
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          {locale === "vi" ? "Kết nối với mình" : "Contact Me"}
        </h1>
        <p className="text-sm text-gray-500 dark:text-[#9494b0]">
          {locale === "vi" ? "Hãy gửi tin nhắn cho mình nhé!" : "Let's connect!"}
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-6 items-start">
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-5 transition-colors duration-300">
            <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] mb-4"><Mail size={16} /></div>
            <h3 className="text-sm font-bold mb-1">Email</h3>
            <p className="text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a] mb-3">dathuynh594@gmail.com</p>
            <a href="mailto:dathuynh594@gmail.com" className="text-[12px] font-bold text-[#6c63ff] dark:text-[#a78bfa] hover:opacity-80 transition-opacity">Send an email &rarr;</a>
          </div>

          <div className="bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-5 transition-colors duration-300">
            <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-[rgba(108,99,255,0.1)] flex items-center justify-center text-[#6c63ff] dark:text-[#a78bfa] mb-4"><Github size={16} /></div>
            <h3 className="text-sm font-bold mb-1">GitHub</h3>
            <p className="text-[11px] font-mono text-gray-400 dark:text-[#4a4a6a] mb-3">github.com/DuongDevv</p>
            <a href="https://github.com/DuongDevv" target="_blank" rel="noopener noreferrer" className="text-[12px] font-bold text-[#6c63ff] dark:text-[#a78bfa] hover:opacity-80 transition-opacity">View profile &rarr;</a>
          </div>
        </div>

        <div className="md:col-span-3 bg-gray-50 dark:bg-[#0d0d18] border border-gray-200 dark:border-[#1c1c2e] rounded-xl p-6 transition-colors duration-300">
          <div className="flex items-center gap-2 mb-6 text-[11px] font-mono text-gray-500 dark:text-[#4a4a6a] bg-white dark:bg-[#09090f] w-fit px-3 py-1.5 rounded-md border border-gray-200 dark:border-[#1c1c2e]">
            <Terminal size={12} className="text-emerald-500 dark:text-emerald-400" />
            <span>quocduong_messenger.sh</span>
          </div>
          <div className="space-y-4">
            <p className="text-[13px] text-gray-600 dark:text-[#9494b0] leading-relaxed font-sans">
              {locale === "vi" ? "Hệ thống form liên hệ đang được tối ưu hóa. Bấm nút bên dưới để mở ứng dụng Mail gửi nhanh thông tin." : "Click below to open a direct email configuration instantly."}
            </p>
            <a href="mailto:dathuynh594@gmail.com?subject=Contact from Portfolio" className="w-full flex items-center justify-center gap-2 bg-[#6c63ff] text-white text-xs font-bold py-3.5 px-4 rounded-lg hover:bg-[#5b52e0] transition-colors shadow-lg shadow-[#6c63ff]/10">
              <Send size={14} /> {locale === "vi" ? "Bắt đầu gửi Mail trực tiếp" : "Open Direct Mailto Client"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
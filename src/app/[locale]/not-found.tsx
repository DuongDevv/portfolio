import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center select-none">
      <div className="w-20 h-20 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-3xl flex items-center justify-center mb-6">
        <AlertCircle size={40} />
      </div>
      
      <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">404</h1>
      <p className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Không tìm thấy trang!</p>
      <p className="text-sm text-gray-500 dark:text-[#9494b0] max-w-md mb-8">
        Đường dẫn bạn đang tìm kiếm không tồn tại hoặc đã bị gỡ bỏ. Hãy kiểm tra lại URL hoặc quay về trang chủ nhé.
      </p>

      <Link 
        href="/vi" 
        className="flex items-center gap-2 bg-[#6c63ff] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#5b52e0] transition-all shadow-lg hover:-translate-y-0.5"
      >
        <Home size={18} /> Về Trang Chủ
      </Link>
    </div>
  );
}
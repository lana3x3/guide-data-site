import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/70 backdrop-blur-md text-black py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl text-blue-700">دليل البيانات الذكية</h1>
        <div className="flex space-x-6 rtl:space-x-reverse text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition">الرئيسية</Link>
          <Link href="/sectors" className="hover:text-blue-700 transition">القطاعات</Link>
          <Link href="/about" className="hover:text-blue-700 transition">حول</Link>
          <Link href="/dashboard" className="hover:text-blue-700 transition">لوحة البيانات</Link>
        </div>
      </div>
    </nav>
  );
}


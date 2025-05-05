import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 p-10 font-arabic">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h1 className="text-4xl font-bold mb-4">دليل البيانات الذكية</h1>
          <p className="text-lg leading-relaxed">
            هذا المشروع يعرض بيانات مفتوحة من الجهات الحكومية في السعودية، ويسمح للمستخدم بتصفحها حسب القطاع،
            رفع ملفات CSV، وتحليلها بطريقة تفاعلية.
          </p>
        </div>
      </main>
    </>
  );
}

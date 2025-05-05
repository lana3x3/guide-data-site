import Navbar from '../components/Navbar';

export default function Sectors() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 p-10 font-arabic">
        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6">القطاعات المتاحة</h1>
          <ul className="space-y-4 text-lg">
            <li><a href="https://mc.gov.sa/ar/OpenData/Pages/default.aspx" target="_blank" className="text-blue-700 underline">البيانات التجارية – وزارة التجارة</a></li>
            <li><a href="https://www.moh.gov.sa/Ministry/OpenData/Pages/Open-Data-Library.aspx" target="_blank" className="text-blue-700 underline">البيانات الصحية – وزارة الصحة</a></li>
            <li><a href="https://www.etec.gov.sa/ar/page/odata" target="_blank" className="text-blue-700 underline">البيانات التعليمية – هيئة تقويم التعليم</a></li>
            <li><a href="https://mt.gov.sa/tic/open-data" target="_blank" className="text-blue-700 underline">البيانات السياحية – وزارة السياحة</a></li>
            <li><a href="https://tga.gov.sa/KnowledgeCenter/OpenData/OpenDataCollection" target="_blank" className="text-blue-700 underline">بيانات النقل – الهيئة العامة للنقل</a></li>
          </ul>
        </div>
      </main>
    </>
  );
}

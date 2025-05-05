import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 p-10 font-arabic">
        <div className="max-w-3xl mx-auto bg-white bg-opacity-80 p-8 rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold mb-4">من أنا؟</h1>
          <p className="text-lg leading-relaxed mb-6">
            هذا المشروع تم تطويره من قبل <span className="font-semibold">Lana Al Dossary</span>، طالبة في تخصص نظم المعلومات الإدارية (MIS).
            يهدف المشروع إلى تعزيز الوصول إلى البيانات الحكومية المفتوحة، وتحليلها وعرضها بطريقة تفاعلية باستخدام تقنيات الويب الحديثة.
          </p>
          <h2 className="text-2xl font-bold mb-2">عن المشروع</h2>
          <p className="text-lg leading-relaxed">
            دليل البيانات الذكية هو منصة إلكترونية تتيح للمستخدمين تصفح بيانات مفتوحة مصنفة حسب القطاعات، بالإضافة إلى رفع ملفات CSV واستعراض البيانات
            وتحليلها بطريقة مرئية وسهلة الفهم.
          </p>
        </div>
      </main>
    </>
  );
}


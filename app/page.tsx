import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 glass scroll-smooth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                RC
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                SATRANÇ
              </span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <Link href="#hakkimda" className="hover:text-brand-red-600 transition-colors text-gray-600">Hakkımda</Link>
              <Link href="#dersler" className="hover:text-brand-red-600 transition-colors text-gray-600">Dersler</Link>
              <Link href="#basarilar" className="hover:text-brand-red-600 transition-colors text-gray-600">Başarılar</Link>
              <div className="h-6 w-px bg-gray-200"></div>
              <Link href="/login" className="hover:text-brand-red-600 transition-colors text-gray-600">
                Giriş Yap
              </Link>
              <Button asChild className="rounded-full px-6 bg-brand-red-600 hover:bg-brand-red-700">
                <Link href="#iletisim">İletişim</Link>
              </Button>
            </nav>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-brand-red-50 text-brand-red-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Usta Ellerden Satranç Eğitimi
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                  Hamleni <span className="gradient-text">Akıllıca</span> Yap, Geleceği Şekillendir.
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Satranç sadece bir oyun değil, bir yaşam biçimidir. Analitik düşünme, stratejik planlama ve disiplin ile potansiyelinizi zirveye taşıyın.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" className="rounded-2xl h-14 px-8 text-lg bg-brand-red-600 hover:bg-brand-red-700 shadow-xl shadow-brand-red-600/20">
                    Hemen Başla
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-lg border-gray-100 hover:border-brand-red-600">
                    Daha Fazla Bilgi
                  </Button>
                </div>
              </div>
              <div className="empty-content-area">
                {/* Visual content will be added by user */}
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="dersler" className="py-20 bg-gray-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Eğitim Programlarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-16">
              Her seviyeden sporcuya özel olarak tasarlanmış, gelişim odaklı müfredatlarımızla tanışın.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Başlangıç Seviyesi", desc: "Taşların hareketi ve temel prensipler." },
                { title: "Orta Seviye Strateji", desc: "Konumsal oyun ve açılış teorileri." },
                { title: "İleri Düzey Analiz", desc: "Oyun sonu teknikleri ve büyük usta analizleri." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-brand-red-400 transition-all shadow-sm">
                  <div className="empty-content-area mb-6" style={{ minHeight: '200px' }}></div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6">{item.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-brand-red-600 font-bold hover:gap-2 flex items-center transition-all group no-underline hover:no-underline">
                    Detayları Gör 
                    <span className="ml-1 opacity-0 group-hover:opacity-100 transition-all">→</span>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimda" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="empty-content-area order-2 lg:order-1">
                {/* Visual content will be added by user */}
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-900">Eğitmeniniz Hakkında</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  20 yılı aşkın profesyonel oyuncu ve antrenörlük tecrübesiyle, yüzlerce öğrencinin ulusal ve uluslararası arenalarda başarı elde etmesine rehberlik ettim.
                </p>
                <div className="space-y-4">
                  {[
                    "FIDE Antrenörlük Lisansı",
                    "Uluslararası Turnuva Tecrübesi",
                    "Kişiye Özel Gelişim Takibi",
                    "Online ve Yüz Yüze Eğitim Seçenekleri"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-brand-red-50 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-medium text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-brand-red-600 to-brand-red-800 rounded-3xl p-10 lg:p-20 text-center text-white shadow-2xl relative overflow-hidden">
               <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">İlk Hamleni Yapmaya Hazır Mısın?</h2>
                <p className="text-xl text-brand-red-50/80 mb-10 max-w-2xl mx-auto">
                  Ücretsiz deneme dersi için hemen randevu alın ve satranç yolculuğunuza profesyonel bir adım atın.
                </p>
                <Button variant="secondary" size="lg" className="rounded-2xl h-16 px-10 text-xl font-bold hover:scale-105 transition-all shadow-xl bg-white text-brand-red-800 hover:bg-gray-100">
                  Ücretsiz Randevu Al
                </Button>
               </div>
               {/* Background patterns */}
               <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
               <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-brand-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  RC
                </div>
                <span className="text-2xl font-bold tracking-tight">SATRANÇ</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Geleceğin şampiyonlarını bugünden hazırlıyoruz. Profesyonel satranç eğitimi ile analitik gücünüzü keşfedin.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Hızlı Linkler</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="#hakkimda" className="hover:text-brand-red-400">Hakkımızda</Link></li>
                <li><Link href="#dersler" className="hover:text-brand-red-400">Eğitimler</Link></li>
                <li><Link href="#basarilar" className="hover:text-brand-red-400">Başarılar</Link></li>
                <li><Link href="#iletisim" className="hover:text-brand-red-400">İletişim</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Sosyal Medya</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-brand-red-400">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-red-400">Youtube</a></li>
                <li><a href="#" className="hover:text-brand-red-400">Lichess</a></li>
                <li><a href="#" className="hover:text-brand-red-400">Chess.com</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} RC Satranç. Tüm hakları saklıdır.
          </div>
        </div>
      </footer>
    </div>
  );
}

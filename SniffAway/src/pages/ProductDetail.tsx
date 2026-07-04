import { ArrowLeft, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const shopeeLink = "https://id.shp.ee/Gpx9q9Az";

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans text-gray-800 selection:bg-sniff-cyan selection:text-white pb-20">
      {/* Simple Header */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">
            <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-sniff-orange transition-colors font-medium">
              <ArrowLeft className="w-5 h-5" />
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl shadow-orange-500/5 border border-orange-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Image Column */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 group border border-gray-100 shadow-inner">
               <img 
                 src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                 alt="Detail Produk SniffAway" 
                 className="w-full h-full object-cover"
               />
               {/* 
                 NOTE: Gambar ini adalah placeholder. 
                 Silakan ganti dengan gambar dari poster yang diunggah.
               */}
            </div>

            {/* Content Column */}
            <div className="flex flex-col h-full justify-center">
              <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-sniff-orange font-bold text-sm mb-6 w-fit">
                Produk Unggulan
              </div>
              
              <h1 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
                Vitamin Kucing <span className="text-sniff-cyan">SniffAway</span> Flu & Pilek
              </h1>
              
              {/* Placeholder text that asks user to refer to the image */}
              <div className="prose prose-orange prose-lg mb-8 text-gray-600">
                <p>
                  <em>*Teks di bawah ini dapat disesuaikan dengan deskripsi asli yang tertera pada poster produk Anda.*</em>
                </p>
                <p>
                  SniffAway diformulasikan khusus dengan <strong>Immune Booster Formula Profesional</strong> untuk membantu meredakan gejala flu dan pilek pada kucing kesayangan Anda dengan cepat dan aman.
                </p>
                
                <ul className="space-y-4 mt-6 list-none pl-0">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sniff-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Meningkatkan Imun:</strong> Membantu tubuh kucing melawan virus dan bakteri penyebab flu.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sniff-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Meredakan Gejala:</strong> Efektif mengurangi hidung tersumbat, bersin, dan mata berair.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-sniff-cyan flex-shrink-0 mt-0.5" />
                    <span><strong>Rasa Enak:</strong> Dibuat dengan rasa yang disukai kucing sehingga mudah diberikan tanpa paksaan.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <a 
                  href={shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-sniff-orange hover:bg-[#e0611a] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-3"
                >
                  <ShoppingCart className="w-6 h-6" />
                  Beli di Shopee Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

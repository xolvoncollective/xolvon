import { CheckCircle2, HeartPulse, MapPin, Phone, ShoppingCart, Star, ShieldCheck, Instagram, ChevronRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "1 Pcs", price: "35.850", popular: false },
  { id: 2, name: "2 Pcs", price: "68.115", popular: false },
  { id: 3, name: "3 Pcs", price: "102.173", popular: true },
  { id: 4, name: "4 Pcs", price: "136.230", popular: false },
  { id: 5, name: "5 Pcs", price: "170.288", popular: false },
  { id: 6, name: "6 Pcs", price: "204.345", popular: false },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const shopeeLink = "https://id.shp.ee/Gpx9q9Az";
  const waLink = "https://wa.me/6289623528000";
  const igLink = "https://instagram.com/sniffawayofficial";

  return (
    <div className="min-h-screen bg-[#FFF9F5] font-sans text-gray-800 selection:bg-sniff-cyan selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-black tracking-tight flex flex-col leading-none">
                <span className="text-sniff-orange">SNiFF</span>
                <span className="text-sniff-orange">AWAY</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#manfaat" className="text-gray-600 hover:text-sniff-orange font-medium transition-colors">Manfaat</a>
              <a href="#galeri" className="text-gray-600 hover:text-sniff-orange font-medium transition-colors">Galeri</a>
              <a href="#produk" className="text-gray-600 hover:text-sniff-orange font-medium transition-colors">Produk</a>
              <a href="#kontak" className="text-gray-600 hover:text-sniff-orange font-medium transition-colors">Kontak</a>
              <a 
                href={shopeeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sniff-orange hover:bg-[#e0611a] text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Beli di Shopee
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-sniff-orange focus:outline-none"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-xl">
            <a href="#manfaat" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sniff-orange hover:bg-orange-50 rounded-md">Manfaat</a>
            <a href="#galeri" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sniff-orange hover:bg-orange-50 rounded-md">Galeri</a>
            <a href="#produk" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sniff-orange hover:bg-orange-50 rounded-md">Produk</a>
            <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-sniff-orange hover:bg-orange-50 rounded-md">Kontak</a>
            <a 
              href={shopeeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block w-full text-center bg-sniff-orange text-white px-6 py-3 rounded-xl font-bold shadow-md"
            >
              Beli di Shopee Sekarang
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-sniff-cyan font-semibold text-sm mb-6">
                <HeartPulse className="w-4 h-4" />
                Vitamin Kucing No. 1
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
                BYE FLU! <br />
                <span className="text-sniff-cyan">HELLO MEOW</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                Vitamin Obat Kucing Flu & Pilek dengan <span className="font-bold text-sniff-orange">Immune Booster Formula Profesional</span>. Rasa enak yang pasti disukai anabul kesayanganmu!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a 
                  href={shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sniff-orange hover:bg-[#e0611a] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-orange-500/25 transition-all hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Beli di Shopee
                </a>
                <a 
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-green-500" />
                  Konsultasi WA
                </a>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-md md:max-w-full lg:p-8">
              {/* Decorative background shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-sniff-cyan rounded-full blur-2xl opacity-20 -z-10"></div>
              
              {/* Main Image placeholder replacing the poster */}
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl shadow-orange-500/10 rotate-2 hover:rotate-0 transition-transform duration-500 border border-orange-50">
                <img 
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Happy Cat SniffAway" 
                  className="rounded-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-bounce">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Terbukti Ampuh</p>
                      <p className="text-xs text-gray-500">Meredakan Flu & Pilek</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="manfaat" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Kenapa Pilih SniffAway?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Formula khusus yang dirancang oleh profesional untuk menjaga dan mengembalikan kesehatan kucing kesayangan Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF9F5] p-8 rounded-3xl border border-orange-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <Star className="w-10 h-10 text-sniff-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rasa Enak</h3>
              <p className="text-gray-600">Diformulasikan dengan rasa yang sangat disukai kucing, memudahkan pemberian vitamin tanpa paksaan.</p>
            </div>
            
            <div className="bg-cyan-50 p-8 rounded-3xl border border-cyan-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 -rotate-3">
                <HeartPulse className="w-10 h-10 text-sniff-cyan" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Immune Booster</h3>
              <p className="text-gray-600">Efektif meningkatkan sistem kekebalan tubuh, mempercepat pemulihan dari flu dan pilek.</p>
            </div>
            
            <div className="bg-[#FFF9F5] p-8 rounded-3xl border border-orange-100 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-2xl flex items-center justify-center mb-6 rotate-3">
                <ShieldCheck className="w-10 h-10 text-sniff-orange" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Formula Profesional</h3>
              <p className="text-gray-600">Dirancang khusus dengan bahan-bahan berkualitas tinggi untuk hasil yang aman dan maksimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Poster Section */}
      <section id="galeri" className="py-20 bg-[#FFF9F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Kenali Produk Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kenali lebih dekat manfaat SniffAway untuk anabul kesayangan Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Poster 1 / Link to Detail Page */}
            <Link to="/product-detail" className="bg-white rounded-3xl p-4 shadow-xl shadow-orange-500/5 border border-orange-100 group overflow-hidden block">
               <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Poster Produk SniffAway 1" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div>
                      <p className="text-white font-bold text-2xl mb-2 group-hover:text-sniff-orange transition-colors">Detail Produk</p>
                      <p className="text-gray-200 text-sm flex items-center gap-1">Baca selengkapnya <ChevronRight className="w-4 h-4" /></p>
                    </div>
                  </div>
               </div>
            </Link>

            {/* Poster 2 */}
            <div className="bg-white rounded-3xl p-4 shadow-xl shadow-orange-500/5 border border-orange-100 group overflow-hidden md:mt-12">
               <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Poster Produk SniffAway 2" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                     <div>
                      <p className="text-white font-bold text-2xl mb-2">Immune Booster</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Products Section */}
      <section id="produk" className="py-24 bg-sniff-orange relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0,0 C30,40 70,60 100,0 L100,100 L0,100 Z" fill="#ffffff"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 text-white">
            <h2 className="text-3xl md:text-5xl font-black mb-4">Pilihan Bundling Hemat</h2>
            <p className="text-orange-100 text-lg max-w-2xl mx-auto">Pilih paket yang paling sesuai dengan kebutuhan anabul di rumah. Lebih banyak, lebih hemat!</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className={`bg-white rounded-[2rem] p-8 relative transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${product.popular ? 'ring-4 ring-sniff-cyan shadow-xl scale-105 md:scale-110 z-10' : 'border border-gray-100'}`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sniff-cyan text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                    Paling Laris
                  </div>
                )}
                
                <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">{product.name}</h3>
                <p className="text-center text-gray-500 mb-6 text-sm">SniffAway Flu & Pilek</p>
                
                <div className="flex justify-center items-start mb-8 text-sniff-orange">
                  <span className="text-xl font-bold mt-1">Rp</span>
                  <span className="text-5xl font-black">{product.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-sniff-cyan flex-shrink-0" />
                    <span>Immune Booster Formula</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-sniff-cyan flex-shrink-0" />
                    <span>Rasa sangat enak</span>
                  </li>
                </ul>
                
                <a 
                  href={shopeeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-xl font-bold text-lg transition-all ${
                    product.popular 
                      ? 'bg-sniff-cyan hover:bg-[#008f8a] text-white shadow-lg shadow-cyan-500/30' 
                      : 'bg-orange-50 hover:bg-sniff-orange hover:text-white text-sniff-orange'
                  }`}
                >
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFF9F5] rounded-[3rem] p-8 md:p-12 border border-orange-100 shadow-xl shadow-orange-500/5 text-center">
            <h2 className="text-3xl font-black text-gray-900 mb-8">Hubungi Kami</h2>
            
            <div className="flex flex-col space-y-6 max-w-lg mx-auto">
              <a 
                href={waLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-green-400 hover:shadow-md transition-all group"
              >
                <div className="bg-green-100 p-3 rounded-xl group-hover:bg-green-500 transition-colors">
                  <Phone className="w-6 h-6 text-green-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium">WhatsApp Reservasi/Admin</p>
                  <p className="text-lg font-bold text-gray-900">0896-2352-8000</p>
                </div>
              </a>
              
              <a 
                href={igLink}
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:border-pink-400 hover:shadow-md transition-all group"
              >
                <div className="bg-pink-100 p-3 rounded-xl group-hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 transition-all">
                  <Instagram className="w-6 h-6 text-pink-600 group-hover:text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium">Instagram Official</p>
                  <p className="text-lg font-bold text-gray-900">@sniffawayofficial</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sniff-orange" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-500 font-medium mb-1">Alamat Pusat</p>
                  <p className="font-bold text-gray-900 leading-snug">Sniff Away<br/>
                  <span className="text-sm font-normal text-gray-600">Jl. Ismoyo No.1, Wirobrajan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55252</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center flex-col md:flex-row gap-4">
             <span className="text-2xl font-black tracking-tight flex items-center gap-2">
                <span className="text-white">SNiFF</span>
                <span className="text-sniff-orange">AWAY</span>
              </span>
              <span className="hidden md:inline text-gray-600">|</span>
              <p className="text-sm">Bye Flu! Hello Meow.</p>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} SniffAway. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

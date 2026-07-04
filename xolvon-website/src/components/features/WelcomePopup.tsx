import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const popupImages = [
  '/images/popup-xolvon-1.jpg',
  '/images/popup-xolvon-2.jpg',
];

const WelcomePopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('xolvon-popup-dismissed');
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (currentIndex < popupImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setVisible(false);
      sessionStorage.setItem('xolvon-popup-dismissed', 'true');
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="relative max-w-lg w-full animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-10 bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-white p-2 rounded-full border border-[var(--border-subtle)] shadow-lg transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>
        <img
          src={popupImages[currentIndex]}
          alt={`Xolvon Introduction ${currentIndex + 1}`}
          className="w-full rounded-xl shadow-2xl border border-[var(--border-subtle)]"
        />
        <div className="flex justify-center gap-2 mt-4">
          {popupImages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-[var(--cyan)] scale-125' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
        <p className="text-center text-[var(--text-muted)] text-sm mt-2">
          {currentIndex < popupImages.length - 1 ? 'Tap to continue' : 'Tap to close'}
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WelcomePopup;

import React, { useState, useMemo } from 'react';
import Header from './Header';
import Footer from './Footer';

// --- Type Definition ---
interface GalleryItem {
  id: number;
  category: '2024' | '2025';
  title: string;
  url: string;
  alt: string;
}

// --- Data ---
const initialGalleryItems: GalleryItem[] = [
  { id: 1, title: 'Community Leaders Meet', category: '2024', url: '../public/images/gallery/a3.jpg', alt: 'Community Leaders Meetup highlights' },
  { id: 2, title: 'The Crowd View', category: '2024', url: '../public/images/gallery/a2.jpg', alt: 'A large group smiling together' },
  { id: 3, title: 'Main Stage Performance', category: '2024', url: '../public/images/gallery/a7.jpg', alt: 'Performer on stage with lights' },
  { id: 4, title: 'Deep Dive Workshop', category: '2024', url: '../public/images/gallery/a4.jpg', alt: 'Attendees in a focused workshop' },
  { id: 5, title: 'Candid Laughter', category: '2024', url: '../public/images/gallery/a6.jpg', alt: 'Candid moment of laughter' },
  { id: 6, title: 'Setup Details', category: '2024', url: '../public/images/gallery/a8.jpg', alt: 'Detailed view of event decorations' },
  { id: 7, title: 'Hackathon Winners', category: '2024', url: '../public/images/gallery/a1.jpg', alt: 'Team celebrating a win' },
  { id: 8, title: 'Code Quest', category: '2024', url: '../public/images/gallery/a5.jpg', alt: 'Closing ceremony crowd view' },
];

// --- Messages ---
const preEventMessages = [
  "Moments are still cooking… come back later 🏃‍♀️",
  "Moments unlock once the event begins. 😊",
  "Loading… the event hasn’t even happened yet. 🤭",
  "Memories loading… 0% complete. 🫤",
  "Brb, event hasn’t started. 🫣"
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | '2024' | '2025'>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null);
  const categories: ('all' | '2024' | '2025')[] = ['all', '2024', '2025'];

  // Filter items
  const filteredItems = useMemo(() => {
    if (filter === 'all') return initialGalleryItems;
    return initialGalleryItems.filter(item => item.category === filter);
  }, [filter]);

  // Group items for "all"
  const groupedItems = useMemo(() => {
    if (filter !== 'all') return null;

    const uniqueCategories = Array.from(new Set(initialGalleryItems.map(item => item.category))).sort();

    const groups = uniqueCategories.map(cat => ({
      category: cat as '2024' | '2025',
      items: initialGalleryItems.filter(item => item.category === cat)
    }));

    if (!groups.find(g => g.category === '2025')) {
      groups.push({ category: '2025', items: [] });
    }

    return groups;
  }, [filter]);

  // Random message
  const randomPreEventMessage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * preEventMessages.length);
    return preEventMessages[randomIndex];
  }, [filter]);

  // Gallery card
  const GalleryItemCard: React.FC<{ item: GalleryItem }> = ({ item }) => (
    <div
      key={item.id}
      onClick={() => setLightboxImage(item)}
      className="group relative border border-white/10 bg-white/[0.02] overflow-hidden cursor-zoom-in rounded-xl shadow-xl hover:shadow-purple-500/20 hover:border-purple-500/30 transition-all duration-500 break-inside-avoid"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-5">
        <h4 className='text-white font-semibold text-lg drop-shadow-lg'>{item.title}</h4>
        <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mt-1">
          {item.category} Gallery
        </span>
      </div>

      <img
        src={item.url}
        alt={item.alt}
        className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
        onError={(e) => {
          (e.target as HTMLImageElement).src = `https://placehold.co/600x400/1a1a1a/FFF?text=${item.title.split(' ')[0]}`;
        }}
      />
    </div>
  );

  // Pre-event message component **FIXED**
  const PreEventMessage: React.FC = () => (
    <div className="text-center p-10 my-12 max-w-3xl mx-auto">
      <p className="text-xl font-light text-white mb-4 tracking-wider">
        {randomPreEventMessage}
      </p>
    </div>
  );

  return (
    <>
      <Header />

      <section className="relative pt-32 pb-24 min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-purple-500/30">

        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

        <div className="relative max-w-7xl mx-auto px-6 z-10">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-orange-500 mb-3 tracking-[0.2em] uppercase">
              / GALLERY
            </h2>

            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
              Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">Highlights</span>
            </h3>

            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Curated visual captures from Fiestron events. Relive the defining moments.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map(cat => {
              const active = filter === cat;
              const label =
                cat === 'all' ? 'All Years' :
                cat === '2024' ? 'Archives' :
                'Live Feed';

              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-xl font-medium text-xs border transition-all duration-300 shadow-lg 
                    ${active
                      ? 'bg-purple-500/90 text-white border-purple-500/90 shadow-purple-500/40'
                      : 'bg-white/5 text-white/70 border-white/10 hover:border-purple-500/50 hover:text-white'
                    }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* ALL view */}
          {filter === 'all' ? (
            groupedItems?.map((group, index) => (
              <React.Fragment key={group.category}>
                {!(group.category !== '2025' && group.items.length === 0) && (
                  <div className={`mt-20 mb-8 text-center ${index > 0 ? 'border-t border-white/5 pt-10' : ''}`}>
                    <h3 className="text-white/30 uppercase tracking-[0.2em] text-sm font-bold mb-4">
                      {group.category} {group.category === '2024' ? 'ARCHIVES' : 'LIVE FEED'}
                    </h3>
                  </div>
                )}

                {group.items.length > 0 ? (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {group.items.map(item => (
                      <GalleryItemCard key={item.id} item={item} />
                    ))}
                  </div>
                ) : (
                  group.category === '2025' && <PreEventMessage />
                )}
              </React.Fragment>
            ))
          ) : (
            <>
              {/* 2024 */}
              {filter === '2024' && filteredItems.length > 0 && (
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                  {filteredItems.map(item => (
                    <GalleryItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}

              {/* 2025 → no items */}
              {filter === '2025' && filteredItems.length === 0 && (
                <PreEventMessage />
              )}
            </>
          )}

        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative w-full max-w-5xl max-h-[90vh] rounded-xl overflow-hidden flex flex-col md:flex-row bg-[#0a0a0a] border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >

              <div className="flex-1 bg-black flex items-center justify-center">
                <img
                  src={lightboxImage.url}
                  alt={lightboxImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>

              <div className="w-full md:w-80 bg-[#111] border-l border-white/10 p-6 flex flex-col">
                <div className="hidden md:block mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest
                      ${lightboxImage.category === '2024'
                        ? 'text-purple-400 border border-purple-400/30 bg-purple-900/20'
                        : 'text-orange-400 border border-orange-400/30 bg-orange-900/20'
                      }`}
                  >
                    {lightboxImage.category === '2024' ? '2024 ARCHIVE' : '2025 LIVE'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2">{lightboxImage.title}</h3>
                <p className="text-white/40 text-sm">{lightboxImage.alt}</p>

                <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                  <button className="text-white/40 hover:text-white text-sm transition-colors">Share Photo</button>
                  <button className="text-white/40 hover:text-white text-sm transition-colors">Download Original</button>
                </div>
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 p-2 w-10 h-10 rounded-full bg-black/70 hover:bg-white/20 text-white text-lg font-bold border border-white/20 backdrop-blur-sm transition-colors"
              >
                ✕
              </button>

            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
};

export default Gallery;

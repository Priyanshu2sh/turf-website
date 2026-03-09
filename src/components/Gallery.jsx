import React from 'react';

const Gallery = () => {
  // Using dynamic layout for images giving a modern masonry/grid feel
  // using generic sports unsplash placeholders temporarily until accurate turf details provided
  const images = [
    { src: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800', alt: 'Football Turf', span: 'md:col-span-2 md:row-span-2' },
    { src: 'https://images.unsplash.com/photo-1512719994953-eabf50895df7?auto=format&fit=crop&q=80&w=800', alt: 'Cricket Batting', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1629837944033-ae588eedf0fe?auto=format&fit=crop&q=80&w=800', alt: 'Badminton Play', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1574629810360-7efbb1925536?auto=format&fit=crop&q=80&w=800', alt: 'Night Turf Match', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1622279457486-640c4cb716f1?auto=format&fit=crop&q=80&w=800', alt: 'Badminton Equipment', span: 'md:col-span-2' },
  ];

  return (
    <section id="gallery" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Turf in Action</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
              Gallery
            </h2>
            <p className="text-gray-400 text-lg">
              Check out the incredible moments and high-energy games played at our facility. 
              The perfect environment for your squad to shine.
            </p>
          </div>
          <button className="mt-8 md:mt-0 px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-white rounded-full font-medium transition-colors">
            View All Photos
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h4 className="text-white font-bold text-xl">{img.alt}</h4>
                  <p className="text-green-400 text-sm mt-1 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                    TurfPlay Ground
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

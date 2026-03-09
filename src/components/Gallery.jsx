import React from 'react';
import cricketGround from "../assets/turf_images/cricket_ground.jpg";
import badmintonCourt from "../assets/turf_images/badminton_court.jpg";
import logo from "../assets/turf_images/logo.jpg";

const Gallery = () => {
  // Using dynamic layout for images giving a modern masonry/grid feel
  const images = [
    { src: cricketGround, alt: 'Cricket Ground', span: 'md:col-span-2 md:row-span-2' },
    { src: badmintonCourt, alt: 'Badminton Court', span: 'md:col-span-2' },
    { src: logo, alt: 'TurfPlay Logo', span: 'col-span-1 row-span-1' },
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

import React, { useEffect, useRef, useState } from 'react';

// Dynamically import all target images from assets/frames
const frameModules = import.meta.glob('../assets/frames/*.jpg', { eager: true, query: '?url', import: 'default' });

// Sort the paths to ensure sequential order
const sortedPaths = Object.keys(frameModules).sort();
const FRAME_URLS = sortedPaths.map(path => frameModules[path]);

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  // Preload Images
  useEffect(() => {
    let loadedCount = 0;
    const imgArray = [];

    FRAME_URLS.forEach((url, index) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount++;
        imgArray[index] = img;
        if (loadedCount === FRAME_URLS.length) {
          setImages(imgArray);
          setLoaded(true);
        }
      };
    });
  }, []);

  // Canvas Drawing & Scroll Logic
  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set fixed high-res canvas size for cinematic look
    canvas.width = 1920;
    canvas.height = 1080;

    const drawImage = (img) => {
      // Cover logic
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Draw initial frame
    drawImage(images[0]);

    const handleScroll = () => {
      // Calculate scroll progress within this specific section
      // The section is pinned, we want to map the scroll from top of section to the end of the 300vh scrolling area
      const rect = containerRef.current.getBoundingClientRect();
      const st = -rect.top; // How far we've scrolled past the top of the container
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate max scrollable distance for the animation
      const scrollableDistance = containerHeight - windowHeight;
      
      if (st >= 0 && st <= scrollableDistance) {
        const scrollFraction = st / scrollableDistance;
        const frameIndex = Math.min(
          images.length - 1,
          Math.max(0, Math.floor(scrollFraction * images.length))
        );
        
        setProgress(scrollFraction * 100);
        
        requestAnimationFrame(() => {
          drawImage(images[frameIndex]);
        });
      } else if (st < 0) {
        requestAnimationFrame(() => drawImage(images[0]));
        setProgress(0);
      } else {
        requestAnimationFrame(() => drawImage(images[images.length - 1]));
        setProgress(100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once to ensure correct state on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loaded, images]);

  return (
    <div ref={containerRef} id="home" className="relative h-[300vh] bg-black">
      {/* Pinned Sticky Section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Loader mapping */}
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-white mt-4 font-semibold tracking-wider">LOADING EXPERIENCE...</p>
            </div>
          </div>
        )}

        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80 pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pt-24">
          <span className="text-green-500 font-bold tracking-widest uppercase text-sm md:text-base mb-4 animate-fade-in">
            Elevate Your Game
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 text-center leading-tight drop-shadow-2xl">
            Premium Sports <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Turf Experience</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 max-w-2xl text-center mb-10 drop-shadow-lg font-light">
            Book the perfect ground for cricket, football, and badminton. Play like a pro, day or night.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
            <a 
              href="#contact" 
              className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(22,163,74,0.7)] text-center"
            >
              Book Now
            </a>
            <a 
              href="#facilities" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 text-center"
            >
              View Facilities
            </a>
          </div>
        </div>

        {/* Scroll indicator overlay */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-80 text-white">
          <p className="text-xs tracking-widest uppercase mb-2">Scroll Down</p>
          <div className="w-[2px] h-16 bg-white/20 overflow-hidden relative">
            <div 
              className="absolute top-0 left-0 w-full bg-green-500 rounded-full"
              style={{ height: `${Math.max(5, progress)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;

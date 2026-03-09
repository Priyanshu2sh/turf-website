import React from 'react';
import { FaTrophy, FaUsers, FaMedal } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800" 
                alt="Turf facility top view" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-green-500 mix-blend-multiply opacity-20"></div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500 rounded-full blur-3xl opacity-50 block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-30 block"></div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
              More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Playing Field</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Founded in 2023, TurfPlay was built with a single mission: to provide athletes of all levels access to professional-grade sporting infrastructure. We believe that top-tier facilities shouldn't be reserved only for professionals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <FaTrophy className="text-green-400 text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white">Premium Quality</h4>
                  <p className="mt-1 text-gray-400">Imported FIFA-approved 50mm artificial grass and BWF-standard wooden courts.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <FaUsers className="text-green-400 text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white">Community First</h4>
                  <p className="mt-1 text-gray-400">Join a growing community of over 5,000 active players and daily tournaments.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
                    <FaMedal className="text-green-400 text-xl" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-white">Professional Tournaments</h4>
                  <p className="mt-1 text-gray-400">We regularly host corporate events, local leagues, and professional training camps.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

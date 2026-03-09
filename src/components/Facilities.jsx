import React from 'react';
import { FaFutbol, FaBaseballBall, FaTableTennis, FaLightbulb, FaShower, FaCoffee } from 'react-icons/fa';

const facilities = [
  {
    icon: <FaBaseballBall className="text-4xl text-green-500 mb-4" />,
    title: 'Professional Cricket Nets',
    description: 'High-quality astroturf pitches with professional-grade netting for optimal practice sessions.',
  },
  {
    icon: <FaFutbol className="text-4xl text-green-500 mb-4" />,
    title: '5v5 Football Turf',
    description: 'FIFA-approved artificial grass providing excellent traction and injury prevention.',
  },
  {
    icon: <FaTableTennis className="text-4xl text-green-500 mb-4" />,
    title: 'Badminton Courts',
    description: 'Indoor wooden and synthetic courts with anti-glare lighting for precise play.',
  },
  {
    icon: <FaLightbulb className="text-4xl text-green-500 mb-4" />,
    title: 'LED Floodlights',
    description: 'Daylight-quality stadium lighting allowing uninterrupted play during evening and night hours.',
  },
  {
    icon: <FaShower className="text-4xl text-green-500 mb-4" />,
    title: 'Changing Rooms',
    description: 'Clean, sanitized washrooms and locker facilities available for all players.',
  },
  {
    icon: <FaCoffee className="text-4xl text-green-500 mb-4" />,
    title: 'Cafeteria & Seating',
    description: 'Comfortable spectator seating and a cafe serving healthy refreshments and energy drinks.',
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Amenities</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Premium Facilities
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience world-class sporting infrastructure designed for both professional athletes and casual enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors mb-6">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;

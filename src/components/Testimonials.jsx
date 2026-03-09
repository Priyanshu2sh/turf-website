import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Amateur Cricketer",
      image: "https://i.pravatar.cc/150?img=11",
      content: "The cricket nets here are fantastic. The bounce is true, and the lighting is perfect for evening practice after work. Best turf in the city!"
    },
    {
      name: "Vikram Singh",
      role: "Football Team Captain",
      image: "https://i.pravatar.cc/150?img=12",
      content: "We play here every weekend. The 5v5 turf quality prevents injuries and offers great grip even during monsoon. Highly recommended."
    },
    {
      name: "Anjali Desai",
      role: "Badminton Enthusiast",
      image: "https://i.pravatar.cc/150?img=5",
      content: "Clean facility, great wooden courts, and the staff is incredibly polite. Booking through the website is completely seamless."
    }
  ];

  return (
    <section className="py-24 bg-green-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Player Feedback</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            What Our Players Say
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative mt-8">
              <div className="absolute -top-8 left-8">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                />
              </div>
              <FaQuoteLeft className="text-green-100 text-5xl absolute top-8 right-8 z-0" />
              
              <div className="relative z-10 pt-8">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-600 font-medium italic mb-6 leading-relaxed">
                  &quot;{review.content}&quot;
                </p>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-green-600 font-medium">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

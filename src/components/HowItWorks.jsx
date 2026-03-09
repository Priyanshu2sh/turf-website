import React from 'react';
import { FaCalendarAlt, FaClock, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCalendarAlt className="text-4xl text-white" />,
      title: 'Choose Your Sport',
      description: 'Select either Cricket, Football, or Badminton based on your team\'s preference and group size.',
      number: '01'
    },
    {
      icon: <FaClock className="text-4xl text-white" />,
      title: 'Select Time Slot',
      description: 'Find an available slot that works for you. We are open from 6:00 AM to 2:00 AM daily.',
      number: '02'
    },
    {
      icon: <FaCheckCircle className="text-4xl text-white" />,
      title: 'Confirm Booking',
      description: 'Pay securely online to confirm your slot immediately. You will receive an instant confirmation.',
      number: '03'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-tr-full opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            How Booking Works
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-[4rem] left-[15%] right-[15%] h-1 bg-green-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-green-500 rounded-full scale-90 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                {step.icon}
                
                {/* Step Number Badge */}
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-black border-4 border-white shadow-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-lg max-w-sm px-4">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="inline-flex items-center justify-center bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl">
            Start Booking Now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

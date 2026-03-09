import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Form Side */}
          <div className="lg:w-1/2 p-10 md:p-16">
            <span className="text-green-500 font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-8">
              Book Your Slot
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Select Sport</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none cursor-pointer">
                  <option>Cricket Net Practice</option>
                  <option>Football Turf (5v5)</option>
                  <option>Badminton Court</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message or Special Requests</label>
                <textarea 
                  rows="4" 
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Need extra balls? Looking for a permanent weekend slot? Let us know."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-green-500/30 transition-all"
              >
                Request Booking
              </button>
            </form>
          </div>

          {/* Map Side */}
          <div className="lg:w-1/2 relative min-h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15065.986603123862!2d72.82512140641258!3d19.260840502159157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sMira%20Bhayandar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1704192000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
            {/* Map overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none hidden lg:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

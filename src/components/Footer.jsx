import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-turf-dark bg-green-950 text-white pt-16 pb-8 border-t border-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">
              <span className="text-green-500">TURF</span>PLAY
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium multi-sport facility offering top-tier grounds for cricket, football, and badminton.
              Experience the joy of playing on professional-grade turf under floodlights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 hover:bg-green-600 flex items-center justify-center transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 hover:bg-green-600 flex items-center justify-center transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-900 hover:bg-green-600 flex items-center justify-center transition-colors">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#facilities" className="hover:text-white transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-400">Contact Info</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-green-500 flex-shrink-0" />
                <span><a href="https://www.google.com/maps?q=18.575278630201296,73.98180610180336" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Gat no 1196, MAHI SPORT, <br /> Raisoni College Rd, <br />Near GS fitness club and rainbow glory society, Wagholi, Pune, Maharashtra 412207</a></span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-green-500 flex-shrink-0" />
                <span><a href="tel:+919158447171" className="hover:text-white transition-colors">+91 9158447171</a></span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-green-500 flex-shrink-0" />
                <span><a href="mailto:bookings@mahisport.com" className="hover:text-white transition-colors">bookings@mahisport.com</a></span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TurfPlay Facilities. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

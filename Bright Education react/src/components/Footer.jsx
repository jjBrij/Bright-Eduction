
import React from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';


import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaSpotify } from 'react-icons/fa';
const EXTERNAL_URLS = {
  login: 'https://soft.shaheedbhagatsinghhealthandeducation.com/',
  result: 'https://sbshe.in/Rollno-Verification.aspx',
};

const Footer = () => {
  return (
    <footer className="bg-spotify-black border-t border-spotify-border py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-4">
              <a href="/">
  <img
    src={logo}
    alt="Bright Education
logo"
    className="w-16 h-16 md:w-32 md:h-32 rounded-full object-cover"
  />
</a>

              <div className="flex flex-col justify-center">
                <h1 className="text-white font-bold text-lg leading-tight">
                  Bright Education
                </h1>

                <p className="text-yellow-400 text-sm font-medium">
                   
                </p>

                <a href="https://shaheedbhagatsinghhealthandeducation.com/">
                  <span className="mt-1 inline-block w-fit px-3 py-1 text-[10px] md:text-xs font-semibold rounded-full bg-gradient-to-r from-yellow-500 to-amber-300 text-black">
                    Affiliated with Shaheed Bhagat Singh Health & Education
                  </span>
                </a>
              </div>
            </div>
            <p className="text-spotify-silver gap-3 mt-4 text-sm max-w-xs font-spotify">
              India's leading multi-domain coaching institute for IT, Agriculture, and Beauty and Wellness fields.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/share/1K7CuG2v6N/" className="text-spotify-silver hover:text-spotify-green transition">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-spotify-silver hover:text-spotify-green transition">
                <FaTwitter size={20} />
              </a>
              <a href="#">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-spotify-silver hover:text-spotify-green transition">
                <FaLinkedin size={20} />
              </a>
              <a href=" https://youtube.com/@arpgroupclasses645?si=hd3CDGJeWN7HJGAu" className="text-spotify-silver hover:text-spotify-green transition">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          <div>
            <h5 className="text-white font-spotify-title font-bold text-sm uppercase tracking-button">Quick Links</h5>
            <ul className="text-spotify-silver text-sm space-y-2 mt-4 font-spotify">
              <li><Link to="/courses" className="hover:text-spotify-green transition">Courses</Link></li>
              <li><Link to="/about" className="hover:text-spotify-green transition">About Us</Link></li>
              <li><a href="https://shaheedbhagatsinghhealthandeducation.com/contact-us" className="hover:text-white transition">Contact</a></li>
              <li><a href="" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-spotify-title font-bold text-sm uppercase tracking-button">Legal</h5>
            <ul className="text-spotify-silver text-sm space-y-2 mt-4 font-spotify">

              <li>
                <Link to="/privacy-policy" className="hover:text-nike-black transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-spotify-green transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-spotify-green transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-spotify-title font-bold text-sm uppercase tracking-button">Get In Touch</h5>
            <ul className="text-spotify-silver text-sm space-y-2 mt-4 font-spotify">
              <li className="flex items-center gap-2">📞 +91 9810499606</li>
              <li className="flex items-center gap-2">📧bright.Edu.2000@gmail.Com  </li>
              <li className="flex items-center gap-2">📍SAI City, Marroli, Marroli Road Near Solaka Station, Plawal-121105 (Hariyana ) </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-spotify-border mt-8 pt-6 text-center">
          <p className="text-spotify-silver text-xs font-bold uppercase tracking-wider">
            © 2026 Bright Education. All rights reserved. | MSME Certified · Govt. Recognized · Since 2015
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
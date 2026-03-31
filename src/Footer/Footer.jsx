import React from 'react';
import Facebook from '../assets/Facebook.png'
import Instagram from '../assets/Instagram.png'
import Twitter from '../assets/Twitter.png'


const Footer = () => {
    return (
        <footer className="bg-[#101727] text-white">
      <div className="max-w-[1100px] mx-auto px-4 py-12 sm:py-16">

        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:gap-20 lg:gap-32">

         
          <div className="flex-1 space-y-3">
            <h2 className="font-bold text-4xl">DigiTools</h2>
            <p className="text-gray-300">
              Premium digital tools for creators,<br />
              professionals, and businesses. Work smarter<br />
              with our suite of powerful tools.
            </p>
          </div>

          
          <div className="flex-1 space-y-3">
            <h4 className="text-xl font-medium">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

         
          <div className="flex-1 space-y-3">
            <h4 className="text-xl font-medium">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

         
          <div className="flex-1 space-y-3">
            <h4 className="text-xl font-medium">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Documentation</li>
              <li>Help center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

         
          <div className="flex-1 space-y-3">
            <h4 className="text-xl font-medium">Social Links</h4>
            <div className="flex space-x-3">
              <img src={Facebook} alt="Facebook logo" className="w-8 h-8" />
              <img src={Instagram} alt="Instagram logo" className="w-8 h-8" />
              <img src={Twitter} alt="Twitter logo" className="w-8 h-8" />
            </div>
          </div>

        </div>

        
        <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-12 pt-8 border-t border-gray-700 text-gray-400 gap-4 sm:gap-0">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <ul className="flex gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies</li>
          </ul>
        </div>

      </div>
    </footer>
    );
};

export default Footer;
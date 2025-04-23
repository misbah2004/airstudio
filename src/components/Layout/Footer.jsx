import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 p-10">
        {/* Logo and Description */}
        <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
          <img src="/assets/images/logoimg.png" alt="Logo" className="w-28 h-auto" />
          <p className="mt-6 text-[#858585] text-sm">
            A comprehensive e-commerce <br />
            platform tailored for small and <br />
            medium-sized businesses in Saudi <br />
            Arabia, offering seamless solutions <br />
            for fashion and digital products.
          </p>
        </div>

        {/* Product Links */}
        <div className="md:w-1/5 flex flex-col items-center md:items-start space-y-2">
          <h1 className="font-bold">Product</h1>
          <ul className="list-none text-center md:text-left space-y-1">
            <li>Home</li>
            <li>New In</li>
            <li>Trending</li>
            <li>Shop</li>
            <li>Categories</li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="md:w-1/5 flex flex-col items-center md:items-start space-y-2">
          <h1 className="font-bold">Company</h1>
          <ul className="list-none text-center md:text-left space-y-1">
            <li>About Us</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Legal Links + Social Icons */}
        <div className="md:w-1/5 flex flex-col items-center md:items-start space-y-2">
          <h1 className="font-bold">Legal</h1>
          <ul className="list-none text-center md:text-left space-y-1">
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <FaLinkedin />
            <FaXTwitter />
            <FaFacebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

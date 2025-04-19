import { CloudDownload, Search, ShoppingBag, Menu } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full shadow-sm">
      <nav className="w-full flex justify-between items-center py-5 px-4 md:px-10">
        {/* Logo */}
        <div>
          <img src="/assets/images/logoimg.png" alt="Logo" className="h-[20px]" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-[#707070] cursor-pointer">
          <Link to="/"><li className="hover:text-black">Home</li></Link>
          <Link to="/shop"><li className="hover:text-black">Shop</li></Link>
          <li className="hover:text-black">Store</li>
          <li className="hover:text-black">Contact Us</li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-5">
          <Search />
          <ShoppingBag />
          <img src="/assets/images/profileimg.jpg" alt="Profile" className="h-7 object-cover rounded-full" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-4 text-[#707070]">
            <Link to="/" onClick={() => setMenuOpen(false)}><li className="hover:text-black">Home</li></Link>
            <Link to="/shop" onClick={() => setMenuOpen(false)}><li className="hover:text-black">Shop</li></Link>
            <li className="hover:text-black">Store</li>
            <li className="hover:text-black">Contact Us</li>
            <div className="flex space-x-5 mt-4">
              <Search />
              <ShoppingBag />
              <img src="/assets/images/profileimg.jpg" alt="Profile" className="h-7 object-cover rounded-full" />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

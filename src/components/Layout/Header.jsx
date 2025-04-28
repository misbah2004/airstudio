import { CloudDownload, Search, ShoppingBag, Menu } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState(false);

const location = useLocation();

const paths = ["/detail","/rejister","/order","/ordertable","/chat"];
const isDetailPage = paths.includes(location.pathname);
const nav1 = isDetailPage ? "New In" : "Home";
const nav2 = isDetailPage ? "Trending" : "Shop";
const nav3 = isDetailPage ? "Shop" : "Store";
const nav4 = isDetailPage ? "Categories" : "ContactUs";
 

  return (
    <div className="w-full shadow-sm">
      <nav className="w-full flex justify-between items-center py-5 px-4 md:px-10">
        <div>
          <a href="/">
          <img
            src="/assets/images/logoimg.png"
            alt="Logo"
            className="h-[20px]"
          />
          </a>
        </div>
        <ul className="hidden md:flex space-x-8 text-[#707070] cursor-pointer">
          <Link to="/">
            <li className="hover:text-black">{nav1}</li>
          </Link>
          <Link to="/shop">
            <li className="hover:text-black">{nav2}</li>
          </Link>
          <Link to="/store">
            <li className="hover:text-black">{nav3}</li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-black">{nav4}</li>
          </Link>
        </ul>
        <div className="hidden md:flex space-x-5 items-center">
          {search && (
            <input
              type="text"
              placeholder="Search Anythik"
              className="w-40 h-8 px-2 border border-gray-300 rounded transition-all duration-300"
            />
          )}
          <Search
            onClick={() => setSearch(!search)}
            className="cursor-pointer"
          />
          <ShoppingBag />
          <img
            src="/assets/images/profileimg.jpg"
            alt="Profile"
            className="h-7 w-7 object-cover rounded-full"
          />
        </div>
        <div className="md:hidden flex items-center space-x-3">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-white z-50 px-4 pb-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-[#707070]">
            <Link to="/">
              <li className="hover:text-black">Home</li>
            </Link>
            <Link to="/shop">
              <li className="hover:text-black">Shop</li>
            </Link>
            <Link to="/store">
              <li className="hover:text-black">Store</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-black">Contact Us</li>
            </Link>
            <div className="flex space-x-5 mt-4">
              <Search />
              <ShoppingBag />
              <img
                src="/assets/images/profileimg.jpg"
                alt="Profile"
                className="h-7 object-cover rounded-full"
              />
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

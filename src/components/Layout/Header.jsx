import { CloudDownload, Search, ShoppingBag, Menu, Bookmark } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.allCart);
  // const cartQaount = items.length;
  const cartQaount = cart.length;

  // const location = useLocation();

  // const paths = ["/detail","/rejister","/order","/ordertable","/chat"];
  // const isDetailPage = paths.includes(location.pathname);
  const nav1 = "Home"; //isDetailPage ? "New In" : "Home";
  const nav2 = "Shop"; //isDetailPage ? "Trending" : "Shop";
  const nav3 = "Store"; //isDetailPage ? "Shop" : "Store";
  const nav4 = "ContactUs"; //isDetailPage ? "Categories" : "ContactUs";

  return (
    <div className="w-full fixed right-0 left-0 top-0 bg-white z-99">
      <nav className="w-full flex justify-between items-center py-4 px-4 md:px-10">
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
            <button onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-black">{nav1}</li>
            </button>
          </Link>
          <Link to="/shop">
            <button onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-black">{nav2}</li>
            </button>
          </Link>
          <Link to="/store">
            <button onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-black">{nav3}</li>
            </button>
          </Link>
          <Link to="/contact">
            <button onClick={() => window.scrollTo(0, 0)}>
              <li className="hover:text-black">{nav4}</li>
            </button>
          </Link>
        </ul>
        <div className="hidden md:flex space-x-5 items-center">
          <div className=""><Bookmark className=""/></div>
          {search && (
            <input
              type="text"
              placeholder="Search Anythik"
              className="w-40 h-8 px-2 border border-gray-300 rounded transition-all"
            />
          )}
          <Search
            onClick={() => setSearch(!search)}
            className="cursor-pointer"
          />
          <div className="relative">
            <Link to="/cart">
              <ShoppingBag className="w-6 h-6 text-black" />
              {cartQaount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  {cartQaount}
                </span>
              )}
            </Link>
          </div>
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
            <div className="flex space-x-5 mt-4">
              <Search />
              <div className="relative">
                <Link to="/cart">
                  <ShoppingBag className="w-6 h-6 text-black" />
                  {cartQaount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                      {cartQaount}
                    </span>
                  )}
                </Link>
              </div>
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

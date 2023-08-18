import { AiOutlineClose } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";

import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header role="banner" className="common">
      <div className="wrapper">
        <Link
          role="branding"
          to="/"
          className="relative z-20 text-xl font-bold text-accent-900"
        >
          Travelopia
        </Link>
        <nav
          role="navigation"
          className={`navigations header_nav ${
            isMenuVisible ? "" : "hidden md:block"
          }`}
        >
          <ul className="menu">
            <li>
              <Link className="text-accent-900" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-white" to="/">
                Our Brands
              </Link>
            </li>
            <li className="relative user">
              <button className="">
                <img
                  className="w-12 h-12 rounded-full object-cover hidden md:block"
                  src="/images/sophia.jpeg"
                  alt="sophia"
                  width="48"
                  height="48"
                />
              </button>
              {/* User Menu */}
              <div role="user-info" className="user-menu">
                <ul className="user-menu__wrapper">
                  <li className="py-2 flex items-center">
                    <strong>Sophia Tondon</strong>
                  </li>
                  <li className="py-2">
                    <span>Dharamshala, HP</span>
                  </li>
                  <li className="py-2">
                    <time dateTime="2023-08-28">28th Aug 2023</time>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        {/* Menu Icon to display and hide Navigation menu for mobiles */}
        <div className="md:hidden">
          <button
            rel="button"
            className={`${isMenuVisible ? "hidden" : "inline-block"}`}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <CgMenuRight className="text-3xl text-theme-900 font-bold" />
          </button>
          <button
            role="button"
            className={`${
              isMenuVisible ? "inline-block" : "hidden"
            } relative z-10`}
            onClick={() => setIsMenuVisible(!isMenuVisible)}
          >
            <AiOutlineClose className="text-3xl text-theme-900 font-bold" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

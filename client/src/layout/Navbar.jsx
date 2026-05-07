import { useEffect, useState } from "react";
import { Menu, Search, UserRound } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <header
  className={`fixed left-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "top-0 bg-white shadow-md py-2"
      : "top-10 bg-transparent py-4"
  }`}
>
      <div className="max-w-7xl mx-auto px-4 animate__animated animate__zoomIn">

        <div className="navbar p-0 min-h-0">

          {/* LEFT */}
          <div className="navbar-start gap-2">

            {/* MOBILE MENU */}
            <div className="dropdown lg:hidden">
              <label tabIndex={0} className="btn btn-ghost">
                <Menu />
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white rounded-box w-64 gap-2"
              >
                <li><a>DESTINATION</a></li>
                <li><a>COURSES</a></li>
                <li><a>VISA PROCESS</a></li>
                <li><a>SCHOLARSHIPS</a></li>
                <li><a>ABOUT US</a></li>
                <li><a>CONTACT</a></li>
              </ul>
            </div>

            {/* LOGO */}
            <button
              className={`bg-primary grid place-content-center rounded-xl rounded-br-[85px] shadow-lg transition-all duration-300 ${
                scrolled
                  ? "w-[180px] h-[60px]"
                  : "w-[230px] h-[75px]"
              }`}
            >
              <img
                src={logo}
                className="w-full h-auto object-contain p-2"
                alt="logo"
              />
            </button>
          </div>

          {/* CENTER MENU */}
          <div className="navbar-center hidden lg:flex">

            <ul
              className={`menu menu-horizontal gap-6 font-semibold transition-all duration-300 ${
                scrolled ? "text-black" : "text-secondary"
              }`}
            >
              <li><a>DESTINATION</a></li>
              <li><a>COURSES</a></li>
              <li><a>VISA PROCESS</a></li>
              <li><a>SCHOLARSHIPS</a></li>
              <li><a>ABOUT US</a></li>
              <li><a>CONTACT</a></li>
            </ul>

          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-3">

            <button className="hidden sm:flex bg-primary text-white rounded-full px-5 py-3 items-center gap-2 hover:scale-105 transition-all duration-300">
              <Search size={18} />
              <span className="text-sm">Search</span>
            </button>

            <button className="bg-secondary text-white rounded-full px-5 py-3 flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <UserRound size={18} />
              <span className="text-sm hidden sm:block">Login</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
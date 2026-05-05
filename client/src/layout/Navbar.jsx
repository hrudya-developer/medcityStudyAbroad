import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto max-lg:collapse rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />

        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>

        <div
          className={`collapse-title pe-4 navbar transition-all duration-300 ${
            scrolled ? "min-h-[70px]" : "min-h-[95px]"
          }`}
        >
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              ☰
            </label>

            <button
              className={`bg-primary grid place-content-center p-2 rounded-lg rounded-br-[85px] shadow-lg transition-all duration-300 ${
                scrolled ? "w-[190px] h-[60px]" : "w-[240px] h-[75px]"
              }`}
            >
              <img src={logo} className="w-full h-auto" alt="logo" />
            </button>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 flex gap-8 font-noto font-semibold transition-colors duration-300 ${
                scrolled ? "text-black" : "text-secondary"
              }`}
            >
              <li>DESTINATION</li>
              <li>COURSES</li>
              <li>VISA PROCESS</li>
              <li>SCHOLARSHIPS</li>
              <li>ABOUT US</li>
              <li>CONTACT</li>
            </ul>
          </div>

          <div className="navbar-end flex flex-shrink gap-3">
            <span className="text-xl p-2 bg-primary text-white rounded-full cursor-pointer">
              <Search />
            </span>

            <button className="bg-secondary text-white py-2 px-4 rounded-full">
              Login
            </button>
          </div>
        </div>

        <div className="collapse-content lg:hidden bg-white">
          <ul className="menu">
            <li><button>Item 1</button></li>
            <li><button>Parent</button></li>
            <li><button>Item 3</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
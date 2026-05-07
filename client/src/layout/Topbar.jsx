import { Briefcase, Calendar, Newspaper } from "lucide-react";
import React, { useEffect, useState } from "react";

const Topbar = () => {
  const [showTopbar, setShowTopbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowTopbar(false); // hide on scroll down
      } else {
        setShowTopbar(true); // show on scroll up
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`w-full bg-white z-50 my-5 transition-transform duration-300 ${
    showTopbar ? "translate-y-0" : "-translate-y-full"
  }`}
    >
      <div className="text-secondary text-center text-xs flex gap-5 max-w-7xl mx-auto px-5 justify-end items-center animate__animated animate__zoomIn">

        <p className="text-black flex items-center gap-2">
          <Newspaper className="text-primary" size={16} />
          News & Articles
        </p>

        <p className="text-black flex items-center gap-2">
          <Calendar className="text-primary" size={16} />
          Events
        </p>

        <p className="text-black flex items-center gap-2">
          <Briefcase className="text-primary" size={16} />
          Careers
        </p>

      </div>
    </section>
  );
};

export default Topbar;
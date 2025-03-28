import { useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // // Prevent scrolling when menu is open
    // if (!isMenuOpen) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "auto";
    // }
  };
  return (
    <>
      <header className="h-fit z-50 py-2 border-b border-black/4  fixed inset-0 w-full bg-[#F0FDFF]  px-5 lg:px-7 xl:px-10">
        <div className="flex items-center justify-between 2xl:container 2xl:mx-auto">
          <div>
            <NavLink to="/">
              <img
                src="https://res.cloudinary.com/dpupnibml/image/upload/v1743108386/HDI_Logo_wxasb0.png"
                className="w-14 md:w-12 xl:w-18 h-8.5 md:h-7 xl:h-10"
                alt="hdi logo"
              />
            </NavLink>
          </div>

          <button onClick={toggleMenu} className="" aria-label="Toggle menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6 text-[#105418]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <button className="font-cabin hover:ring-1 hover:ring-offset-2 hover:ring-[#105418] transition-colors duration-500 hover:bg-[#105418]/90 cursor-pointer py-2 xl:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#105418] text-center">
            Get In Touch
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[#105418] flex flex-col items-center justify-center transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-16">
          <img
            src="/HDI-Logo.png"
            alt="Antler logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        <nav className="flex flex-col items-center gap-8 text-white text-xl">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/contact">Contact</NavLink>

          <button className="font-cabin hover:ring-1 hover:ring-offset-2 hover:ring-[#9cb8a0] transition-colors duration-500 hover:bg-[#9cb8a0]/90 cursor-pointer py-2 xl:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#9cb8a0] text-center">
            Get In Touch
          </button>
        </nav>
      </div>
    </>
  );
}

export default Header;

import { NavLink } from "react-router";

function Header() {
  return (
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

          <button>
            <NavLink
              to="/contact"
              className="font-cabin hover:ring-1 hover:ring-offset-2 hover:ring-[#105418] transition-colors duration-500 hover:bg-[#105418]/90 cursor-pointer py-2 xl:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#105418] text-center"
            >
              Get In Touch
            </NavLink>
          </button>
        </div>
      </header>
  );
}

export default Header;

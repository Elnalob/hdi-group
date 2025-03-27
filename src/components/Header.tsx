import { NavLink } from "react-router";

function Header() {
  return (
    <header className="h-fit z-50 py-2 border-b border-black/4 flex items-center justify-between fixed inset-0 w-full bg-[#F0FDFF] 2xl:container 2xl:mx-auto px-5 lg:px-7 xl:px-10">
      {/* <h1 className="uppercase cursor-pointer font-sora text-xl xl:text-2xl italic text-[#105418] font-bold tracking-[1px]">
        hdi.
      </h1> */}
      <div>
        <NavLink to="/">
          <img src="/src/assets/images/HDI-Logo.png" className="w-14 md:w-12 xl:w-14 h-8.5 md:h-7 xl:h-10" />
        </NavLink>
      </div>

      <button className="font-cabin cursor-pointer py-2 xl:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#105418] text-center">
        Get In Touch
      </button>
    </header>
  );
}

export default Header;

import React from "react";

function Header() {
  return (
    <header className="h-fit z-50 py-2  flex items-center justify-between fixed inset-0 w-full bg-[#F0FDFF] 2xl:container 2xl:mx-auto px-10">
      <h1 className="uppercase cursor-pointer font-sora text-2xl italic text-[#105418] font-bold tracking-[1px]">
        hdi.
      </h1>

      <nav>
        <ul></ul>
      </nav>

      <button className="font-cabin cursor-pointer py-3 text-lg  px-8 rounded-2xl bg-[#105418] text-center text-[#f0faf4]">
        Get In Touch
      </button>
    </header>
  );
}

export default Header;

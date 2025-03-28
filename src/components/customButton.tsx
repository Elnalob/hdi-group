import { NavLink } from "react-router";

function CustomButton() {
  return (
    <button>
      <NavLink
        to="/contact"
        className="font-cabin cursor-pointer py-2 xl:py-3 text-[15px] lg:text-base xl:text-lg  px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#105418] text-center"
      >
        Get In Touch
      </NavLink>
    </button>
  );
}

export default CustomButton;

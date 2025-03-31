import { NavLink } from "react-router";
import { Mail, MapPin, Phone } from "../svg";

function HeroSection() {
  const contactData = [
    {
      icon: <Mail />,
      title: "Email Us At",
      info: "contact@hdigrouphq.org",
    },
    {
      icon: <MapPin />,
      title: "Our Location",
      info: " 22 Coker road Ilupeju Industrial Estate, off Town planning Way , Lagos.",
    },
    {
      icon: <Phone />,
      title: "Call Us At",
      info: "+2348137812748",
    },
  ];

  return (
    <section className=" bg-[#f0fff4] pt-14 md:pt-10 lg:pt-12">
      <div className="2xl:container 2xl:mx-auto bg-[#f0fff4]  xl:mt-[68px] p-5 lg:p-7 xl:p-10 space-y-6 md:space-y-5 lg:space-y-6 xl:space-y-8">
        <div className=" text-center">
          <h2 className="text-black text-[30px] md:text-4xl lg:text-5xl xl:text-[64px] capitalize font-semibold leading-8 md:leading-11 lg:leading-14 xl:leading-18.5 md:-tracking-[1px] lg:-tracking-[1.5px]">
            Let's connect and{" "}
            <span className="text-[#105418] ">Create impact</span>
          </h2>
          <p className="pt-4 md:pt-2.5 xl:pt-4 text-base lg:text-lg xl:text-xl font-cabin text-[#333333] leading-6.5 md:leading-5.5 lg:leading-6 xl:leading-7.5 w-[90vw] md:w-[34vw] lg:w-[36vw] xl:w-[40vw] 2xl:w-[40%] mx-auto">
            Reach out to HDI Group to explore partnerships, business
            opportunities, and sustainable solutions.
          </p>
        </div>

        <div className="grid place-content-center">
          <button>
            <NavLink
              to="/contact"
              className="font-cabin cursor-pointer py-3 md:py-2 xl:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-6 md:px-5 lg:px-6 xl:px-8 rounded-2xl bg-[#105418] text-center hover:ring-1 hover:ring-offset-2 hover:ring-[#105418] transition-colors duration-500 hover:bg-[#105418]/90 focus:ring-1 focus:ring-offset-2 focus:ring-[#105418] focus:bg-[#105418]/90"
            >
              Get In Touch
            </NavLink>
          </button>
        </div>

        <div className="p-2 lg:p-3 xl:p-5  md:w-[83vw] 2xl:w-[83%] mx-auto">
          <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-2 lg:gap-3 xl:gap-5 ">
            {contactData.map((data, index) => {
              return (
                <div
                  className="shadow-2xl border border-black/10 rounded-[40px] px-8 lg:px-12 xl:px-15 py-8 md:py-5 lg:py-7 xl:py-10 text-center bg-white"
                  key={index + data.title}
                >
                  <div className="space-y-2.5 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4">
                    <div className="space-y-6 md:space-y-4 lg:space-y-6 xl:space-y-8">
                      <div className="grid place-content-center">
                        {data.icon}
                      </div>
                      <h2 className="text-[20px] md:text-lg lg:text-[22px] xl:text-[28px] font-semibold text-center text-black">
                        {data.title}
                      </h2>
                    </div>
                    <p className="text-base md:text-[15px] lg:text-base xl:text-lg leading-4 lg:leading-4.5 xl:leading-[22.32px] font-cabin text-[#0f0f0f]">
                      {data.info}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

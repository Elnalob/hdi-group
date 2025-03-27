import { Mail, MapPin, Phone } from "../svg";

function HeroSection() {
  const contactData = [
    {
      icon: <Mail />,
      title: "Email Us At",
      info: "contact@yoursite.com",
    },
    {
      icon: <MapPin />,
      title: "Our Location",
      info: "224, Hill Road Avenue",
    },
    {
      icon: <Phone />,
      title: "Call Us At",
      info: "+1 123456789X",
    },
  ];

  return (
    <section className="mt-[68px] p-10 space-y-8 bg-[#f0fff4]">
      <div className=" text-center">
        <h2 className="text-black text-[64px] capitalize font-semibold leading-18.5 -tracking-[1.5px]">
          Let's connect and{" "}
          <span className="text-[#105418] ">Create impact</span>
        </h2>
        <p className="pt-4 text-xl font-cabin text-[#333333] leading-7.5 w-[40vw] mx-auto">
          Reach out to HDI Group to explore partnerships, business
          opportunities, and sustainable solutions.
        </p>
      </div>

      <button className="font-cabin  text-lg font-semibold leading-6 bg-[#105418] py-3 px-8 rounded-2xl cursor-pointer grid place-self-center">
        Get In Touch
      </button>

      <div className="p-5 w-[83vw] mx-auto">
        <div className="grid grid-cols-3 gap-x-5 ">
          {contactData.map((data, index) => {
            return (
              <div
                className="border border-black/10 rounded-[40px] px-15 py-10 text-center bg-white"
                key={index + data.title}
              >
                <div className="space-y-4">
                  <div className="space-y-8">
                    <div className="grid place-content-center">{data.icon}</div>
                    <h2 className="text-[28px] font-semibold text-center text-black">
                      {data.title}
                    </h2>
                  </div>
                  <p className="text-lg leading-[22.32px] font-cabin text-[#0f0f0f]">
                    {data.info}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

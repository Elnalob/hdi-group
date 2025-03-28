import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function About() {
  const aboutData = [
    {
      title: "Cotton & Ginnery",
      description:
        "Transforming raw cotton into high-quality fibers for global textile production.",
    },
    {
      title: "Spinning & Textile",
      description:
        "Innovating with eco-friendly processes to produce premium textile materials.",
    },
    {
      title: "Garment Production",
      description:
        "Creating high-quality, sustainable fashion while empowering local industries.",
    },
    {
      title: "Agribusiness",
      description:
        "Strengthening food systems, improving supply chains, and supporting sustainable farming.",
    },
    {
      title: "Logistics",
      description:
        "Streamlining supply chains with efficient, sustainable transport solutions.",
    },
    {
      title: "Education & Workforce Development",
      description:
        "Investing in skills training, knowledge transfer, and industry-driven learning.",
    },
    {
      title: "Green Energy",
      description:
        "Powering industries with renewable energy to reduce environmental footprints.",
    },
  ];

  const container = useRef(null);
  const pinElement = useRef(null);
  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: pinElement.current,
        start: "top top",
        // end: ".scrolling-element top",
        endTrigger: ".scrolling-element",
        end: "bottom 55%",
        pin: true,
        pinSpacing: false,
        markers: true,
      });
    },
    { scope: container }
  );
  return (
    <section
      className=" flex flex-col md:flex-row items-start justify-between md:gap-x-10 lg:gap-x-14 xl:gap-x-20 px-5 md:px-0 py-5 lg:py-7 xl:py-10 md:w-[83vw] mx-auto"
      ref={container}
    >
      <div
        className="space-y-5 lg:space-y-6 xl:space-y-8 md:w-[65vw] lg:w-[50vw] md:pt-8 lg:pt-11 xl:pt-15"
        ref={pinElement}
      >
        <div>
          <h2 className="text-black text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.3px]  lg:-tracking-[2.24px] leading-12 lg:leading-14 xl:leading-17">
            About HDI
          </h2>
          <p className="text-[#333333] pt-2 md:pt-2.5 xl:pt-4  font-cabin  leading-6.5 md:leading-5.5 lg:leading-6 xl:leading-7.5 text-base lg:text-lg xl:text-xl">
            HDi is a{" "}
            <strong className="">
              leading innovator in Nigeria’s cotton and textile sector,{" "}
            </strong>
            dedicated to sustainability, industrial growth, and economic
            transformation. We are revolutionizing the cotton-to-textile value
            chain with cutting-edge technology, strategic partnerships, and a
            commitment to global standards.
          </p>
        </div>

        <button className="font-cabin cursor-pointer py-3 md:py-2.5 lg:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-6 md:px-5 lg:px-6.5 xl:px-8 rounded-2xl bg-[#105418] text-center">
          Get In Touch
        </button>
      </div>

      <div className="scrolling-element md:w-[50vw] md:max-w-[259.76px] lg:max-w-[396.65px] xl:max-w-[557.6px] space-y-5 lg:space-y-7 xl:space-y-10 pt-10 md:pt-5 lg:pt-7 xl:pt-10">
        {aboutData.map((data, index) => (
          <div
            key={index}
            className="space-y-3 md:space-y-2 lg:space-y-3 xl:space-y-5 p-6 md:p-5 lg:p-6 xl:p-8 bg-[#f0fff4] border border-black/10 rounded-[40px]"
          >
            <h3 className="font-semibold text-black text-[20px] md:text-lg lg:text-[22px] xl:text-[28px] -tracking-[1.6px] leading-6 lg:leading-7.5 xl:leading-9.5">
              {data.title}
            </h3>
            <p className="text-[#333333] text-base md:text-sm xl:text-base leading-5.5 md:leading-4.5 lg:leading-5 xl:leading-6.5">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

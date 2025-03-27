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
  return (
    <section className="flex items-start justify-between gap-x-20 py-10 w-[83vw] mx-auto">
      <div className="space-y-8 w-[50vw] pt-15">
        <div>
          <h2 className="text-black text-[56px] font-semibold -tracking-[2.24px] leading-17">
            About HDI
          </h2>
          <p className="text-[#333333] pt-4  font-cabin leading-7.5 text-xl">
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
        <button className="font-cabin  text-lg font-semibold leading-6 bg-[#105418] py-3 px-8 rounded-2xl cursor-pointer">
          Get In Touch
        </button>
      </div>

      <div className="space-y-10 pt-10">
        {aboutData.map((data, index) => (
          <div
            key={index}
            className="space-y-5 p-8 bg-[#f0fff4] border border-black/10 rounded-[40px]"
          >
            <h3 className="font-semibold text-black text-[28px] -tracking-[1.6px] leading-9.5">
              {data.title}
            </h3>
            <p className="text-[#333333] text-base leading-6.5">
              {data.description}
            </p>
            <button className="font-cabin  text-lg font-semibold leading-6 bg-[#105418] py-3 px-8 rounded-2xl cursor-pointer">
              Get In Touch
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

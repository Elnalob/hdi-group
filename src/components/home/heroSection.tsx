function HeroSection() {
  return (
    <section className="space-y-6 md:space-y-4 lg:space-y-6 xl:space-y-8 mt-14 md:mt-10 lg:mt-12 xl:mt-[68px] text-center p-5 lg:p-7 xl:p-10 bg-[#f0fff4]">
      <div className="space-y-2.5 md:space-y-1.5 lg:space-y-2.5 xl:space-y-4">
        <h1 className="text-black text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.5px] lg:-tracking-[2.6px] leading-8 md:leading-11 lg:leading-14 xl:leading-17">
          Driving Sustainable Growth Across Industries
        </h1>
        <p className="text-[#333333] tracking-normal leading-6.5 md:leading-5.5 lg:leading-6 xl:leading-7.5 text-base lg:text-lg xl:text-xl w-[85vw] md:w-[54.4vw] mx-auto font-normal font-cabin">
          From cotton to clean energy, HDI Group is shaping the future of
          sustainable industries while creating economic opportunities and
          driving social impact.
        </p>
      </div>

      <button className="font-cabin cursor-pointer py-3 md:py-2.5 lg:py-3 text-base md:text-[15px] lg:text-base xl:text-lg  px-6 md:px-5 lg:px-6.5 xl:px-8 rounded-2xl bg-[#105418] text-center">
        Get In Touch
      </button>

      <div className="w-[83vw] h-80 md:h-95 lg:h-110 xl:h-150 mx-auto">
        <img
          src="https://res.cloudinary.com/dpupnibml/image/upload/v1741845860/faqHeroBg_rnhtn9.jpg"
          alt=""
          className="object-center object-cover rounded-[40px] size-full"
        />
      </div>
    </section>
  );
}

export default HeroSection;

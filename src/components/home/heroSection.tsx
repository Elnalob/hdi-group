function HeroSection() {
  return (
    <section className="space-y-8 mt-[68px] px-10 text-center py-10 bg-[#f0fff4]">
      <div className="space-y-4">
        <h1 className="text-black text-[56px] font-semibold -tracking-[2.6px] leading-17">
          Driving Sustainable Growth Across Industries
        </h1>
        <p className="text-[#333333] tracking-normal leading-7.5 text-[20px] w-[54.4vw] mx-auto font-normal font-cabin">
          From cotton to clean energy, HDI Group is shaping the future of
          sustainable industries while creating economic opportunities and
          driving social impact.
        </p>
      </div>

      <button className="font-cabin  text-lg font-semibold leading-6 bg-[#105418] py-3 px-8 rounded-2xl cursor-pointer">
        Get In Touch
      </button>

      <div className="w-[83vw] h-150 mx-auto">
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

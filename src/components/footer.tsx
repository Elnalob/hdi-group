function Footer() {
  return (
    <footer className="bg-[#f0fff4] w-full pb-3 p-5 lg:p-7 xl:p-10">
      <section className="rounded-[40px] bg-[#105418] px-2 md:px-5 lg:px-7 xl:px-10 pt-8 md:pt-14 lg:pt-19 xl:pt-25 pb-2 lg:pb-2.5 xl:pb-4">
        <div className="md:w-[66.7vw] mx-auto text-center space-y-6 md:space-y-5 lg:space-y-6 xl:space-y-8">
          <div>
            <h1 className="text-[22px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.5px] lg:-tracking-[2.6px] leading-8 md:leading-11 lg:leading-14 xl:leading-[74px]">
              Let’s Build A Sustainable Future{" "}
              <br className="hidden md:block" /> Together
            </h1>

            <p className="pt-2 md:pt-2.5 xl:pt-4 font-cabin text-[15px] md:text-base lg:text-lg xl:text-[20px] leading-6.5 md:leading-5.5 lg:leading-6 xl:leading-7.5">
              Partner with HDI to drive impact in food, energy, agribusiness,
              and education.
            </p>
          </div>

          <button className="font-cabin text-base md:text-lg lg:text-xl xl:text-2xl font-semibold leading-6 bg-black py-3.5 xl:py-4 px-6 md:px-5 lg:px-6 xl:px-8 rounded-2xl cursor-pointer">
            Get in Touch
          </button>
          <p className="text-[15px] md:text-sm xl:text-base">
            HDI Group © 2025 • All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

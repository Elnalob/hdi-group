function Footer() {
  return (
    <footer className="bg-[#f0fff4] w-full pb-3 p-10">
      <section className="rounded-[40px] bg-[#105418] px-10 pt-25 pb-4">
        <div className="w-[66.7vw] mx-auto text-center space-y-8">
          <div>
            <h1 className="text-[56px] font-semibold -tracking-[2.6px] leading-[74px]">
              Let’s Build A Sustainable Future <br /> Together
            </h1>

            <p className="pt-4 font-cabin text-[20px] leading-7.5">
              Partner with HDI to drive impact in food, energy, agribusiness,
              and education.
            </p>
          </div>

          <button className="font-cabin  text-2xl font-semibold leading-6 bg-black py-4 px-8 rounded-2xl cursor-pointer">
            Get in Touch
          </button>

          <nav>
            <ul className="flex items-center justify-center [&_li]:p-2 gap-x-5 text-base font-medium">
              <li>FAQ'S</li>
              <li>Legal</li>
              <li>Pricing</li>
              <li>FAQ'S</li>
            </ul>
          </nav>
        </div>
      </section>
    </footer>
  );
}

export default Footer;

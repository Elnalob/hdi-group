function Goals() {
  return (
    <section className="pt-5 lg:pt-7 xl:pt-10 md:space-y-8 lg:space-y-11 space-y-15 px-5 md:px-0">
      <div className=" md:w-[41.7vw] mx-auto text-center space-y-2.5 lg:space-y-4 xl:space-y-6">
        <h2 className="text-black text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.3px]  lg:-tracking-[2.24px] leading-8 md:leading-10 lg:leading-13 xl:leading-17 capitalize">
          Our Commitment to a Sustainable Future
        </h2>
        <p className="text-[#333333] font-cabin leading-6.5 md:leading-5.5 lg:leading-6 xl:leading-7.5 text-base lg:text-lg xl:text-xl">
          Aligning with global goals to drive impact in food, energy,
          agribusiness, and education.
        </p>
      </div>

      <div className="md:w-[83vw] mx-auto">
        <div className="grid grid-cols-2 gap-10 ">
          <div className="space-y-10">
            <div className="rounded-3xl overflow-hidden border-2 border-red-900">
              <img
                src="/SDG 2.gif"
                className="w-full h-[400px] object-cover rounded-3xl overflow-hidden"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-red-900">
              <img
                src="/sdg 7.jpeg"
                className="w-full h-[500px] object-cover rounded-3xl overflow-hidden"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-red-900">
            <img
              src="/SDG 13.png"
              className="w-full h-[450px] object-cover rounded-3xl overflow-hidden"
              alt=""
            />
          </div>
          </div>

          <div className="space-y-10">
            <div className="rounded-3xl overflow-hidden border-2 border-red-900">
              <img
                src="/SDG 4.gif"
                className="w-full h-[500px] object-cover rounded-3xl overflow-hidden"
                alt=""
              />
            </div>

            <div className="rounded-3xl overflow-hidden border-2 border-red-900">
              <img
                src="/SDG 8.png"
                className="w-full h-[580px] object-cover rounded-3xl overflow-hidden"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Goals;

function PressRelease() {
  const supportingImages = [
    {
      src: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      caption: "Community members gathering for the HDI empowerment program launch"
    },
    {
      src: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      caption: "Agricultural training session with local farmers"
    },
    {
      src: "/IMG-20250924-WA0017.jpg",
      caption: "Community leaders and HDI team in formal meeting session"
    },
    {
      src: "/IMG-20250924-WA0013.jpg",
      caption: "HDI team members engaging with community under tent"
    },
    {
      src: "/IMG-20250924-WA0016.jpg",
      caption: "HDI representative addressing the community at the event"
    },
    {
      src: "/IMG-20250924-WA0011.jpg",
      caption: "HDI team and community members group photo at the venue"
    },
    {
      src: "/IMG-20250924-WA0012.jpg",
      caption: "HDI team member with traditional leader during community visit"
    }
  ];

  return (
    <section className="py-5 lg:py-7 xl:py-10 px-5 md:px-0 2xl:container 2xl:mx-auto">
      <div className="md:w-[83vw] 2xl:w-[83%] mx-auto space-y-8 lg:space-y-12 xl:space-y-16">
        {/* Press Release Header */}
        <div className="space-y-3 lg:space-y-4 xl:space-y-6">
          <h2 className="text-black text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.3px] lg:-tracking-[2.24px] leading-8 md:leading-11 lg:leading-14 xl:leading-17">
            HDI Empowers 200 Residents in Imobi, Acquires Land for Cotton–Textile–Garment Hub
          </h2>
          <p className="text-[#666666] font-cabin text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-8">
            Oki-Igbode Village, Imobi, Ijebu East LGA, Ogun State — 20 September 2025
          </p>
        </div>

        {/* Main Header Image */}
        <div className="w-full h-80 md:h-95 lg:h-110 xl:h-150 overflow-hidden rounded-[40px] shadow-lg">
          <img
            src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="HDI community empowerment initiative in Imobi"
            className="object-center object-cover size-full"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 lg:space-y-8 xl:space-y-10">
          <div className="space-y-4 lg:space-y-5 xl:space-y-6">
            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              HDI Group has successfully launched a comprehensive empowerment program benefiting 200 residents in Oki-Igbode Village, Imobi, while simultaneously acquiring strategic land for the development of a state-of-the-art cotton-textile-garment manufacturing hub.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              The initiative, which represents a significant milestone in HDI's commitment to sustainable community development, focuses on skills training, agricultural modernization, and youth empowerment. Participants will receive comprehensive training in cotton farming, textile production, and garment manufacturing, creating a complete value chain that benefits the entire community.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              The newly acquired land will serve as the foundation for HDI's integrated cotton-textile-garment hub, designed to process raw cotton from local farmers into finished textile products. This vertical integration approach ensures maximum value retention within the community while creating sustainable employment opportunities.
            </p>
          </div>

          {/* CEO Quote - Blockquote */}
          <blockquote className="bg-[#f0fff4] border-l-4 border-[#105418] p-6 lg:p-8 xl:p-10 rounded-r-2xl my-8 lg:my-10 xl:my-12">
            <p className="text-[#333333] font-cabin text-lg lg:text-xl xl:text-2xl leading-7 lg:leading-8 xl:leading-9 italic mb-4">
              "This initiative represents more than just economic development—it's about empowering communities to become self-sufficient while contributing to Nigeria's industrial growth. By investing in local talent and infrastructure, we're building a sustainable future that benefits everyone."
            </p>
            <cite className="text-[#105418] font-semibold text-base lg:text-lg xl:text-xl">
              — CEO, HDI Group
            </cite>
          </blockquote>

          <div className="space-y-4 lg:space-y-5 xl:space-y-6">
            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              The program includes specialized training modules covering modern agricultural techniques, quality control in textile production, sustainable farming practices, and entrepreneurship development. Participants will also receive ongoing mentorship and access to microfinance opportunities to support their individual business ventures.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              Local government officials and community leaders have praised HDI's holistic approach to development, which prioritizes environmental sustainability alongside economic growth. The project is expected to create over 500 direct and indirect jobs within the first two years of operation.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-6.5 md:leading-6 lg:leading-7 xl:leading-8">
              Construction of the cotton-textile-garment hub is scheduled to begin in early 2026, with the first phase of operations expected to commence by the end of the same year. The facility will incorporate cutting-edge technology and sustainable practices, positioning it as a model for similar developments across Nigeria.
            </p>
          </div>
        </div>

        {/* Supporting Images Grid */}
        <div className="space-y-6 lg:space-y-8 xl:space-y-10">
          <h3 className="text-black text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold -tracking-[1px] lg:-tracking-[1.5px] leading-7 lg:leading-8 xl:leading-9">
            Program Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 xl:gap-10">
            {supportingImages.map((image, index) => (
              <div key={index} className="space-y-3 lg:space-y-4">
                <div className="h-60 lg:h-70 xl:h-72 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="object-center object-cover size-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#666666] font-cabin text-sm lg:text-base leading-5 lg:leading-6">
                  {image.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center py-8 lg:py-12 xl:py-16 bg-[#f0fff4] rounded-[40px] px-6 lg:px-8 xl:px-12">
          <p className="text-black text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold -tracking-[1px] lg:-tracking-[1.5px] leading-7 lg:leading-8 xl:leading-9">
            HDI remains committed to empowering farmers, youth, and families across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PressRelease;
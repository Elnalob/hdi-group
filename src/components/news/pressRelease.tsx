function PressRelease() {
  const supportingImages = [
    {
      src: "/IMG-20250924-WA0017.jpg",
      caption: "Community youths at the empowerment programme"
    },
    {
      src: "/IMG-20250924-WA0013.jpg",
      caption: "HDI team members engaging with community "
    },
    {
      src: "/IMG-20250924-WA0016.jpg",
      caption: "HDI representative with the commmunity leaders"
    },
    {
      src: "/IMG-20250924-WA0011.jpg",
      caption: "HDI CEO addressing the community during the program"
    },
    {
      src: "/IMG-20250924-WA0012.jpg",
      caption: "HDI team member with traditional leader during community empowerment"
    },
    {
      src: "/IMG-20250924-WA0018.jpg",
      caption: "Community gathering with children"
    },
    {
      src: "/IMG-20250924-WA0019.jpg",
      caption: "Imobi traditional leader and HDI team"
    },
    {
      src: "/IMG-20250924-WA0014.jpg",
      caption: "HDI team discussing with community youth"
    },
    {
      src: "/IMG-20250924-WA0015.jpg",
      caption: " "
    }
  ];

  return (
    <section className="py-5 lg:py-7 xl:py-10 px-5 md:px-0 2xl:container 2xl:mx-auto">
      <div className="md:w-[83vw] 2xl:w-[83%] mx-auto space-y-8 lg:space-y-12 xl:space-y-16">
        {/* Press Release Header */}
        <div className="space-y-3 lg:space-y-4 xl:space-y-6">
          <h2 className="text-black text-[26px] md:text-[34px] lg:text-[42px] xl:text-[56px] font-semibold md:-tracking-[1.3px] lg:-tracking-[2.24px] leading-8 md:leading-[44px] lg:leading-[56px] xl:leading-[68px]">
            HDI Empowers Imobi Community, Secures Land for Cotton–Textile–Garment Hub
          </h2>
          <p className="text-[#666666] font-cabin text-base lg:text-lg xl:text-xl leading-6 lg:leading-7 xl:leading-8">
            Oki-Igbode Village, Imobi, Ijebu East LGA, Ogun State — 20 September 2025
          </p>
        </div>

        {/* Main Header Image */}
        <div className="w-full h-80 md:h-[380px] lg:h-[440px] xl:h-[600px] overflow-hidden rounded-[40px] shadow-lg">
          <img
            src="/IMG-20250924-WA0010.jpg"
            alt="HDI community empowerment initiative in Imobi"
            className="object-center object-cover size-full"
          />
        </div>

        {/* Article Content */}
        <div className="space-y-6 lg:space-y-8 xl:space-y-10">
          <div className="space-y-4 lg:space-y-5 xl:space-y-6">
            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-[26px] md:leading-6 lg:leading-7 xl:leading-8">
              House of Dorcas Integrated Services (HDI), through its Dorcas All Lives Matter Foundation, has empowered over 200 residents of Oki-Igbode Village in a community programme promoting farming, youth development, and responsible citizenship.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-[26px] md:leading-6 lg:leading-7 xl:leading-8">
              Themed "Great Farmers, Great Nation", the engagement encouraged farmers to embrace cotton cultivation ahead of HDI's next planting season. Children welcomed the team with songs as the community was sensitised on farming opportunities and government support.
            </p>

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-[26px] md:leading-6 lg:leading-7 xl:leading-8">
              HDI has also acquired 20 hectares for its upcoming Cotton–Textile–Garment (CTG) factories and 4,000 hectares for cotton cultivation — reinforcing Ogun State's industrialisation drive and creating sustainable jobs.
            </p>
          </div>

          {/* CEO Quote - Blockquote */}
          <blockquote className="bg-[#f0fff4] border-l-4 border-[#105418] p-6 lg:p-8 xl:p-10 rounded-r-2xl my-8 lg:my-10 xl:my-12">
            <p className="text-[#333333] font-cabin text-lg lg:text-xl xl:text-2xl leading-7 lg:leading-8 xl:leading-9 italic mb-4">
              "Farmers are the backbone of national growth. HDI is committed to empowering them as true heroes of sustainable development"
            </p>
            <cite className="text-[#105418] font-semibold text-base lg:text-lg xl:text-xl">
              — CEO, HDI Group
            </cite>
          </blockquote>

          <div className="space-y-4 lg:space-y-5 xl:space-y-6">

            <p className="text-[#333333] font-cabin text-base lg:text-lg xl:text-xl leading-[26px] md:leading-6 lg:leading-7 xl:leading-8">
              The Dorcas All Lives Matter Foundation will continue leading HDI's community initiatives, ensuring farmers and families remain central to its vision.
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
                <div className="h-60 lg:h-[280px] xl:h-[288px] overflow-hidden rounded-2xl shadow-lg">
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
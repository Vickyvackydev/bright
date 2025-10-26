import { BRIGHT__ } from "../assets";

function AboutMe() {
  return (
    <div
      className="flex flex-col font-geist md:flex-row lg:px-20 px-5 pb-20 pt-32 items-center justify-center min-h-screen py-12"
      style={{
        background:
          "radial-gradient(82.26% 196.87% at 50% 49.96%, #D6E5F3 1.53%, #A9B7C7 100%)",
      }}
    >
      <div className=" flex flex-col gap-y-5 justify-center lg:w-[50vw] w-full">
        <div className="flex items-center gap-3">
          <img
            src={BRIGHT__}
            className="lg:w-[125.52px] w-[65px] rounded-full lg:h-[125.52px] h-[65px]"
            alt=""
          />
          <span className="lg:text-[34.12px] text-lg font-semibold text-[#222222]">
            Hi 👋,
          </span>
        </div>
        <p className="font-normal text-black opacity-60 text-sm">
          I’m Bright Emmanuel Afia, a multidisciplinary creative based in Lagos,
          Nigeria. I’ve spent the last 8 years building something I’m really
          proud of, a career that sits at the intersection of storytelling,
          design, and strategy. My journey started in the entertainment
          industry, where I fell in love with video content creation. There’s
          something magical about capturing moments and turning them into
          stories that resonate. But curiosity led me to explore new
          territories, and I found myself diving deep into the tech and crypto
          space, a world where innovation happens at lightning speed and every
          brand has a story worth telling. Over the years, I’ve worn many hats.
          I create video content that educates and entertains, from explainer
          videos to lifestyle pieces that connect with real people. I design
          visuals that capture attention and communicate ideas clearly. And
          through it all, I’ve developed a strategic marketing mindset that
          helps brands not just show up, but truly connect with their audiences.
        </p>
        <p className="font-normal text-black opacity-60 text-sm">
          I’ve been fortunate to collaborate with incredible brands across
          different industries including Pvzzle, BingX and Tether, and my work
          has been featured in leading African publications such as Legit.ng.
          Over the years, I’ve helped content reach over 10 million views and
          supported numerous brands in building a strong presence across Nigeria
          and Africa.
        </p>
        <p className="font-normal text-black opacity-60 text-sm">
          With 8 years in content creation, 5 years in design and 3 years in
          marketing, I bring a unique perspective to every project. I understand
          that great marketing isn’t just about pretty visuals or catchy copy,
          it’s about creating experiences that feel authentic and valuable. So
          whether you’re looking to launch something new, tell your story
          differently or connect with audiences in meaningful ways, I’m here to
          help make it happen.
        </p>
        <p className="font-normal text-black opacity-60 text-sm">
          Let’s create something amazing together.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;

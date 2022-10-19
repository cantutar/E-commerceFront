import Image from "next/image";
import HeroImage from "../../public/assets/images/hero.jpg";

function Hero() {
  return (
    <section className="w-full h-[50vh]">
      <div className="z-10 absolute flex flex-col px-4 md:px-8 pt-2 md:pt-8 lg:pt-12">
        <h1 className="text-2xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-white">
          Power Hungery Card is arrived
        </h1>
        <h3 className="md:text-2xl lg:text-3xl xl:text-6xl 2xl:text-7xl text-white mt-2 md:mt-6 lg:mt-10 2xl:mt-20">
          It will heat your house only starting from
          <span className="p-1">1599$</span>
        </h3>
        <button className="mt-5 lg:mt-20 bg-[rgb(82,160,13)] p-2 lg:p-4 xl:text-2xl text-white w-24 lg:w-44 xl:w-1/3 2xl:text-5xl 2xl:mt-40">
          Get now
        </button>
      </div>
      <div className="relative z-0 block">
        <Image
          src={HeroImage}
          alt="Hero image"
          layout="responsive"
          width="1920"
          height="1080"
          priority={true}
        />
      </div>
    </section>
  );
}

export default Hero;

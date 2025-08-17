import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/landing-pic.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <span className="text-white absolute z-10 top-[50px] border border-white px-2 rounded-md py-1 text-sm">
        For student an restaurant
      </span>

      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Hungry? Order Campus Meals in Minutes with QwikChow!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience the convenience of secure payments, real-time tracking, and
          hassle-free cancellations. With QwikChow, your meals are just a few
          taps away!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-green-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            Order Now
          </button>
          <button className="border border-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-700 transition">
            Register Your Restaurant
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

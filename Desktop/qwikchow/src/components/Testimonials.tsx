import type { FC } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Femi Bernard",
    role: "Mechanical Engineering - LAUTECH",
    text: "Amazing job these guys are doing there. I used to have issues with food deliveries taking too long, but QwikChow’s helped solve the issue. I’m easily giving 5 stars!",
    stars: 5,
    image: "/femi.jpg",
  },
  {
    name: "Sam Gabriel",
    role: "Computer Science - LAUTECH",
    text: "Found the exact hostel fridge I needed at half the price of a new one. Lifesaver!",
    stars: 5,
    image: "/sam.jpg",
  },
  {
    name: "Emm. Titus",
    role: "Mechanical Engineering - LAUTECH",
    text: "The verification system makes me feel safe meeting other students on campus.",
    stars: 5,
    image: "/emm.jpg",
  },
];

const Testimonials: FC = () => {
  return (
    <section className="bg-black text-white py-16" id="testimonials">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Ladokites Are Saying
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col gap-4"
          >
            {/* User Image */}
            <div className="flex items-center gap-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 italic mt-2">“{t.text}”</p>

            {/* Rating */}
            <div className="flex mt-2">
              {Array.from({ length: t.stars }).map((_, idx) => (
                <Star
                  key={idx}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

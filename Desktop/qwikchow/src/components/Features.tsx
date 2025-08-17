import type { FC } from "react";
import { ShieldCheck, Clock, Smartphone, Truck } from "lucide-react";

const features = [
  {
    icon: <Smartphone className="w-10 h-10 text-green-700" />,
    title: "Browse Menus & Order Fast",
    desc: "Explore hundreds of campus restaurants and place orders in under 2 minutes",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-600" />,
    title: "Pay Securely",
    desc: "Choose from M-Pesa, Flutterwave, Paystack, or card payments",
  },
  {
    icon: <Clock className="w-10 h-10 text-red-600" />,
    title: "Cancel Anytime in 1 Minute",
    desc: "Changed your mind? Cancel within 60 seconds for a full refund",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Live Order Tracking",
    desc: "Track your food from kitchen to your door with real-time updates",
  },
];

const Features: FC = () => {
  return (
    <section className="py-16 bg-gray-50 text-center" id="features">
      <h2 className="text-3xl font-bold mb-4">Why Students Love QwikChow</h2>
      <p className="text-gray-600 mb-12">
        Built for campus life - fast, secure, and student-friendly
      </p>
      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
          >
            {f.icon}
            <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
            <p className="text-gray-500 mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

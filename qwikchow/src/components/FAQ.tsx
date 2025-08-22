import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How do I verify my LAUTECH student status?",
    a: "Simply sign up with your official LAUTECH email address (@student.lautech.edu.ng). We'll send a verification link to complete your registration.",
  },
  {
    q: "Is there a fee to use Ladokart?",
    a: "No, Ladokart is completely free for LAUTECH students to use. We may introduce premium features in the future, but the core marketplace will always remain free.",
  },
  {
    q: "How do I ensure safe transactions?",
    a: "We recommend meeting in public, well-lit areas on campus during daylight hours. Ladokart provides designated safe exchange zones across campus for your convenience.",
  },
  {
    q: "What items can I list for sale?",
    a: "You can list textbooks, electronics, hostel items, and other student essentials. Prohibited items include anything illegal or against LAUTECH policies.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 px-6" id="faq">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 text-center mb-12">
        Everything you need to know about Ladokart
      </p>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 cursor-pointer"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">{faq.q}</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {openIndex === i && <p className="text-gray-600 mt-2">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;

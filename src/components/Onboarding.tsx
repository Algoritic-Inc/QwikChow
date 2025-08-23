import React from "react";

export const Onboarding: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--brand-green)] text-white">
      {/* Left - Welcome Image */}
      <div className="md:w-1/2 flex items-center justify-center p-4">
        <img
          src="/verification-success.jpg"
          alt="Welcome"
          className="rounded-2xl object-cover w-full h-80 md:h-full"
        />
      </div>

      {/* Right - Content */}
      <div className="md:w-1/2 flex flex-col justify-center p-6 space-y-6 relative">
        {/* Skip */}
        <button className="absolute top-4 right-6 text-[var(--brand-yellow)] text-sm cursor-pointer">
          Skip
        </button>

        {/* Headings */}
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold">New to QwikChow?</h1>
          <p className="text-gray-200">
            How would you love to use QwikChow? <br />
            Select from below how you would love to use QwikChow
          </p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {/* Student */}
          <div className="flex items-center bg-[var(--brand-green)] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/email-confirmation.jpg"
              alt="Student"
              className="w-32 h-24 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold">As a Student</h2>
              <p className="text-sm text-gray-300">
                I’d love to order meals from choice restaurants
              </p>
            </div>
          </div>

          {/* Restaurant */}
          <div className="flex items-center bg-[var(--brand-green)] rounded-2xl overflow-hidden shadow-md">
            <img
              src="/landing-pic.jpg"
              alt="Restaurant"
              className="w-32 h-24 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold">As a Restaurant / Business</h2>
              <p className="text-sm text-gray-300">
                We’d love to place meals as available for order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

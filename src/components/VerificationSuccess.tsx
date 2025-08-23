import React from "react";
import { Link } from "react-router-dom";

export const VerificationSuccess: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--brand-green)] justify-center">
      <div className="md:w-1/2 flex flex-col items-center justify-center p-6 space-y-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Verification Successful!
        </h1>
        <Link to="/dashboard">
          <button className="bg-[var(--brand-yellow)] text-[var(--brand-green)] font-semibold px-6 py-3 rounded-md">
            Continue
          </button>
        </Link>
      </div>

      <div className="md:w-1/2 md:flex items-center justify-center p-6 hidden ">
        <img
          src="/verification-success.jpg"
          alt="Verification Success"
          className="rounded-2xl object-cover w-full h-80 md:h-full"
        />
      </div>
    </div>
  );
};

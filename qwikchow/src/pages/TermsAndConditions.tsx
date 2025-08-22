import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions: React.FC = () => {
  const [consent1, setConsent1] = useState<boolean>(false);
  const [consent2, setConsent2] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("acceptedTerms", "false");
  }, []);

  const handleContinue = () => {
    localStorage.setItem("acceptedTerms", "true");
    navigate("/sign-up");
  };

  return (
    <div className="min-h-screen bg-[var(--brand-green)] text-white flex items-center justify-center px-5 py-8">
      <div className="bg-[var(--brand-green)] w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">QwikChow</h1>
          <h2 className="text-yellow-400 font-semibold mb-6">
            Terms and Conditions
          </h2>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin lectus nibh
              id integer vestibulum sapien. Semper facilisis libero amet arcu
              vitae blandit vel pulvinar.
            </p>
            <p>
              Habitant eget dictum lacus mi aliquam viverra cursus aliquet
              fames. Eu nulla sollicitudin pharetra non pellentesque auctor id
              egestas. Nisl ultrices ut sit phasellus egestas pretium in sed. At
              ut bibendum mi sit cursus. Amet montes quis vestibulum auctor
              bibendum in varius amet. Aliquam nunc sed integer magna ut
              facilisis. Velit dui lorem massa dapibus viverra mattis molestie
              ultrices.
            </p>
          </div>
        </div>

        <div className="md:border-l md:border-gray-600 md:pl-8">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur. Sollicitudin lectus nibh
              id integer vestibulum sapien. Semper facilisis libero amet arcu
              vitae blandit vel pulvinar.
            </p>
            <p>
              Habitant eget dictum lacus mi aliquam viverra cursus aliquet
              fames. Eu nulla sollicitudin pharetra non pellentesque auctor id
              egestas. Nisl ultrices ut sit phasellus egestas pretium in sed. At
              ut bibendum mi sit cursus. Amet montes quis vestibulum auctor
              bibendum in varius amet.
            </p>
          </div>

          {/* Checkboxes */}
          <div className="mt-6 space-y-3">
            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={consent1}
                onChange={() => setConsent1(!consent1)}
                className="w-4 h-4 mt-1 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
              />
              <span className="text-sm">
                I consent to the terms and conditions by{" "}
                <span className="font-semibold">QwikChow</span>
              </span>
            </label>

            <label className="flex items-start space-x-2">
              <input
                type="checkbox"
                checked={consent2}
                onChange={() => setConsent2(!consent2)}
                className="w-4 h-4 mt-1 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
              />
              <span className="text-sm">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          {/* Continue Button */}
          <button
            disabled={!(consent1 && consent2)}
            onClick={handleContinue}
            className={`mt-8 w-full py-3 rounded-md font-semibold shadow-md transition text-[var(--brand-light-green)] ${
              consent1 && consent2
                ? "bg-yellow-400 text-[var(--brand-green)] hover:bg-yellow-500"
                : "bg-gray-500 text-white cursor-not-allowed"
            }`}
          >
            Continue
          </button>
          {!(consent1 && consent2) && (
            <button
              onClick={() => navigate(-1)}
              className="mt-4 w-full py-3 rounded-md font-semibold shadow-md bg-[var(--brand-yellow)] text-[var(--brand-light-green)] transition"
            >
              Go Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

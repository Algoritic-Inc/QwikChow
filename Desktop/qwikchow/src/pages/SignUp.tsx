import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasAccepted = localStorage.getItem("acceptedTerms") === "true";
    if (hasAccepted) setAcceptedTerms(true);
  }, []);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      return toast.error("Please fill in all fields");
    }

    if (!acceptedTerms)
      return toast.error("You must agree to the Terms & Conditions");

    navigate(`/signup/verify-email?email=${encodeURIComponent(email)}`);

    // I WILL UNCOMMENT AFTER BACKEND IMPLEMENTATION
    // setLoading(true);

    // try {
    //   const res = await fetch("/api/sign-up", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       firstName,
    //       lastName,
    //       email,
    //       password,
    //     }),
    //   });

    //   const data = await res.json();

    //   if (!res.ok) {
    //     return toast.error(data.message || "Something went wrong");
    //   }

    //   // backend sends a token after signup
    //   if (data.token) {
    //     localStorage.setItem("authToken", data.token);
    //   }

    //   // Navigate to verify email page (or dashboard if auto-verified)
    //   navigate(`/signup/verify-email?email=${encodeURIComponent(email)}`);
    // } catch (err) {
    //   console.error(err);
    //   toast.error("Failed to sign up. Try again later.");
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--brand-green)] ">
      {/* Left Side - Image & Welcome */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="relative hidden md:block">
          <img
            src="/email-confirmation.jpg"
            alt="Delivery"
            className="rounded-2xl object-cover w-full h-80 md:h-full"
          />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl font-semibold">Welcome to QwikChow!</h2>
            <p className="text-sm">
              Get your food delivered to you in minutes and in a few clicks.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Create an account
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 p-3 rounded-md bg-[var(--brand-light-green)] text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="flex-1 p-3 rounded-md bg-[var(--brand-light-green)] text-white"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-[var(--brand-light-green)] text-white"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-[var(--brand-light-green)] text-white"
          />

          <div className="flex items-center text-sm text-white">
            <input
              type="checkbox"
              className="mr-2"
              checked={acceptedTerms}
              onChange={(e) => setAcceptedTerms(e.target.checked)}
            />
            <span>
              I agree to the{" "}
              <Link
                to="/terms&conds"
                className="underline text-[var(--brand-yellow)]"
              >
                Terms & Conditions
              </Link>
            </span>
          </div>

          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full bg-[var(--brand-yellow)] text-[var(--brand-green)] font-semibold py-3 rounded-md disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Continue"}
          </button>

          {/* Sign In link */}
          <p className="text-center text-white text-sm">
            Already have an account?{" "}
            <Link
              to="/sign-in"
              className="underline text-[var(--brand-yellow)]"
            >
              Sign In
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 text-white text-sm">
            <div className="flex-1 border-t border-gray-500"></div>
            <span>or continue with</span>
            <div className="flex-1 border-t border-gray-500"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <button className="w-full border rounded-md py-3 flex items-center justify-center gap-2 text-white">
              <img src="/google.png" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="w-full border rounded-md py-3 flex items-center justify-center gap-2 text-white">
              <img src="/apple.png" alt="Apple" className="w-5 h-5" />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

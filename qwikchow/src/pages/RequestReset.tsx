import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const RequestReset: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!regex.test(email)) return toast.error("Invalid email");
    navigate(
      `/reset-password/confirm-email?email=${encodeURIComponent(email)}`
    );
    setLoading(true);

    // I WILL UNCOMMENT AFTER BACKEND IMPLEMENTATION

    // try {
    //   const res = await fetch("/api/request-reset", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email }),
    //   });

    //   if (!res.ok) throw new Error("Failed to send reset email");

    //   navigate(
    //     `/reset-password/confirm-email?email=${encodeURIComponent(email)}`
    //   );
    // } catch (err: any) {
    //   toast.error(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-green)] px-4 sm:px-6">
      <form className="max-w-md w-full bg-[var(--brand-green)] p-8 rounded-xl shadow-xl flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center">
          Forgot Password
        </h1>

        <p className="text-white text-sm mb-4 text-center">
          Enter your email to receive a password reset link
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 mb-6 rounded-md bg-[var(--brand-light-green)] text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1 transition"
        />

        <button
          disabled={!regex.test(email) || loading}
          onClick={handleSubmit}
          className={`w-full py-3 rounded-md font-semibold transition-all duration-200 ${
            regex.test(email)
              ? "bg-yellow-400 text-[var(--brand-green)] hover:bg-yellow-500 shadow-md hover:shadow-lg"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? "Sending..." : "Continue"}
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-white underline hover:text-yellow-300 transition-colors"
          >
            &larr; Back to login
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestReset;

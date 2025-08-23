import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ConfirmEmail: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [loading] = useState(false); // Removed setLoading since it's unused
  const [timer, setTimer] = useState(60); // 60 seconds countdown
  const navigate = useNavigate();
  const email = new URLSearchParams(useLocation().search).get("email") || "";
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Mask email for privacy
  const maskEmail = (email: string) => {
    const [user, domain] = email.split("@");
    if (user.length <= 2) return `*${user[1]}@${domain}`;
    return `${user[0]}${"*".repeat(user.length - 2)}${user.slice(
      -1
    )}@${domain}`;
  };

  // Countdown timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!value && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Changed from FormEvent to MouseEvent
  const handleVerify = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const code = otp.join("");
    if (code.length !== otp.length)
      return toast.error("Please enter the complete OTP.");

    if (code === "12345") {
      toast.success(`Verified for ${email}!`);
      navigate(`/reset-password/new?token=dataresttoken`);
    }

    // I WILL UNCOMMENT AFTER BACKEND IMPLEMENTATION

    // setLoading(true);
    // try {
    //   const res = await fetch("/api/verify-otp", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ email, code }),
    //   });

    //   const data = await res.json();
    //   if (!res.ok) throw new Error(data.message || "Invalid OTP");

    //   navigate(`/reset-password/new?token=${data.resetToken}`);
    // } catch (err: any) {
    //   toast.error(err.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  const handleResend = async () => {
    if (timer > 0) return;
    // I WILL UNCOMMENT AFTER BACKEND IMPLEMENTATION

    try {
      const res = await fetch("/api/resend-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to resend OTP");

      toast.success("OTP resent successfully!");
      setTimer(60); // reset timer
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-green)] p-6">
      <div className="w-full max-w-md bg-[var(--brand-green)] rounded-2xl shadow-lg p-8  flex flex-col items-center">
        {/* Go Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 text-sm text-white underline hover:text-gray-200 transition-colors"
        >
          &larr; Go Back
        </button>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3 text-white">Confirm Email</h1>
        <p className="mb-6 text-center text-white/90">
          Enter the OTP sent to <strong>{maskEmail(email)}</strong>
        </p>
        
        {/* OTP Inputs */}
        <div className="flex justify-center gap-3 mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={digit}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="w-14 h-14 md:w-16 md:h-16 text-center rounded-xl bg-[var(--brand-light-green)] text-white text-2xl font-bold shadow-inner focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-all"
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          type="button" // Added type="button"
          disabled={loading}
          onClick={handleVerify} // Now this matches the correct event type
          className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-[var(--brand-green)] font-semibold rounded-xl shadow-lg hover:scale-105 transform transition"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        {/* Resend OTP */}
        <div className="mt-4 text-center">
          <button
            disabled={timer > 0}
            onClick={handleResend}
            className={`text-sm underline flex items-center justify-center mx-auto gap-1 ${
              timer > 0 ? "text-gray-400 cursor-not-allowed" : "text-white"
            }`}
          >
            <span className="material-icons text-sm">refresh</span>
            Resend OTP {timer > 0 && `(${timer}s)`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmail;
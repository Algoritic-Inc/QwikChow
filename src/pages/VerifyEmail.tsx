import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { VerificationSuccess } from "../components/VerificationSuccess";

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email") || "your email";
  const navigate = useNavigate();

  const [otpValues, setOtpValues] = useState<string[]>(Array(5).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const [isVerified, setIsVerified] = useState(false);

  // Mask email
  const maskedEmail = email.replace(
    /^(.{1}).*(@.*)$/,
    (_, firstChar, domain) => `${firstChar}******${domain}`
  );

  // Handle otp input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otpValues];
      newOtp[index] = value;
      setOtpValues(newOtp);

      if (value && index < otpValues.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  // Handle otp backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // OTP Verification
  const handleVerify = async () => {
    const otp = otpValues.join("");
    if (otp.length < otpValues.length) {
      toast.error("Please enter the complete OTP.");
      return;
    }

    if (otp === "12345") {
      toast.success(`OTP verified for ${email}!`);
      setIsVerified((is) => !is);
    } else {
      toast.error("Invalid OTP.");
    }

    // will be active after backend implimentation
    // try {
    //   const res = await fetch("/api/verify-otp", {
    //     method: "POST",
    //     body: JSON.stringify({ email, otp }),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   const data = await res.json();

    //   if (data.success) {
    //     toast.success(`OTP verified for ${email}!`);
    //     setIsVerified((is) => !is);
    //     setTimeout(() => navigate("/dashboard"), 3000);
    //   } else {
    //     toast.error(data.message || "Invalid OTP.");
    //   }
    // } catch {
    //   toast.error("Something went wrong. Try again.");
    // }
  };

  // Timer for resend
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleResend = () => {
    toast(`OTP resent to ${email}`);
    setTimer(60);
    setOtpValues(Array(5).fill(""));
    inputRefs.current[0]?.focus();

    //actual resend api here
  };

  if (isVerified) {
    return <VerificationSuccess />;
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--brand-green)] items-center justify-center">
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md text-center space-y-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-8 left-4 text-sm text-white underline hover:text-gray-200 transition-colors"
          >
            &larr; Go Back
          </button>

          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Verify your Email
          </h1>
          <p className="text-sm text-gray-200">
            To confirm your Email, enter the code we sent to{" "}
            <span className="font-medium">{maskedEmail}</span>.
          </p>
          <p className="text-sm text-gray-400">
            Be careful not to share the code with anyone.
          </p>

          {/* OTP Inputs */}
          <div className="flex justify-center gap-3">
            {otpValues.map((val, i) => (
              <div key={i}>
                <label htmlFor={`otp-${i}`} className="sr-only">
                  OTP Digit {i + 1}
                </label>
                <input
                  id={`otp-${i}`}
                  type="text"
                  maxLength={1}
                  value={val}
                  disabled={isVerified}
                  ref={(el) => {
                    if (el) inputRefs.current[i] = el;
                  }}
                  onChange={(e) => handleChange(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  className="w-12 h-12 md:w-14 md:h-14 text-center text-lg font-bold rounded-md bg-[var(--brand-light-green)] text-white"
                />
              </div>
            ))}
          </div>

          {/* Resend + Timer */}
          <div className="flex justify-between text-sm text-gray-300">
            <button
              onClick={handleResend}
              className="underline disabled:opacity-50"
              disabled={timer > 0 || isVerified}
            >
              Resend Code
            </button>
            <span>Sent 0:{timer.toString().padStart(2, "0")}</span>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={isVerified}
            className="w-full bg-yellow-400 text-[var(--brand-green)] font-semibold py-3 rounded-md disabled:opacity-50"
          >
            Verify
          </button>
        </div>
      </div>

      <div className="md:w-1/2  items-center justify-center p-6 hidden md:flex">
        <img
          src="/email-confirmation.jpg"
          alt="Verify"
          className="rounded-2xl object-cover w-full h-80 md:h-full"
        />
      </div>
    </div>
  );
};

export default VerifyEmail;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      toast.error("Please fill in both email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success(`Welcome back, ${data.user?.name || "User"}!`);

        // Store token according to "Remember me"
        if (rememberMe) {
          localStorage.setItem("token", data.token);
        } else {
          sessionStorage.setItem("token", data.token);
        }

        navigate("/dashboard");
      } else {
        toast.error(data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[var(--brand-green)] items-center justify-center">
      {/* Left - Sign In Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-3xl md:text-3xl font-bold text-white text-center md:text-left">
            Sign in to your account
          </h1>

          {/* Email + Password */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md bg-[var(--brand-light-green)] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-4 py-3 rounded-md bg-[var(--brand-light-green)] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-300">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="accent-[var(--brand-yellow)]"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <Link
              to="/reset-password"
              className="text-[var(--brand-yellow)] underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            disabled={loading}
            className={`w-full bg-[var(--brand-yellow)] text-[var(--brand-green)] font-semibold py-3 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-300 text-center">
            Don’t have an account?{" "}
            <Link
              to="/sign-up"
              className="text-[var(--brand-yellow)] underline"
            >
              Sign Up
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <hr className="flex-1 border-gray-600" />
            <span className="text-gray-400 text-sm">or continue with</span>
            <hr className="flex-1 border-gray-600" />
          </div>

          {/* Social Login */}
          <div className="flex flex-col md:flex-row gap-3">
            <button className="flex-1 border border-gray-400 rounded-md py-3 flex items-center justify-center gap-2 text-white cursor-pointer">
              <img src="/google.png" alt="Google" className="w-5 h-5" />
              Google
            </button>
            <button className="flex-1 border border-gray-400 rounded-md py-3 flex items-center justify-center gap-2 text-white cursor-pointer">
              <img src="/apple.png" alt="Apple" className="w-5 h-5" />
              Apple
            </button>
          </div>
        </div>
      </div>

      {/* Right - Image */}
      <div className="md:w-1/2 md:flex items-center justify-center p-6 hidden">
        <img
          src="/email-confirmation.jpg"
          alt="Sign In"
          className="rounded-2xl object-cover w-full h-80 md:h-full"
        />
      </div>
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const ChangePassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = new URLSearchParams(useLocation().search).get("token") || "";

  const handleChangePassword = async () => {
    if (password !== confirm) return toast.error("Password not match");

    if (password === confirm) {
      toast.success("Password changed successfully!");
      navigate("/sign-in");
    }

    // I WILL UNCOMMENT AFTER BACKEND IMPLEMENTATION

    setLoading(true);
    try {
      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      if (!res.ok) throw new Error("Failed to reset password");

      toast.success("Password changed successfully!");
      navigate("/sign-in");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-green)] p-6">
      <div className="max-w-md w-full bg-[var(--brand-green)] p-8 rounded-2xl shadow-xl flex flex-col">
        <h1 className="text-3xl font-bold mb-6 text-white text-center">
          Change Password
        </h1>

        <input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 mb-6 rounded-xl bg-[var(--brand-light-green)] text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-inner transition"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className="w-full px-5 py-4 mb-6 rounded-xl bg-[var(--brand-light-green)] text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-inner transition"
        />

        <button
          disabled={!password || password !== confirm || loading}
          onClick={handleChangePassword}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-transform ${
            password && confirm && password === confirm
              ? "bg-gradient-to-r from-yellow-400 to-yellow-500 text-[var(--brand-green)] hover:scale-105"
              : "bg-gray-500 text-gray-300 cursor-not-allowed"
          }`}
        >
          {loading ? "Saving..." : "Continue"}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;

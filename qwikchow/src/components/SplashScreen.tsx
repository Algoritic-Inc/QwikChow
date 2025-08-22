import React from "react";

export const SplashScreen: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--brand-green)]">
      <h1 className="text-white font-bold text-4xl md:text-6xl tracking-wide">
        QwikChow
      </h1>
    </div>
  );
};

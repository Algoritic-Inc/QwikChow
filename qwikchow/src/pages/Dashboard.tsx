import { Loader2 } from "lucide-react";
import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--brand-green)] text-center p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Dashboard Coming Soon
      </h1>
      <p className="text-lg text-gray-200 max-w-md">
        We’re working hard to bring you an amazing dashboard experience. Stay
        tuned — exciting features are on the way!
      </p>
      <div className="mt-6 animate-bounce text-[var(--brand-yellow)] text-5xl">
        <Loader2 className="mt-6 h-12 w-12 animate-spin text-[var(--brand-yellow)]" />
      </div>
    </div>
  );
};

export default Dashboard;

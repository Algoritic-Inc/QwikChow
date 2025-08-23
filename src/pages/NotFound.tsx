import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--brand-green)]">
      <h1 className="text-9xl font-bold text-white  mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-white mb-2">Page Not Found</h2>
      <p className="text-white mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-[var(--brand-yellow)] text-[var(--brand-light-green)] rounded-lg hover:bg-blue-700 transition-colors"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;

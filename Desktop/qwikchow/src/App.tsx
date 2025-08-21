import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { Suspense, lazy } from "react";
import { Toaster } from "sonner";
import { SplashScreen } from "./components/SplashScreen";

const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const TermsAndConditions = lazy(() => import("./pages/TermsAndConditions"));
const VerifyEmail = lazy(() => import("./pages/VerifyEmail"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const RequestReset = lazy(() => import("./pages/RequestReset"));
const ChangePassword = lazy(() => import("./pages/ChangePassword"));
const ConfirmEmail = lazy(() => import("./pages/ConfirmEmail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const LandingPage = lazy(() => import("./LandingPage"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<SplashScreen />}>
        <Routes>
          <Route path="/" element={<Navigate to="/landing-page" replace />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/terms&conds" element={<TermsAndConditions />} />
          <Route path="/signup/verify-email" element={<VerifyEmail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset-password" element={<RequestReset />} />
          <Route
            path="/reset-password/confirm-email"
            element={<ConfirmEmail />}
          />
          <Route path="/reset-password/new" element={<ChangePassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          richColors
          toastOptions={{
            classNames: {
              success: "bg-green-500 text-white font-bold rounded-lg shadow-lg",
              error: "bg-red-500 text-white font-bold rounded-lg shadow-lg",
              default: "bg-gray-700 text-white rounded-md",
            },
          }}
        />
      </Suspense>
    </Router>
  );
};

export default App;
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

import { HeroSection } from './components/sections/HeroSection';
import { ProblemSolution } from './components/sections/ProblemSolution';
import { HowItWorks } from './components/sections/HowItWorks';
import { CTABanner } from './components/sections/CTABanner';
import { BlogList } from './components/sections/BlogList';
import { BlogPost } from './components/sections/BlogPost';
import { TrustBanner } from './components/sections/TrustBanner';
import { RegisterModal } from './components/modals/RegisterModal';
import { LoginModal } from './components/modals/LoginModal';
import { useState } from 'react';

import { DashboardLayout } from './components/dashboard/layout/DashboardLayout';
import { RiskAssessmentPage } from './components/pages/dashboard/RiskAssessmentPage';
import { RiskProfilePage } from './components/pages/dashboard/RiskProfilePage';
import { PricingPage } from './components/pages/dashboard/PricingPage';
import { OnboardingPortfolioPage } from './components/pages/dashboard/OnboardingPortfolioPage';
import { KYCOnboardingPage } from './components/pages/dashboard/KYCOnboardingPage';
import { PortfolioResultPage } from './components/pages/dashboard/PortfolioResultPage';
import { PortfolioBuilderPage } from './components/pages/dashboard/PortfolioBuilderPage';

const VerifyEmail = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="text-center p-8 bg-white rounded-2xl shadow-xl max-w-md w-full">
      <h1 className="text-2xl font-bold mb-4">Verify Your Email</h1>
      <p className="text-slate-600 mb-6">We've sent a verification code to your email. Please enter it here to continue.</p>
      <input type="text" maxLength={6} placeholder="000000" className="w-full h-12 text-center text-3xl font-bold tracking-widest border rounded-xl mb-6" />
      <button className="w-full h-12 bg-blue-600 text-white font-bold rounded-xl">Verify & Continue</button>
    </div>
  </div>
);

function HomePage() {
  return (
    <div className="pb-0">
      <HeroSection />
      <ProblemSolution />
      <HowItWorks />
      <CTABanner />
      <TrustBanner />
    </div>
  );
}

function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openRegister = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(true);
  };

  const openLogin = () => {
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className={isRegisterOpen || isLoginOpen ? 'overflow-hidden' : ''}>
      <Routes>
        {/* Landing Page Routes with Main Layout */}
        <Route path="/" element={
          <Layout onSignUpClick={openRegister} onLoginClick={openLogin}>
            <HomePage />
          </Layout>
        } />
        <Route path="/blog" element={
          <Layout onSignUpClick={openRegister} onLoginClick={openLogin}>
            <BlogList />
          </Layout>
        } />
        <Route path="/blog/:slug" element={
          <Layout onSignUpClick={openRegister} onLoginClick={openLogin}>
            <BlogPost />
          </Layout>
        } />

        {/* Auth Routes */}
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Dashboard Routes with Dashboard Layout */}
        <Route path="/dashboard" element={<Navigate to="/dashboard/risk-assessment" replace />} />
        <Route path="/dashboard/risk-assessment" element={
          <DashboardLayout>
            <RiskAssessmentPage />
          </DashboardLayout>
        } />
        <Route path="/dashboard/risk-profile" element={
          <DashboardLayout>
            <RiskProfilePage />
          </DashboardLayout>
        } />
        <Route path="/dashboard/pricing" element={
          <DashboardLayout>
            <PricingPage />
          </DashboardLayout>
        } />
        <Route path="/onboarding/portfolio" element={
          <OnboardingPortfolioPage />
        } />
        <Route path="/onboarding/kyc" element={
          <KYCOnboardingPage />
        } />
        <Route path="/dashboard/portfolio-result" element={
          <PortfolioResultPage />
        } />
        <Route path="/dashboard/portfolio" element={
          <DashboardLayout>
            <PortfolioBuilderPage />
          </DashboardLayout>
        } />
      </Routes>

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLoginClick={openLogin}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSignUpClick={openRegister}
      />
    </div>
  );
}

export default App;
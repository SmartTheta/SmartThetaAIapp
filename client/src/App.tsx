import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { SmartThetaIndex } from './components/sections/SmartThetaIndex';
import { PortfolioScanner } from './components/sections/PortfolioScanner';
import { Products } from './components/sections/Products';
import { Pricing } from './components/sections/Pricing';
import { HeroSection } from './components/sections/HeroSection';
import { WorldIndices } from './components/sections/WorldIndices';
import { BlogList } from './components/sections/BlogList';
import { BlogPost } from './components/sections/BlogPost';
import { AIShowcase } from './components/sections/AIShowcase';

function HomePage() {
  return (
    <div className="pb-20">
      {/* Top Section: Hero Text + SmartTheta Index with Light Blue Background */}
      <div className="w-full bg-blue-50/50 border-b border-blue-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="lg:h-[500px]">
              <HeroSection />
            </div>
            <div className="lg:h-[500px]">
              <SmartThetaIndex />
            </div>
          </div>
        </div>
      </div>

      {/* AI Showcase Section */}
      <AIShowcase />

      {/* Second Section: World Indices + Market Scanner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:h-[600px]">
            <WorldIndices />
          </div>
          <div className="lg:h-[600px]">
            <PortfolioScanner />
          </div>
        </div>
      </div>

      <Products />
      <Pricing />
    </div>
  );
}

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Layout>
  );
}

export default App;

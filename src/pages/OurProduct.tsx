import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Github, Twitter, Zap, Shield, Users, BarChart } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

const OurProduct = () => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <nav className="flex items-center justify-between p-3 sm:p-4 lg:p-6 max-w-7xl mx-auto">
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-x-2 hover:opacity-80 transition-opacity"
          >
            <Hexagon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <span className="font-bold text-lg sm:text-xl">InnovateLab</span>
          </button>
          
          <div className="flex items-center gap-x-4 sm:gap-x-8">
            <div className="flex gap-x-4 sm:gap-x-8">
              <Link to="/about-us" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
                About Us
              </Link>
              <Link to="/our-product" className="text-sm font-semibold text-primary">
                Our Product
              </Link>
            </div>
            <ModeToggle />
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
          {/* Hero Section */}
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">Our AI-Powered Platform</h1>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI tools designed to streamline workflows, enhance productivity, and drive innovation across your organization.
            </p>
          </div>

          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="AI Platform Dashboard" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 sm:mb-6">Revolutionary AI Platform</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                Our platform combines machine learning, natural language processing, and advanced analytics to provide you with tools that adapt to your business needs and grow with your success.
              </p>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">Lightning-fast processing and real-time insights</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">Enterprise-grade security and compliance</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">Seamless team collaboration features</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <BarChart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">Advanced analytics and reporting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8 sm:mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI-Powered Automation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Automate repetitive tasks and workflows with intelligent AI agents that learn from your patterns.</p>
              </div>
              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <BarChart className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Smart Analytics</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Get actionable insights from your data with our advanced machine learning algorithms.</p>
              </div>
              <div className="p-4 sm:p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Team Collaboration</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Work together seamlessly with real-time collaboration tools and shared workspaces.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        logo={<Hexagon className="h-10 w-10" />}
        brandName="InnovateLab"
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/about-us", label: "About Us" },
          { href: "/our-product", label: "Our Product" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms of Service" },
        ]}
        copyright={{
          text: "© 2024 InnovateLab",
          license: "All rights reserved",
        }}
      />
    </div>
  );
};

export default OurProduct;


import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Github, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
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
              <a href="/about-us" className="text-sm font-semibold text-primary">
                About Us
              </a>
              <a href="/our-product" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
                Our Product
              </a>
            </div>
            <ModeToggle />
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 sm:mb-8">About InnovateLab</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 sm:space-y-6">
                <p className="text-base sm:text-lg">
                  We are InnovateLab, a cutting-edge technology company dedicated to transforming ideas into reality through the power of artificial intelligence.
                </p>
                <p className="text-sm sm:text-base">
                  Founded in 2023, our mission is to harness the latest advancements in AI to streamline workflows, boost productivity, and unlock new possibilities for businesses of all sizes. We believe that innovation should be accessible to everyone, not just tech giants.
                </p>
                <p className="text-sm sm:text-base">
                  Our team consists of passionate engineers, designers, and AI specialists who work tirelessly to create solutions that make a real difference in people's daily lives. From small startups to enterprise corporations, we've helped over 10,000 businesses transform their operations.
                </p>
                <div className="mt-6 sm:mt-8">
                  <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">Our Values</h2>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base"><strong>Innovation First:</strong> We constantly push boundaries to deliver cutting-edge solutions</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base"><strong>User-Centric:</strong> Every feature we build is designed with our users' needs in mind</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base"><strong>Transparency:</strong> We believe in open communication and honest business practices</span>
                    </li>
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base"><strong>Sustainability:</strong> We're committed to building a better future for everyone</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-fade-in order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Team working on innovative solutions" 
                className="rounded-lg shadow-2xl w-full h-auto"
              />
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

export default AboutUs;

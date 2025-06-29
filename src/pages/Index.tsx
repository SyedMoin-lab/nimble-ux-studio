
import { HeroLanding } from "@/components/ui/hero-1";
import { FileUploadSection } from "@/components/file-upload-section";
import { Footer } from "@/components/ui/footer";
import { ModeToggle } from "@/components/mode-toggle";
import type { HeroLandingProps } from "@/components/ui/hero-1";
import { Hexagon, Github, Twitter } from "lucide-react";

const Index = () => {
  const heroProps: HeroLandingProps = {
    title: "Transform Your Ideas into Reality with AI-Powered Innovation",
    description: "Harness the power of artificial intelligence to streamline your workflow, boost productivity, and unlock new possibilities for your business.",
    
    announcementBanner: {
      text: "🚀 New AI Features Released!",
      linkText: "Explore AI Assistant",
      linkHref: "/our-product"
    },
    
    callToActions: [
      { 
        text: "Start Free Trial", 
        href: "#upload", 
        variant: "primary" 
      },
      { 
        text: "Watch Demo", 
        href: "/our-product", 
        variant: "secondary" 
      }
    ],
    
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.7 0.15 280)",
      to: "oklch(0.6 0.2 320)"
    },
    
    className: "min-h-screen"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Theme toggle in top right */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      
      {/* Hero Section */}
      <HeroLanding {...heroProps} />
      
      {/* File Upload Section */}
      <div id="upload">
        <FileUploadSection />
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

export default Index;

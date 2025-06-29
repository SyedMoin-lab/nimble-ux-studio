
import { HeroLanding } from "@/components/ui/hero-1";
import type { HeroLandingProps } from "@/components/ui/hero-1";
import { Hexagon } from "lucide-react";

export const HeroSection = () => {
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
        text: "Upload Now", 
        href: "#upload", 
        variant: "primary" 
      },
      { 
        text: "Our Products", 
        href: "/our-product", 
        variant: "secondary" 
      }
    ],
    
    titleSize: "large",
    gradientColors: {
      from: "oklch(0.7 0.15 280)",
      to: "oklch(0.6 0.2 320)"
    },
    
    className: "min-h-screen animate-fade-in"
  };

  return <HeroLanding {...heroProps} />;
};

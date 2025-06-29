
import { HeroSection } from "@/components/hero-section";
import { FileUploadSection } from "@/components/file-upload-section";
import { FooterSection } from "@/components/footer-section";
import { ModeToggle } from "@/components/mode-toggle";
import { Hexagon } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          <div className="flex items-center gap-x-2">
            <Hexagon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">InnovateLab</span>
          </div>
          
          <div className="flex items-center gap-x-8">
            <div className="flex gap-x-8">
              <a href="/" className="text-sm font-semibold text-primary">
                Home
              </a>
              <a href="/about-us" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
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
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* File Upload Section */}
      <div id="upload">
        <FileUploadSection />
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default Index;

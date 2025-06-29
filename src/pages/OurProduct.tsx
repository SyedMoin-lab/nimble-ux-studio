
import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Github, Twitter } from "lucide-react";

const OurProduct = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Theme toggle in top right */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      
      {/* Header */}
      <header className="border-b border-border">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8">
          <div className="flex items-center gap-x-2">
            <Hexagon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">InnovateLab</span>
          </div>
          <div className="flex gap-x-8">
            <a href="/" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
              Home
            </a>
            <a href="/about-us" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
              About Us
            </a>
            <a href="/our-product" className="text-sm font-semibold text-primary">
              Our Product
            </a>
          </div>
        </nav>
      </header>

      {/* Content */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Our Product</h1>
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6">
              Our AI-powered innovation platform is designed to revolutionize how businesses approach their daily workflows and creative processes.
            </p>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li>• Advanced AI-powered automation tools</li>
                <li>• Intelligent workflow optimization</li>
                <li>• Real-time collaboration features</li>
                <li>• Comprehensive analytics and insights</li>
              </ul>
            </div>
            <p>
              Experience the future of productivity with our comprehensive suite of AI tools designed to amplify your team's capabilities.
            </p>
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

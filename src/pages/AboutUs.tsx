
import { ModeToggle } from "@/components/mode-toggle";
import { Footer } from "@/components/ui/footer";
import { Hexagon, Github, Twitter } from "lucide-react";

const AboutUs = () => {
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
              <a href="/" className="text-sm font-semibold text-foreground hover:text-muted-foreground transition-colors">
                Home
              </a>
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
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-foreground mb-8">About InnovateLab</h1>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-lg">
                  We are InnovateLab, a cutting-edge technology company dedicated to transforming ideas into reality through the power of artificial intelligence.
                </p>
                <p>
                  Founded in 2023, our mission is to harness the latest advancements in AI to streamline workflows, boost productivity, and unlock new possibilities for businesses of all sizes. We believe that innovation should be accessible to everyone, not just tech giants.
                </p>
                <p>
                  Our team consists of passionate engineers, designers, and AI specialists who work tirelessly to create solutions that make a real difference in people's daily lives. From small startups to enterprise corporations, we've helped over 10,000 businesses transform their operations.
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Our Values</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Innovation First:</strong> We constantly push boundaries to deliver cutting-edge solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>User-Centric:</strong> Every feature we build is designed with our users' needs in mind</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Transparency:</strong> We believe in open communication and honest business practices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Sustainability:</strong> We're committed to building a better future for everyone</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="animate-fade-in">
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

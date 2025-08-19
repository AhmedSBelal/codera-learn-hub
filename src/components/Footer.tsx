import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import coderaLogo from '@/assets/codera-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#courses', label: 'Courses' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  const courses = [
    'Computer Basics',
    'Programming for Kids',
    'C++ Programming',
    'AI Basics',
    'Web Development',
    'Backend Development'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={coderaLogo} alt="CODERA TECH" className="h-10 w-10 rounded-lg bg-white p-1" />
              <span className="text-xl font-bold">CODERA TECH</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering the next generation of tech professionals through quality education, 
              practical training, and industry-relevant skills.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary-foreground/10 transition-colors"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h4 className="text-lg font-bold mb-4">Popular Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a 
                    href="#courses" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div>
                <p className="font-medium text-primary-foreground">Etay El Baroud</p>
                <p className="text-sm">123 Tech Street, Beheira</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Damanhour</p>
                <p className="text-sm">456 Innovation Ave, Beheira</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Phone & WhatsApp</p>
                <p className="text-sm">+20 123 456 7890</p>
              </div>
              <div>
                <p className="font-medium text-primary-foreground">Email</p>
                <p className="text-sm">info@coderatech.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 CODERA TECH. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 shadow-glow animate-float z-50"
        size="icon"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
    </footer>
  );
};

export default Footer;
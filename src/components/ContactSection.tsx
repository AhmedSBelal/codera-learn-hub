import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your tech journey? Contact us today and let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Visit Our Locations</h3>
              <div className="space-y-6">
                {/* Etay El Baroud Branch */}
                <Card className="shadow-card border-0 hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Etay El Baroud Branch
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Main Campus & Training Center</p>
                    <p className="text-sm text-muted-foreground">123 Tech Street, Etay El Baroud, Beheira</p>
                  </CardContent>
                </Card>

                {/* Damanhour Branch */}
                <Card className="shadow-card border-0 hover:shadow-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Damanhour Branch
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">Secondary Campus</p>
                    <p className="text-sm text-muted-foreground">456 Innovation Ave, Damanhour, Beheira</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Methods</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+20 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">+20 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@coderatech.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="font-medium">Working Hours</p>
                    <p className="text-muted-foreground">Sun - Thu: 9AM - 9PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+20 123 456 7890" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Course Inquiry" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your learning goals and which courses interest you..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-hero-gradient hover:shadow-glow transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Laptop, DollarSign, Globe } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Trainers",
      description: "Learn from industry professionals with years of real-world experience in technology and education."
    },
    {
      icon: Laptop,
      title: "Practical Projects",
      description: "Build real-world projects that you can showcase in your portfolio and use in job interviews."
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Quality education at competitive prices with flexible payment options and scholarship opportunities."
    },
    {
      icon: Globe,
      title: "Online & Offline",
      description: "Choose your preferred learning style with both online classes and in-person sessions available."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Why Choose CODERA TECH?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best learning experience with industry-standard education and personalized support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group text-center hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card"
            >
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-hero-gradient rounded-full flex items-center justify-center group-hover:animate-glow transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
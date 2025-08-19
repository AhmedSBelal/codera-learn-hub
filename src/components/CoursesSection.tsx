import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

const CoursesSection = () => {
  const courses = [
    {
      title: "Computer Basics",
      description: "Master fundamental computer skills and digital literacy for beginners.",
      duration: "4 weeks",
      price: 299,
      originalPrice: 399,
      level: "Beginner",
      students: 150,
      rating: 4.8
    },
    {
      title: "Programming for Kids (Scratch)",
      description: "Fun and interactive programming introduction for young minds.",
      duration: "6 weeks",
      price: 249,
      originalPrice: 349,
      level: "Kids",
      students: 200,
      rating: 4.9
    },
    {
      title: "C++ Programming Basics",
      description: "Learn the fundamentals of C++ programming language.",
      duration: "8 weeks",
      price: 449,
      originalPrice: 599,
      level: "Beginner",
      students: 120,
      rating: 4.7
    },
    {
      title: "AI Basics",
      description: "Introduction to Artificial Intelligence concepts and applications.",
      duration: "6 weeks",
      price: 549,
      originalPrice: 699,
      level: "Intermediate",
      students: 180,
      rating: 4.8
    },
    {
      title: "AI Pro (Advanced)",
      description: "Advanced AI techniques, machine learning, and deep learning.",
      duration: "12 weeks",
      price: 899,
      originalPrice: 1199,
      level: "Advanced",
      students: 85,
      rating: 4.9
    },
    {
      title: "Web Fundamentals (HTML & CSS)",
      description: "Build beautiful websites with HTML and CSS from scratch.",
      duration: "6 weeks",
      price: 349,
      originalPrice: 449,
      level: "Beginner",
      students: 220,
      rating: 4.8
    },
    {
      title: "Frontend Development (JS + Tailwind)",
      description: "Create interactive web applications with JavaScript and Tailwind CSS.",
      duration: "10 weeks",
      price: 649,
      originalPrice: 849,
      level: "Intermediate",
      students: 160,
      rating: 4.7
    },
    {
      title: "Backend Development (PHP + MySQL)",
      description: "Build robust server-side applications with PHP and MySQL databases.",
      duration: "10 weeks",
      price: 699,
      originalPrice: 899,
      level: "Intermediate",
      students: 140,
      rating: 4.8
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Kids': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="courses" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of tech courses designed to take you from beginner to expert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card"
            >
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge className={getLevelColor(course.level)}>
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${course.originalPrice}</span>
                  <Badge variant="destructive" className="text-xs">
                    Save ${course.originalPrice - course.price}
                  </Badge>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full bg-hero-gradient hover:shadow-glow transition-all duration-300">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
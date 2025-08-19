import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What are the prerequisites for joining courses?",
      answer: "Most of our beginner courses require no prior experience. For intermediate and advanced courses, we recommend completing the prerequisite courses or having equivalent knowledge. Each course page lists specific requirements."
    },
    {
      question: "Do you offer certificates upon completion?",
      answer: "Yes! All students receive industry-recognized certificates upon successful completion of their courses. These certificates are valuable for your professional portfolio and career advancement."
    },
    {
      question: "Can I take courses online or do I need to attend in person?",
      answer: "We offer both online and offline learning options. You can choose the format that works best for your schedule and learning style. Online courses include live sessions and recorded materials for flexibility."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 7-day money-back guarantee if you're not satisfied with the course. After 7 days, refunds are considered on a case-by-case basis for exceptional circumstances."
    },
    {
      question: "Do you provide job placement assistance?",
      answer: "Yes! We offer career guidance, resume building workshops, interview preparation, and connect our graduates with our network of hiring partners. Many of our students find employment within 3 months of graduation."
    },
    {
      question: "What programming languages and technologies do you teach?",
      answer: "We cover a wide range including C++, JavaScript, PHP, Python, HTML/CSS, React, Node.js, MySQL, and emerging technologies like AI and machine learning. Our curriculum is updated regularly to match industry demands."
    },
    {
      question: "Are there any age restrictions for courses?",
      answer: "We welcome learners of all ages! We have specialized courses for kids (8+ years) using Scratch, and our adult courses are suitable for ages 16 and above. Our instructors adapt teaching methods to suit different age groups."
    },
    {
      question: "Do you offer payment plans or scholarships?",
      answer: "Yes! We offer flexible payment plans to make education accessible. We also provide merit-based scholarships and special discounts for students, unemployed individuals, and group enrollments."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, enrollment, and learning experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
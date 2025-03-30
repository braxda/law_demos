import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { CallToActionSection } from '../components/sections/CallToActionSection';
import { 
  ScaleIcon, 
  UserGroupIcon, 
  HeartIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline';

const AboutPage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      {/* Hero Section */}
      <div className="relative py-20 md:py-28 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80)`,
              filter: 'grayscale(100%)'
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedElement animation="fadeIn" className="mb-4">
              <span className="inline-block text-accent uppercase tracking-wider font-medium">About Our Firm</span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Our Legacy of Excellence
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.3}>
              <p className="text-xl text-white/80">
                Since 1998, Barrington Legal has been providing exceptional legal services
                in estate planning, probate, and trust administration throughout Massachusetts.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement animation="slideInLeft">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 bg-accent/10 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Our office" 
                className="w-full h-auto object-cover shadow-xl"
              />
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-primary/10 -z-10"></div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideInRight">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Our Story</h2>
            <p className="text-neutral-700 mb-4">
              Barrington Legal was founded in 1998 by Jonathan Barrington with a singular vision: to provide exceptional legal services with a human touch. What began as a small practice has grown into one of Massachusetts' most respected estate law firms.
            </p>
            <p className="text-neutral-700 mb-4">
              For over two decades, we've guided thousands of clients through the complexities of estate planning, probate, and trust administration. Our attorneys combine deep legal expertise with compassionate service, ensuring that every client receives personalized attention.
            </p>
            <p className="text-neutral-700">
              Today, our team of twelve attorneys and support staff continue our tradition of excellence, helping individuals and families protect their legacies for generations to come.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* Our Values */}
      <Section background="light" title="Our Core Values">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedElement animation="slideUp" delay={0.1} className="card border-accent">
            <ScaleIcon className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4 text-primary">Integrity</h3>
            <p className="text-neutral-600">
              We uphold the highest ethical standards in every aspect of our practice, ensuring trust and confidence in our client relationships.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.2} className="card border-primary">
            <UserGroupIcon className="h-12 w-12 text-primary mb-6" />
            <h3 className="text-xl font-bold mb-4 text-primary">Expertise</h3>
            <p className="text-neutral-600">
              Our attorneys maintain cutting-edge knowledge through continuous education and specialization in estate law.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.3} className="card border-secondary">
            <HeartIcon className="h-12 w-12 text-secondary mb-6" />
            <h3 className="text-xl font-bold mb-4 text-primary">Compassion</h3>
            <p className="text-neutral-600">
              We approach each client's situation with empathy and understanding, recognizing the personal nature of estate matters.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="slideUp" delay={0.4} className="card border-accent">
            <LightBulbIcon className="h-12 w-12 text-accent mb-6" />
            <h3 className="text-xl font-bold mb-4 text-primary">Innovation</h3>
            <p className="text-neutral-600">
              We embrace creative solutions and forward-thinking strategies to address each client's unique needs.
            </p>
          </AnimatedElement>
        </div>
      </Section>

      {/* Our Process */}
      <Section title="Our Approach" subtitle="We follow a methodical process to ensure every client receives comprehensive, personalized legal guidance.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="fadeIn" delay={0.1}>
            <div className="relative pl-16 pb-12 md:pb-0">
              <div className="absolute left-0 top-0 rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold text-xl">1</div>
              <div className="absolute left-5 top-10 w-0.5 h-full bg-primary/20 md:hidden"></div>
              <h3 className="text-xl font-bold mb-3 text-primary">Initial Consultation</h3>
              <p className="text-neutral-600">
                We begin with a thorough discussion of your situation, goals, and concerns, establishing a foundation for our legal strategy.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeIn" delay={0.2}>
            <div className="relative pl-16 pb-12 md:pb-0">
              <div className="absolute left-0 top-0 rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold text-xl">2</div>
              <div className="absolute left-5 top-10 w-0.5 h-full bg-primary/20 md:hidden"></div>
              <h3 className="text-xl font-bold mb-3 text-primary">Customized Planning</h3>
              <p className="text-neutral-600">
                Our attorneys develop tailored strategies designed specifically for your unique circumstances and objectives.
              </p>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeIn" delay={0.3}>
            <div className="relative pl-16">
              <div className="absolute left-0 top-0 rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3 text-primary">Implementation & Review</h3>
              <p className="text-neutral-600">
                We execute your plan with precision and provide ongoing support and regular reviews to address any changes in your life or the law.
              </p>
            </div>
          </AnimatedElement>
        </div>
      </Section>

      {/* Call to Action */}
      <CallToActionSection
        title="Ready to Work With Us?"
        subtitle="Schedule a consultation to learn how we can help protect your legacy."
        buttonText="Contact Our Team"
      />
    </motion.div>
  );
};

export default AboutPage; 
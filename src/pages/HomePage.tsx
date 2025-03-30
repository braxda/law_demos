import Hero from '../components/Hero'
import { ServicesSection } from '../components/sections/ServicesSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { CallToActionSection } from '../components/sections/CallToActionSection'
import { Section } from '../components/ui/Section'
import { AnimatedElement } from '../components/ui/AnimatedElement'
import { ScaleIcon, TrophyIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Why Choose Us Section */}
      <Section
        background="light"
        title="Why Choose Barrington Legal"
        subtitle="Our commitment to excellence, personalized service, and proven results sets us apart."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AnimatedElement
            animation="slideUp"
            delay={0.1}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-full bg-primary/10 p-5 mb-6">
              <ScaleIcon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Unmatched Expertise</h3>
            <p className="text-neutral-700">
              Our attorneys bring decades of specialized experience in estate law, ensuring your matters are handled with deep legal knowledge and insight.
            </p>
          </AnimatedElement>
          
          <AnimatedElement
            animation="slideUp"
            delay={0.3}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-full bg-primary/10 p-5 mb-6">
              <TrophyIcon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Proven Results</h3>
            <p className="text-neutral-700">
              We've successfully guided thousands of clients through complex estate matters, earning recognition for our professional excellence.
            </p>
          </AnimatedElement>
          
          <AnimatedElement
            animation="slideUp"
            delay={0.5}
            className="flex flex-col items-center text-center"
          >
            <div className="rounded-full bg-primary/10 p-5 mb-6">
              <ClipboardDocumentCheckIcon className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">Client-Focused Approach</h3>
            <p className="text-neutral-700">
              We build lasting relationships based on trust, transparency, and personalized attention to each client's unique circumstances.
            </p>
          </AnimatedElement>
        </div>
      </Section>
      
      {/* Stats Section */}
      <Section background="primary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
          <AnimatedElement animation="fadeIn" delay={0.1} className="text-white">
            <p className="text-5xl font-bold mb-2 text-accent">25+</p>
            <p className="uppercase tracking-wider text-white/80">Years of Experience</p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeIn" delay={0.2} className="text-white">
            <p className="text-5xl font-bold mb-2 text-accent">3,000+</p>
            <p className="uppercase tracking-wider text-white/80">Clients Served</p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeIn" delay={0.3} className="text-white">
            <p className="text-5xl font-bold mb-2 text-accent">98%</p>
            <p className="uppercase tracking-wider text-white/80">Client Satisfaction</p>
          </AnimatedElement>
          
          <AnimatedElement animation="fadeIn" delay={0.4} className="text-white">
            <p className="text-5xl font-bold mb-2 text-accent">12</p>
            <p className="uppercase tracking-wider text-white/80">Award-Winning Attorneys</p>
          </AnimatedElement>
        </div>
      </Section>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <CallToActionSection
        title="Ready to Protect Your Legacy?"
        subtitle="Schedule a confidential consultation with our experienced attorneys today."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}

export default HomePage 
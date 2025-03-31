import { Suspense } from 'react'
import { ScaleIcon, TrophyIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

// This will be implemented later
const HeroSection = () => <div>Hero Section Placeholder</div>
const ServicesSection = () => <div>Services Section Placeholder</div>
const TestimonialsSection = () => <div>Testimonials Section Placeholder</div>
const CallToActionSection = () => <div>CTA Section Placeholder</div>
const Section = ({ children, background, title, subtitle }: { children: React.ReactNode, background?: string, title?: string, subtitle?: string }) => (
  <section className={`py-16 ${background === 'primary' ? 'bg-primary text-white' : background === 'light' ? 'bg-gray-50' : 'bg-white'}`}>
    <div className="container mx-auto px-4">
      {title && <h2 className="text-3xl font-bold text-center mb-2">{title}</h2>}
      {subtitle && <p className="text-xl text-center max-w-3xl mx-auto mb-10 text-gray-600">{subtitle}</p>}
      {children}
    </div>
  </section>
)
const AnimatedElement = ({ children, animation, delay, className }: { children: React.ReactNode, animation?: string, delay?: number, className?: string }) => (
  <div className={className}>{children}</div>
)

export default function HomePage() {
  return (
    <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
      <div>
        <HeroSection />
        
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
                We have successfully guided thousands of clients through complex estate matters, earning recognition for our professional excellence.
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
        <CallToActionSection />
      </div>
    </Suspense>
  )
} 
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { CallToActionSection } from '../components/sections/CallToActionSection';
import { Button } from '../components/ui/Button';
import { 
  ScaleIcon, 
  DocumentTextIcon, 
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UsersIcon 
} from '@heroicons/react/24/outline';

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  description: string;
  services: string[];
}

const services: ServiceItem[] = [
  {
    id: 'probate',
    title: 'Probate',
    icon: <ScaleIcon className="h-16 w-16 text-accent" />,
    summary: 'We guide clients through the complex probate process with expertise and compassion, ensuring the proper administration of estates.',
    description: 'Probate is the legal process of administering the estate of a deceased person. Our experienced attorneys provide comprehensive guidance through every step of this often complex process. We handle all aspects of probate administration, from filing the initial petition and inventorying assets to addressing creditor claims and distributing assets to beneficiaries. Our approach combines legal expertise with sensitivity to the emotional challenges families face during this difficult time.',
    services: [
      'Formal and informal probate administration',
      'Asset inventory and valuation',
      'Creditor notification and claim management',
      'Tax compliance and filings',
      'Final accounting and asset distribution',
      'Representation in contested probate matters'
    ]
  },
  {
    id: 'wills',
    title: 'Wills & Trusts',
    icon: <DocumentTextIcon className="h-16 w-16 text-primary" />,
    summary: 'We craft customized wills and trusts that secure your legacy and ensure your assets are distributed according to your wishes.',
    description: 'A well-crafted will or trust is the foundation of any comprehensive estate plan. Our attorneys work closely with you to create documents that accurately reflect your wishes while minimizing potential conflicts or challenges. We take the time to understand your unique family dynamics, financial situation, and long-term goals to develop tailored solutions. From simple wills to complex trust arrangements, we provide the personalized guidance you need to make informed decisions about your legacy.',
    services: [
      'Simple and complex wills',
      'Revocable living trusts',
      'Irrevocable trusts',
      'Special needs trusts',
      'Charitable trusts',
      'Trust amendments and restatements',
      'Pour-over wills'
    ]
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    icon: <BuildingLibraryIcon className="h-16 w-16 text-secondary" />,
    summary: 'Our comprehensive estate planning services help secure your family\'s future, preserve wealth, and provide peace of mind.',
    description: 'Estate planning is about more than just distributing assets—it\'s about protecting your legacy and providing for your loved ones. Our comprehensive approach addresses all aspects of estate planning, from basic will preparation to sophisticated tax planning strategies. We help you navigate complex legal and tax issues while ensuring your plan reflects your personal values and objectives. With proper estate planning, you can minimize taxes, avoid probate, provide for loved ones with special needs, and support charitable causes that matter to you.',
    services: [
      'Comprehensive estate plan development',
      'Powers of attorney and healthcare directives',
      'Business succession planning',
      'Estate tax planning strategies',
      'Legacy and charitable planning',
      'Digital asset planning',
      'Regular plan reviews and updates'
    ]
  },
  {
    id: 'trust-administration',
    title: 'Trust Administration',
    icon: <ShieldCheckIcon className="h-16 w-16 text-accent" />,
    summary: 'We help trustees fulfill their fiduciary duties and navigate the complex process of trust administration with expertise and efficiency.',
    description: 'Serving as a trustee carries significant legal responsibilities and potential liabilities. Our attorneys provide trustees with the guidance and support needed to properly administer trusts in compliance with their terms and applicable law. We help trustees understand their fiduciary duties, manage trust assets appropriately, and maintain proper accounting and reporting. Whether you\'re an individual trustee or a corporate fiduciary, our team offers practical advice and comprehensive legal services to ensure proper trust administration.',
    services: [
      'Trustee guidance on fiduciary duties',
      'Trust accounting and record-keeping',
      'Beneficiary communications',
      'Asset management oversight',
      'Tax compliance and reporting',
      'Trust modifications and terminations',
      'Representation in trust disputes'
    ]
  },
  {
    id: 'estate-litigation',
    title: 'Estate Litigation',
    icon: <UsersIcon className="h-16 w-16 text-primary" />,
    summary: 'Our seasoned litigators provide strong representation in will contests, trust disputes, and other estate-related conflicts.',
    description: 'When disputes arise in the context of estates and trusts, our litigation team provides strategic, results-oriented representation. We handle a wide range of contentious matters, from will contests and trust disputes to fiduciary litigation and elder financial abuse claims. Our attorneys combine extensive litigation experience with deep knowledge of estate and trust law to effectively advocate for our clients. We pursue settlement when possible but are fully prepared to litigate aggressively when necessary to protect our clients\' interests.',
    services: [
      'Will contests and validity challenges',
      'Trust interpretation and enforcement',
      'Fiduciary liability claims',
      'Contested guardianships and conservatorships',
      'Elder financial abuse litigation',
      'Beneficiary disputes',
      'Mediation and alternative dispute resolution'
    ]
  }
];

const ServicesPage = () => {
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  
  const scrollToService = (id: string) => {
    serviceRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-20 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)`,
              filter: 'grayscale(100%)'
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedElement animation="fadeIn" className="mb-4">
              <span className="inline-block text-accent uppercase tracking-wider font-medium">Our Legal Services</span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Comprehensive Legal Solutions
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.3}>
              <p className="text-xl text-white/80 mb-8">
                Barrington Legal offers expert guidance in estate planning, probate, and trust administration
                to protect your legacy and secure your family's future.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="slideUp" delay={0.4}>
              <div className="flex flex-wrap justify-center gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => scrollToService(service.id)}
                    className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {service.title}
                  </button>
                ))}
              </div>
            </AnimatedElement>
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedElement animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Our Practice Areas</h2>
            <p className="text-lg text-neutral-700">
              At Barrington Legal, we provide comprehensive legal services in all areas of estate law.
              Our team of experienced attorneys brings deep expertise and a client-centered approach to every matter we handle.
            </p>
          </AnimatedElement>
        </div>
        
        <div className="grid grid-cols-1 gap-24">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              ref={(el) => {
                serviceRefs.current[service.id] = el;
              }}
              className="scroll-mt-28"
            >
              <AnimatedElement animation={index % 2 === 0 ? "slideInLeft" : "slideInRight"}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                  <div className="md:col-span-1">
                    <div className="bg-neutral-50 p-8 h-full">
                      <div className="mb-6">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary">
                        {service.title}
                      </h3>
                      <p className="text-neutral-700 mb-8">
                        {service.summary}
                      </p>
                      <Button 
                        href={`/contact?service=${service.id}`} 
                        variant="outline"
                      >
                        Request a Consultation
                      </Button>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <div className="bg-white p-8 shadow-lg border-t-4 border-primary h-full">
                      <h4 className="text-xl font-bold mb-6 text-primary border-b border-neutral-200 pb-4">
                        How We Can Help
                      </h4>
                      <p className="text-neutral-700 mb-8 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <h4 className="text-xl font-bold mb-4 text-primary">
                        Our {service.title} Services Include:
                      </h4>
                      <ul className="space-y-2 text-neutral-700">
                        {service.services.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3 mt-2.5 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToActionSection
        title="Get Expert Legal Guidance"
        subtitle="Schedule a consultation to discuss your specific needs with our experienced attorneys."
        buttonText="Schedule a Consultation"
        background="dark"
      />
    </div>
  );
};

export default ServicesPage; 
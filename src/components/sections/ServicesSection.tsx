import { motion } from 'framer-motion';
import { useAnimateInView, staggerChildren, slideUp } from '../../hooks/useAnimation';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { 
  ScaleIcon, 
  DocumentTextIcon, 
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UsersIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 'probate',
    title: 'Probate',
    description: 'Navigate the complexities of probate with our expert legal team, ensuring a smooth administration of your loved one\'s estate during a difficult time.',
    icon: <ScaleIcon className="h-12 w-12 text-accent" />,
    color: 'accent'
  },
  {
    id: 'wills',
    title: 'Wills & Trusts',
    description: 'Secure your legacy and provide for your loved ones with comprehensive wills and trusts tailored to your unique circumstances and wishes.',
    icon: <DocumentTextIcon className="h-12 w-12 text-primary" />,
    color: 'primary'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    description: 'Create a comprehensive strategy to manage and distribute your assets according to your wishes, minimizing taxes and providing for loved ones.',
    icon: <BuildingLibraryIcon className="h-12 w-12 text-secondary" />,
    color: 'secondary'
  },
  {
    id: 'trust-administration',
    title: 'Trust Administration',
    description: 'Our experienced attorneys help trustees navigate the complex process of trust administration, ensuring proper asset management and distribution.',
    icon: <ShieldCheckIcon className="h-12 w-12 text-accent" />,
    color: 'accent'
  },
  {
    id: 'estate-litigation',
    title: 'Estate Litigation',
    description: 'When disputes arise, our skilled litigation team provides powerful representation to protect your interests in will contests, trust disputes, and more.',
    icon: <UsersIcon className="h-12 w-12 text-primary" />,
    color: 'primary'
  }
];

export function ServicesSection() {
  const { ref, controls } = useAnimateInView({ threshold: 0.1 });
  
  return (
    <Section
      id="services"
      title="Our Practice Areas"
      subtitle="With decades of experience, our attorneys provide expert legal guidance across a wide range of estate-related matters."
    >
      <motion.div 
        ref={ref}
        variants={staggerChildren(0.1)}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={slideUp()}
            className="card group relative"
            style={{ borderColor: `var(--color-${service.color})` }}
          >
            <div className="mb-5">{service.icon}</div>
            <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
            <p className="text-neutral-600 mb-6">{service.description}</p>
            <Button
              variant="text"
              href={`/services#${service.id}`}
              className="mt-auto inline-flex items-center text-sm"
            >
              Learn More
              <svg
                className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </motion.div>
        ))}
      </motion.div>
      
      <div className="mt-16 text-center">
        <Button href="/services" variant="primary" size="lg">
          View All Services
        </Button>
      </div>
    </Section>
  );
} 
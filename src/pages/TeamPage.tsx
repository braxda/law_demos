import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { CallToActionSection } from '../components/sections/CallToActionSection';

// Team member data
const teamMembers = [
  {
    id: 1,
    name: 'Jonathan Barrington',
    role: 'Founding Partner',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Jonathan brings over 30 years of experience in estate law, having founded Barrington Legal in 1998. He specializes in complex estate planning and high-value probate cases.',
    education: ['J.D., Harvard Law School', 'B.A., Yale University'],
    barAdmissions: ['Massachusetts Bar Association', 'American Bar Association'],
    awards: ['Best Lawyers in America (2010-2023)', 'Massachusetts Super Lawyer']
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Senior Partner',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80',
    bio: 'Sarah joined Barrington Legal in 2003 and became partner in 2008. She focuses on estate planning for business owners and trust administration, bringing clarity to complex situations.',
    education: ['J.D., Boston University School of Law', 'B.S., Boston College'],
    barAdmissions: ['Massachusetts Bar Association', 'New York Bar Association'],
    awards: ['Top Women Attorneys in Massachusetts', 'Best Lawyers in America (2015-2023)']
  },
  {
    id: 3,
    name: 'Michael Reynolds',
    role: 'Partner',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    bio: 'Michael specializes in estate litigation and contested probate matters. With his background as a former prosecutor, he brings strategic insight and strong advocacy to complex disputes.',
    education: ['J.D., Columbia Law School', 'B.A., Georgetown University'],
    barAdmissions: ['Massachusetts Bar Association', 'Federal Bar Association'],
    awards: ['Massachusetts Super Lawyer', 'Top 100 Trial Lawyers in Massachusetts']
  },
  {
    id: 4,
    name: 'Emma Lawson',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80',
    bio: 'Emma joined Barrington Legal in 2018 and focuses on estate planning for young families and digital asset planning. She brings a modern perspective to traditional estate planning.',
    education: ['J.D., Northeastern University School of Law', 'B.A., Tufts University'],
    barAdmissions: ['Massachusetts Bar Association'],
    awards: ['Rising Star, Massachusetts Super Lawyers (2020-2023)']
  }
];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-20 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)`,
              filter: 'grayscale(100%)'
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedElement animation="fadeIn" className="mb-4">
              <span className="inline-block text-accent uppercase tracking-wider font-medium">Our Team</span>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Meet Our Attorneys
              </h1>
            </AnimatedElement>
            <AnimatedElement animation="slideUp" delay={0.3}>
              <p className="text-xl text-white/80">
                Our experienced attorneys bring unmatched expertise and a client-centered approach
                to every case we handle.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </div>
      
      {/* Team Introduction */}
      <Section>
        <AnimatedElement animation="fadeIn">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">Expertise You Can Trust</h2>
            <p className="text-lg text-neutral-700 mb-10">
              At Barrington Legal, our team combines deep legal knowledge, strategic thinking, and a commitment to personalized service.
              Each attorney brings specialized expertise and a shared dedication to protecting our clients' interests and securing their legacies.
            </p>
          </div>
        </AnimatedElement>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={member.id} animation="slideUp" delay={0.1 * (index + 1)}>
              <div 
                className={`
                  overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer
                  ${selectedMember.id === member.id ? 'ring-4 ring-primary ring-offset-4' : ''}
                `}
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative h-80 bg-neutral-200">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                  <p className="text-neutral-600">{member.role}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </Section>
      
      {/* Selected Member Details */}
      <Section background="light">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <AnimatedElement animation="slideInLeft" className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="relative overflow-hidden shadow-xl mb-6">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-auto"
                />
              </div>
              <h2 className="text-3xl font-heading font-bold text-primary">{selectedMember.name}</h2>
              <p className="text-lg text-neutral-600 mb-6">{selectedMember.role}</p>
              
              <div className="space-y-1 text-neutral-600">
                {selectedMember.education.map((edu, index) => (
                  <p key={index}>• {edu}</p>
                ))}
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slideInRight" className="lg:col-span-2">
            <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
              <h3 className="text-2xl font-heading font-bold mb-6 text-primary border-b border-neutral-200 pb-4">
                About {selectedMember.name}
              </h3>
              
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                {selectedMember.bio}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Bar Admissions</h4>
                  <ul className="space-y-2 text-neutral-700">
                    {selectedMember.barAdmissions.map((admission, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3"></span>
                        {admission}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Recognition</h4>
                  <ul className="space-y-2 text-neutral-700">
                    {selectedMember.awards.map((award, index) => (
                      <li key={index} className="flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent mr-3"></span>
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToActionSection
        title="Work With Our Expert Team"
        subtitle="Schedule a consultation to discuss your estate planning or probate needs with our experienced attorneys."
        buttonText="Schedule a Consultation"
      />
    </div>
  );
};

export default TeamPage; 
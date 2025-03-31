const ServicesPage = () => {
  // Services data - in a real application, this might come from an API or CMS
  const services = [
    {
      id: 1,
      title: "Probate",
      description: "Probate is the legal process of administering a deceased person's estate. Our attorneys guide executors and administrators through every step of the probate process, from filing the initial petition to distributing assets to beneficiaries.",
      details: [
        "Court representation",
        "Asset inventory and appraisal",
        "Creditor notification and debt settlement",
        "Tax filings",
        "Final distribution of assets"
      ],
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Legal documents and gavel representing probate process"
    },
    {
      id: 2,
      title: "Estate Planning",
      description: "Estate planning involves preparing for the management and disposal of a person's estate during their life and after death. We help clients create comprehensive estate plans tailored to their unique needs and goals.",
      details: [
        "Wills and trusts",
        "Powers of attorney",
        "Healthcare directives",
        "Asset protection strategies",
        "Business succession planning"
      ],
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Person signing estate planning documents"
    },
    {
      id: 3,
      title: "Trust Administration",
      description: "Trust administration involves managing the assets held in a trust according to the terms of the trust document. We assist trustees in fulfilling their fiduciary duties and navigating the complexities of trust administration.",
      details: [
        "Trustee guidance and support",
        "Asset management and distribution",
        "Beneficiary communication",
        "Tax planning and compliance",
        "Trust accounting"
      ],
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Trust documents and financial planning materials"
    },
    {
      id: 4,
      title: "Conservatorships & Guardianships",
      description: "Conservatorships and guardianships are legal arrangements that provide for the care of individuals who are unable to care for themselves. We help families establish and manage these arrangements with compassion and respect.",
      details: [
        "Conservatorship petitions",
        "Guardianship proceedings",
        "Court reporting and accounting",
        "Caregiver guidance",
        "Decision-making authority"
      ],
      imageUrl: "https://images.unsplash.com/photo-1516733968668-dbdce39c4651?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Hands holding together representing care and guardianship"
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive legal solutions for estate planning, probate, and trust administration,
            delivered with personalized attention to your unique needs.
          </p>
        </div>
      </div>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} mb-16`}>
              {/* Service Image */}
              <div className="md:w-1/3 mb-6 md:mb-0 overflow-hidden rounded-lg shadow-md h-64">
                <img 
                  src={service.imageUrl} 
                  alt={service.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h2 className="text-3xl font-bold mb-4 text-primary">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title} Services:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
                
                <a 
                  href={`/contact?service=${service.title.toLowerCase()}`} 
                  className="inline-block bg-accent text-white font-medium px-6 py-2 rounded-md hover:bg-accent/90"
                >
                  Inquire About This Service
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">Not Sure What You Need?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss your specific situation and
            receive personalized recommendations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-primary text-white font-medium px-8 py-3 rounded-md hover:bg-primary/90"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 
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
      ]
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
      ]
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
      ]
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
      ]
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-purple-900 text-white py-16">
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
              {/* Image Placeholder - in a real site, you'd use actual images */}
              <div className="md:w-1/3 bg-gray-200 h-64 mb-6 md:mb-0"></div>
              
              <div className={`md:w-2/3 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                <h2 className="text-3xl font-bold mb-4 text-purple-900">{service.title}</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-3 text-purple-800">What We Offer:</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
                
                <a 
                  href={`/contact?service=${service.title.toLowerCase()}`} 
                  className="inline-block bg-purple-800 text-white font-medium px-6 py-2 rounded hover:bg-purple-700"
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
          <h2 className="text-3xl font-bold mb-6 text-purple-900">Not Sure What You Need?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a consultation with our team to discuss your specific situation and
            receive personalized recommendations.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-800 text-white font-medium px-8 py-3 rounded-lg hover:bg-purple-700"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 
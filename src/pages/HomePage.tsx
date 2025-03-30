import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Overview Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Probate</h3>
              <p className="text-gray-700 mb-4">
                We guide you through the complex probate process with expertise and compassion,
                ensuring your loved one's estate is handled properly.
              </p>
              <a href="/services/probate" className="text-blue-500 font-medium hover:underline">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Estate Planning</h3>
              <p className="text-gray-700 mb-4">
                Protect your legacy and provide for your loved ones with our comprehensive
                estate planning services.
              </p>
              <a href="/services/estate-planning" className="text-blue-500 font-medium hover:underline">
                Learn more →
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Trust Administration</h3>
              <p className="text-gray-700 mb-4">
                We help trustees fulfill their fiduciary duties and administer trusts
                efficiently and in compliance with the law.
              </p>
              <a href="/services/trust-administration" className="text-blue-500 font-medium hover:underline">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Legacy?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation with our experienced team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-purple-900 font-medium px-8 py-3 rounded-lg hover:bg-gray-100"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default HomePage 
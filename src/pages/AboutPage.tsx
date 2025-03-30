const AboutPage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            The Probate House L.C. is dedicated to helping clients navigate the complexities
            of probate and estate planning with a personal touch.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-purple-900">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2005, The Probate House L.C. was established with a vision to provide 
              personalized legal services in the areas of probate and estate planning. Unlike 
              large law firms where clients often feel like just another case number, we pride 
              ourselves on building lasting relationships with our clients.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our founding partners recognized that navigating probate and estate matters can be 
              emotionally challenging, especially during times of loss. That's why we've created 
              a practice that combines legal expertise with a compassionate approach, ensuring 
              our clients feel supported throughout the entire process.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Over the years, we've helped hundreds of Southern California families protect 
              their legacies and navigate the complexities of estate administration. Our team's 
              commitment to excellence and personalized service has made us a trusted name in 
              probate and estate planning law.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-900">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Integrity</h3>
              <p className="text-gray-700">
                We maintain the highest ethical standards in all our dealings, providing honest 
                advice and transparent communication.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Compassion</h3>
              <p className="text-gray-700">
                We understand the emotional challenges our clients face and approach each case 
                with empathy and understanding.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all aspects of our practice, continuously improving 
                our skills and knowledge to better serve our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage 
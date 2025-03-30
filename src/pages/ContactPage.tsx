import { useState, FormEvent } from 'react'

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help. Reach out to schedule a consultation or learn more about our services.
          </p>
        </div>
      </div>
      
      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            {/* Contact Information */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-2xl font-bold mb-6 text-purple-900">Our Office</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Address</h3>
                <p className="text-gray-700">123 Main Street</p>
                <p className="text-gray-700">Suite 200</p>
                <p className="text-gray-700">Los Angeles, CA 90001</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Phone</h3>
                <p className="text-gray-700">424-452-2375</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Email</h3>
                <p className="text-gray-700">info@probatehouse.com</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-purple-800">Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9am - 5pm</p>
                <p className="text-gray-700">Saturday - Sunday: Closed</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 md:pl-12">
              <h2 className="text-2xl font-bold mb-6 text-purple-900">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for contacting us! We'll get back to you shortly.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="probate">Probate</option>
                    <option value="estate-planning">Estate Planning</option>
                    <option value="trust-administration">Trust Administration</option>
                    <option value="conservatorships">Conservatorships & Guardianships</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-purple-800 text-white font-medium px-6 py-3 rounded hover:bg-purple-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section - in a real application, you'd use a map component */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-gray-200 h-80 w-full">
            {/* Map placeholder */}
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-gray-600">Map would go here</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 
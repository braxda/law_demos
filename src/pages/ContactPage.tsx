import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { AnimatedElement } from '../components/ui/AnimatedElement';
import { Button } from '../components/ui/Button';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, this would send the form data to a server
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-20 md:py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div 
            className="h-full w-full bg-cover bg-center"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)`,
              filter: 'grayscale(100%)'
            }}
          ></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-accent uppercase tracking-wider font-medium mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/80"
            >
              We're here to help. Schedule a consultation or reach out with any questions about our services.
            </motion.p>
          </div>
        </div>
      </div>
      
      {/* Contact Information & Form */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <AnimatedElement animation="slideInLeft" className="lg:col-span-1">
            <div className="bg-primary text-white p-8 h-full">
              <h2 className="text-2xl font-heading font-bold mb-8 border-b border-white/20 pb-4">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-white/80 mb-1">(555) 123-4567</p>
                    <p className="text-white/80 text-sm">Monday-Friday, 9AM-5PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-white/80 mb-1">info@barringtonlegal.com</p>
                    <p className="text-white/80 text-sm">We typically respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Office Location</h3>
                    <p className="text-white/80">
                      123 Legal Avenue<br />
                      Suite 400<br />
                      Boston, MA 02110
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Office Hours</h3>
                    <p className="text-white/80">Monday-Friday: 9AM-5PM</p>
                    <p className="text-white/80">Saturday-Sunday: Closed</p>
                    <p className="text-white/60 text-sm mt-2">Evening appointments available upon request</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
          
          {/* Contact Form */}
          <AnimatedElement animation="slideInRight" className="lg:col-span-2">
            <div className="bg-white p-8 shadow-lg border-t-4 border-primary">
              <h2 className="text-2xl font-heading font-bold mb-8 text-primary border-b border-neutral-200 pb-4">
                Schedule a Consultation
              </h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded">
                  <h3 className="text-xl font-medium mb-3">Thank You!</h3>
                  <p>Your message has been sent successfully. One of our attorneys will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-700">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-700">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block mb-2 text-sm font-medium text-neutral-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block mb-2 text-sm font-medium text-neutral-700">
                        Service of Interest*
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      >
                        <option value="">Select a Service</option>
                        <option value="probate">Probate</option>
                        <option value="estate-planning">Estate Planning</option>
                        <option value="wills-trusts">Wills & Trusts</option>
                        <option value="trust-administration">Trust Administration</option>
                        <option value="estate-litigation">Estate Litigation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full p-3 border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Please provide any additional details about your legal needs..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6 text-sm text-neutral-600">
                    <p>* Required fields</p>
                  </div>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                    Submit Request
                  </Button>
                </form>
              )}
            </div>
          </AnimatedElement>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section fullWidth={true} className="pt-0">
        <div className="h-[400px] w-full bg-neutral-200">
          {/* Replace with actual Google Maps embed in production */}
          <div className="w-full h-full flex items-center justify-center bg-neutral-300">
            <p className="text-neutral-600 font-medium">Interactive Map Would Be Embedded Here</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage; 
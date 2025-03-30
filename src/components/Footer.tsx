import { Link } from 'react-router-dom'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 border-b border-white/20 pb-3">
              Barrington Legal
            </h3>
            <p className="mb-6 text-white/80">
              Providing expert legal guidance in probate, estate planning, and trust administration for over 25 years.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 border-b border-white/20 pb-3">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-white/80 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 border-b border-white/20 pb-3">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#probate" className="text-white/80 hover:text-white transition-colors">
                  Probate
                </Link>
              </li>
              <li>
                <Link to="/services#wills" className="text-white/80 hover:text-white transition-colors">
                  Wills & Trusts
                </Link>
              </li>
              <li>
                <Link to="/services#estate-planning" className="text-white/80 hover:text-white transition-colors">
                  Estate Planning
                </Link>
              </li>
              <li>
                <Link to="/services#trust-administration" className="text-white/80 hover:text-white transition-colors">
                  Trust Administration
                </Link>
              </li>
              <li>
                <Link to="/services#estate-litigation" className="text-white/80 hover:text-white transition-colors">
                  Estate Litigation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6 border-b border-white/20 pb-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  123 Legal Avenue<br />
                  Suite 400<br />
                  Boston, MA 02110
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:555-123-4567" className="text-white/80 hover:text-white transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:info@barringtonlegal.com" className="text-white/80 hover:text-white transition-colors">
                  info@barringtonlegal.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-primary-dark py-6 border-t border-white/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
            <p>© {currentYear} Barrington Legal. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
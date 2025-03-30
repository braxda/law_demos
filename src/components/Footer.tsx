import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">The Probate House L.C.</h3>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Los Angeles, CA 90001</p>
            <p className="mb-2">Phone: 424-452-2375</p>
            <p>Email: info@probatehouse.com</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/team" className="hover:text-blue-300">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-blue-300">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/probate" className="hover:text-blue-300">Probate</Link></li>
              <li><Link to="/services/estate-planning" className="hover:text-blue-300">Estate Planning</Link></li>
              <li><Link to="/services/trust-administration" className="hover:text-blue-300">Trust Administration</Link></li>
              <li><Link to="/services/wills" className="hover:text-blue-300">Wills</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} The Probate House L.C. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
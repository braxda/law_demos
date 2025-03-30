import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            The Probate House L.C.
          </Link>
        </div>
        
        <div className="flex flex-col items-end mb-4 md:mb-0">
          <p className="text-sm">Call for a consultation: <span className="text-purple-700 font-semibold">424-452-2375</span></p>
        </div>
        
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:space-x-6">
            <li>
              <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 hover:text-purple-700 font-medium">About Us</Link>
            </li>
            <li>
              <Link to="/team" className="text-gray-700 hover:text-purple-700 font-medium">Our Team</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-700 hover:text-purple-700 font-medium">Our Services</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-purple-700 font-medium">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 
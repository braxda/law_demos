import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="relative h-[500px]">
      {/* Hero background - we'll use a placeholder for now */}
      <div className="absolute inset-0 bg-gray-300">
        {/* In a real implementation, you'd use an actual image here */}
        <div className="h-full w-full bg-gradient-to-r from-gray-200 to-gray-300"></div>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="col-span-1">
            {/* Left side - empty or image */}
          </div>
          <div className="col-span-1 flex flex-col justify-center">
            <div className="bg-white/90 p-8 rounded-lg shadow">
              <h3 className="text-purple-800 uppercase font-medium mb-2">Quality</h3>
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-2">
                PROBATE <span className="text-blue-500">&</span> ESTATE PLANNING
              </h1>
              <h2 className="text-2xl text-purple-800 mt-4 mb-6">WITH A PERSONAL APPROACH</h2>
              <p className="text-gray-700 mb-8">
                We are your Southern California partner in estate administration and
                estate protection.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-purple-800 text-white font-medium px-6 py-3 uppercase tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 
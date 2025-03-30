const TeamPage = () => {
  // Team members data - in a real application, this might come from an API or CMS
  const teamMembers = [
    {
      id: 1,
      name: "Jennifer M. Johnson",
      title: "Founding Partner",
      bio: "Jennifer has over 20 years of experience in estate planning and probate law. She is certified as a Specialist in Estate Planning, Trust, and Probate Law by the State Bar of California Board of Legal Specialization.",
      education: "J.D., UCLA School of Law",
      image: "/placeholder-female.jpg" // Placeholder for now
    },
    {
      id: 2,
      name: "Michael R. Davis",
      title: "Senior Attorney",
      bio: "Michael specializes in complex probate litigation and has successfully represented clients in numerous high-profile cases. His strategic approach to resolving disputes has earned him recognition among his peers.",
      education: "J.D., USC Gould School of Law",
      image: "/placeholder-male.jpg" // Placeholder for now
    },
    {
      id: 3,
      name: "Sophia L. Martinez",
      title: "Estate Planning Attorney",
      bio: "Sophia focuses on helping families create comprehensive estate plans that protect their assets and provide for their loved ones. She is known for her ability to explain complex legal concepts in simple terms.",
      education: "J.D., Stanford Law School",
      image: "/placeholder-female.jpg" // Placeholder for now
    },
    {
      id: 4,
      name: "Robert K. Wilson",
      title: "Probate Attorney",
      bio: "Robert has extensive experience guiding clients through the probate process. His attention to detail and thorough approach ensures that estates are administered properly and efficiently.",
      education: "J.D., Berkeley Law",
      image: "/placeholder-male.jpg" // Placeholder for now
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div className="bg-purple-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our experienced team of attorneys dedicated to providing exceptional 
            legal services in probate and estate planning.
          </p>
        </div>
      </div>
      
      {/* Team Members Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <div className="bg-gray-300 h-48 w-48 mx-auto rounded-full mb-4"></div>
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h3 className="text-2xl font-bold text-purple-900">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-700 mb-3">{member.bio}</p>
                  <p className="text-gray-600 italic">{member.education}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-purple-900">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented attorneys and legal professionals who are passionate 
            about helping clients with their estate planning and probate needs.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-purple-800 text-white font-medium px-8 py-3 rounded-lg hover:bg-purple-700"
          >
            Contact Us About Careers
          </a>
        </div>
      </section>
    </div>
  )
}

export default TeamPage 
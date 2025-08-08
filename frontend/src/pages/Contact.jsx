import { assets } from '../assets/assets'
import { MapPin, Phone, Mail, Briefcase } from 'lucide-react'

const Contact = () => {
  return (
    <div>

      {/* Heading */}
      <div className="text-center pt-14">
        <p className="text-3xl md:text-3xl font-extrabold text-gray-800 tracking-tight relative inline-block">
          CONTACT <span className="text-primary">US</span>
          <span className="block h-1 w-20 bg-primary mx-auto mt-3 rounded-full"></span>
        </p>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base px-4">
          We’d love to hear from you. Reach out to our team for inquiries, support, or career opportunities.
        </p>
      </div>

      {/* Main Content */}
      <div className="my-16 flex flex-col md:flex-row gap-14 items-center md:items-start mb-28 px-6 lg:px-20">

        {/* Contact Image */}
        <img
          className="w-full md:max-w-[380px] rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          src={assets.contact_image}
          alt="Contact Medisure"
        />

        {/* Contact Details */}
        <div className="flex flex-col gap-8 text-gray-600 text-base w-full md:w-2/4">

          {/* Office */}
          <div>
            <p className="font-semibold text-md text-gray-800 flex items-center gap-2">
              <MapPin className="text-primary" /> OUR OFFICE
            </p>
            <p className="mt-2 text-gray-500 leading-relaxed">
              54709 Willms Station <br /> Suite 350, Canada
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="font-semibold text-md text-gray-800 flex items-center gap-2">
              <Phone className="text-primary" /> GET IN TOUCH
            </p>
            <p className="mt-2 text-gray-500 leading-relaxed">
              Tel: <span className="font-medium">64750XXXX</span> <br />
              Email: <a href="mailto:xyz@gmail.com" className="text-primary hover:underline">xyz@gmail.com</a>
            </p>
          </div>

          {/* Careers */}
          <div>
            <p className="font-semibold text-md text-gray-800 flex items-center gap-2">
              <Briefcase className="text-primary" /> CAREERS AT MEDISURE
            </p>
            <p className="mt-2 text-gray-500">Learn more about our teams and job openings.</p>
            <button className="mt-4 border border-primary text-primary px-8 py-3 text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              Explore Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact

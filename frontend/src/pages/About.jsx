import { assets } from '../assets/assets'
import { CheckCircle, Clock, UserCheck } from 'lucide-react'

const About = () => {
  return (
    <div>

      <div className="text-center pt-10">
  <p className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide relative inline-block">
    <span className="text-primary">ABOUT</span> <span className="text-gray-700">US</span>
    <span className="block h-1 w-20 bg-primary mx-auto mt-2 rounded-full"></span>
  </p>
  <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm md:text-base px-4">
    Discover who we are and what drives our mission to make healthcare smarter and more accessible for everyone.
  </p>
</div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to Medisure, your trusted partner in managing your healthcare needs conveniently and efficiently. At Medisure, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
          <p>Medisure is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Medisure is here to support you every step of the way.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision at Medisure is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-10">
        <p className="text-xl font-bold text-gray-800">
          WHY <span className="text-gray-700">CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          {
            title: "EFFICIENCY",
            desc: "Streamlined appointment scheduling that fits into your busy lifestyle.",
            icon: Clock,
          },
          {
            title: "CONVENIENCE",
            desc: "Access to a network of trusted healthcare professionals in your area.",
            icon: UserCheck,
          },
          {
            title: "PERSONALIZATION",
            desc: "Tailored recommendations and reminders to help you stay on top of your health.",
            icon: CheckCircle,
          },
        ].map((item, index) => (
          <div
            key={index}
            className="group border bg-white px-8 py-10 flex flex-col items-center text-center gap-4 rounded-xl shadow-sm hover:shadow-lg hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            <item.icon
              size={36}
              className="text-primary transition-colors duration-300 group-hover:text-white"
            />
            <b className="text-lg">{item.title}</b>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-12 border-t pt-4">
          <strong>Disclaimer:</strong> Medisure is a demonstration project developed solely for educational and portfolio purposes. All doctor profiles, appointments, patient data, and payment transactions shown on this platform are entirely fictitious. No real medical consultations are conducted, and no actual payments are processed. This system is not intended for real-world or commercial use.
        </p>

    </div>
  )
}

export default About

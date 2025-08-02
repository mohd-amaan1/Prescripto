import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className="text-center pt-10">
  <p className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide relative inline-block">
    <span className="text-[#38bdf8]">ABOUT</span> <span className="text-gray-700">US</span>
    <span className="block h-1 w-20 bg-[#38bdf8] mx-auto mt-2 rounded-full"></span>
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

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
        
      </div>
      <p className="text-sm text-gray-500 mt-12 border-t pt-4">
          <strong>Disclaimer:</strong> Medisure is a demonstration project developed solely for educational and portfolio purposes. All doctor profiles, appointments, patient data, and payment transactions shown on this platform are entirely fictitious. No real medical consultations are conducted, and no actual payments are processed. This system is not intended for real-world or commercial use.
        </p>

    </div>
  )
}

export default About

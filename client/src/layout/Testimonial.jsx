import testimonial_img from '../assets/testimonial_img.png'
import germanFlag from '../assets/germanFlag.png'
import { MdFlight } from 'react-icons/md'
const Testimonial = () => {

    const testimonialData = [
        {
            image:testimonial_img,
            countryImg:germanFlag,
            name:"Ananya Sharma",
            course:"Master in Computer Science",
            // rating:5,
             },
              {
            image:testimonial_img,
            countryImg:germanFlag,
            name:"Ananya Sharma",
            course:"Master in Computer Science",
            // rating:5,
             },
              {
            image:testimonial_img,
            countryImg:germanFlag,
            name:"Ananya Sharma",
            course:"Master in Computer Science",
            // rating:5,
             },
              {
            image:testimonial_img,
            countryImg:germanFlag,
            name:"Ananya Sharma",
            course:"Master in Computer Science",
            // rating:5,
             },
             
    ]




  return (
    <section className='py-20 bg-red-50/15'>
        <div className='max-w-7xl mx-auto px-5'>
                 <div className='text-center mb-10 flex justify-center flex-col'>
                                <p className='text-primary mb-4 flex justify-center gap-3 items-center text-sm'>
                                    <span><MdFlight className="text-primary" /></span>
                                    SUCCESS STORIES
                                </p>
                                <h1 className='text-3xl font-bold'>
                                    Real Experiences. Real<span className='text-primary'> Success.</span>
                                </h1>
                                <p className="text-black text-sm my-3">
                                   Hear from our students who turned their dreams into reality.
                                </p>
                                <p className="w-[65px] h-[3px] bg-[#008297] mx-auto mt-3"></p>
                            </div>
<div className='flex gap-5'>
{testimonialData.map((testimonial,index)=>(
    <div key={index} className="bg-[#F5F5F5] rounded-lg p-5 shadow-md flex flex-col gap-3">
        <div className="w-full h-[220px] rounded-md overflow-hidden">
            <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover"/>
        </div>
        <div>
            <p className="text-sm text-gray-600 flex items-center gap-2"><span><img src={testimonial.countryImg} alt="Country" className="w-4 h-4"/></span>{testimonial.course}</p>
            <h3 className="text-sm font-semibold my-2">{testimonial.name}</h3>
            <p className="text-xs text-gray-700 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="text-xs text-gray-600 mt-2">{testimonial.rating} ⭐⭐⭐⭐⭐</p>
        </div>
    </div>
))}

        </div>
        <div className='flex justify-center'>

        <button className='mt-10 bg-primary text-white px-6 py-2 text-sm rounded-full hover:bg-primary/90 transition'>View All Testimonials</button>
        </div></div>
    </section>
  )
}

export default Testimonial
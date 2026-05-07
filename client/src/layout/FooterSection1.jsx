import { BriefcaseBusiness, Mail, MapPin, Plane, GraduationCap } from 'lucide-react';
import logo from '../assets/logo.png';
import map2 from '../assets/map2.png';
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";



const FooterSection1 = () => {
  return (
    <section className='bg-secondary py-10' style={{backgroundImage:`url(${map2})`, backgroundSize:'contain', backgroundPosition:'right',backgroundRepeat:'no-repeat', backgroundBlendMode:'luminosity'}}>
        <div className='max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8'>

<div>
    <div><img src={logo} alt="Logo" /></div>
    <div className='flex gap-8'>
<GraduationCap className='text-2xl text-[#008297]' size={32}/>
<BriefcaseBusiness className='text-2xl text-[#008297]' size={32} />
<Plane className='text-2xl text-[#008297]' size={32} />
    </div>
</div>

<div>
<h3 className='after:content-[""] after:block after:w-8 after:h-1 after:bg-white after:mt-2 text-white'>About Us</h3>
   
    <p className='text-white text-xs my-2'>Since 2012, Medcity International Overseas Corporation has been offering gamut of Professional Services to students who inspire to study overseas and proficient professionals who dream of working overseas.</p>
<button type="button" className='border border-primary text-white bg-primary py-2 px-4 rounded-full text-xs my-3'>Learn More</button>

</div>
<div className='flex flex-col gap-1'>
    <h3 className='after:content-[""] after:block after:w-8 after:h-1 after:bg-white after:mt-2 text-white'>Contact Us</h3>
     <p className='text-white text-xs my-2 flex gap-3 items-center'><span><MapPin className='text-primary'/></span>Medcity International Overseas Corporation,
Chettipeedika, Kannur - 4, Kerala, India.</p>
  <p className='text-white text-xs my-2 flex gap-3 items-center'><span><Mail className='text-primary'/></span>
info@mioc.in</p>

</div>

<div className="flex flex-col h-full">
  
  {/* other content */}

  <div className="mt-auto flex gap-3">
    <div className="size-12 bg-primary rounded-full grid place-content-center">
      <IoLogoInstagram className="text-white text-xl" />
    </div>
    <div className="size-12 bg-primary rounded-full grid place-content-center">
      <FaFacebookF className="text-white text-xl" />
    </div>
    <div className="size-12 bg-primary rounded-full grid place-content-center">
      <IoLogoInstagram className="text-white text-xl" />
    </div>
    <div className="size-12 bg-primary rounded-full grid place-content-center">
      <FaFacebookF className="text-white text-xl" />
    </div>
  </div>

</div>

        </div>

    </section>
  )
}

export default FooterSection1
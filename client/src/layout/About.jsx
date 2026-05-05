import about_img from '../assets/about_us_img.png';

import { ArrowRight, Backpack, BadgeDollarSign, FileCheck, Globe, GraduationCap, UserRoundCheck, UsersRound } from "lucide-react";

const About = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto flex flex-col items-center justify-center md:flex-row gap-2 md:justify-between px-5 my-8'>
       
        <div className='w-full md:w-1/2 py-10'>
<h1 className="text-md font-bold mb-4 text-primary">
  ABOUT US

  <span className="flex items-center gap-1 mt-2">
    <span className="w-4 h-[3px] bg-primary"></span>
    <span className="w-16 h-[3px] bg-gray-300"></span>
  </span>
</h1>

<h1 className='text-3xl font-bold text-secondary mb-1'>EMPOWERING DREAMS</h1>
<h1 className='text-3xl font-bold text-primary'>BUILDING GLOBAL FUTURES</h1>
<p className='text-sm py-1 pt-5'>
    At Medcity International, we believe education is the key to a boundless future. For over a decade, we've been dedicated to helping students explore global opportunities and achieve their academic and career aspirations.
</p>
<p className='text-sm py-1'>
From choosing the right course to securing a visa, we're with you every step of the way.
</p>
<p className='text-sm py-1'>
  Our experienced counselors provide personalized guidance tailored to each student's goals, ensuring a smooth and confident journey toward international education.
</p>

<p className='text-sm py-1'>
  With strong partnerships across top universities worldwide, we open doors to quality education, scholarships, and career-enhancing opportunities.
</p>

<p className='text-sm py-1'>
  At Medcity International, your success is our priority, and we are committed to turning your dreams into reality.
</p>

<div className='flex gap-2 justify-between bg-secondary shadow-sm rounded-lg px-3 py-3 mt-10'>

    <div className='flex flex-col gap-1 border-r border-gray-300 w-[30%]'>
<GraduationCap className='text-primary size-10'/>
        <h1 className='text-lg font-bold text-white mb-1'>500+</h1>
        <h1 className='text-sm text-white'>Universities</h1>

    </div>
      <div className='flex flex-col gap-1 border-r border-gray-300 w-[30%]'>
<UsersRound className='text-primary size-10'/>
        <h1 className='text-lg font-bold text-white mb-1'>50K+</h1>
        <h1 className='text-sm text-white'>Students</h1>

    </div>
      <div className='flex flex-col gap-1 border-gray-300 w-[30%]'>
<Globe className='text-primary size-10'/>
        <h1 className='text-lg font-bold text-white mb-1'>30+</h1>
        <h1 className='text-sm text-white'>Countries</h1>

    </div>
</div>
              </div>

     <div className='w-1/2 p-10 md:pe-0'>
       <img src={about_img} alt="About Us" className='w-full h-auto rounded-lg shadow-sm object-bottom' />
     </div>
     
     </div>
    </>
  )
}

export default About
import { BriefcaseBusiness, Globe, GraduationCap } from 'lucide-react'
import bgMap from "../assets/map2.png";
import aeroplane1 from "../assets/aeroplane_1.png";
import StudyTab from './StudyTab';

const Programs = () => {
  return (
    <>
       <div className='max-w-7xl mx-auto flex flex-col justify-center md:flex-row gap-6 md:justify-between px-5 my-8 bg-no-repeat bg-[position:top_right] relative' style={{ backgroundImage: `url(${bgMap})` }}>
       <div className="absolute top-[35px] right-[110px]"><img src={aeroplane1} alt="Aeroplane" className="w-[70px]"/></div>
        <div className='w-full md:grid-cols-2 py-10 mt-10 place-content-center'>
<h1 className="text-md font-bold mb-5 text-primary">
  EXPLORE OUR PROGRAMS

  <span className="flex items-center gap-1 mt-2">
    <span className="w-4 h-[3px] bg-primary"></span>
    <span className="w-16 h-[3px] bg-gray-300"></span>
  </span>
</h1>


<h1 className='text-3xl font-bold text-secondary mb-2'>Unlock Global Opportunities:</h1>
<h1 className='text-md font-semibold text-primary'>Your Gateway to International Education and Immigration Success.</h1>
<p className='text-sm py-2 pb-3'>
   A seamless study visa process opens the door to world-class education and global careers. With the right support and expertise, your journey from student to global professional becomes effortless.
</p>

<div className='tabs bg-gray-50 shadow-sm grid grid-cols-3 justify-center rounded-lg mt-5'>
    <button className='text-primary flex p-4 gap-3 border border-gray-100 border-b-primary'>

        <span><GraduationCap /></span>
        <span className='text-sm'>Study</span></button>
          <button className='text-black flex p-4 gap-3 border border-gray-200'>

        <span><BriefcaseBusiness /> </span>
        <span className='text-sm'>Work</span></button>

        <button className='text-black flex p-4 gap-3 border border-gray-200'>

        <span><Globe /></span>
        <span className='text-sm'>Migrate</span></button>



</div>
        <div className='text-sm p-8 flex gap-2 bg-gray-50 shadow-md'> 
            <p className='text-xs'>Access world-class education
and unlock global opportunities.
</p>
<p className='text-xs pb-2'>Build your career with global
exposure and experience.</p>
<p className='text-xs'>Achieve permanent residency 
and secure your future.</p>
        </div>

</div>


<div className='w-full md:grid-cols-2 py-10 mt-10'>
<StudyTab />
</div>



</div>
    </>
  )
}

export default Programs
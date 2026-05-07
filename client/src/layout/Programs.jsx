// import { BriefcaseBusiness, Globe, GraduationCap } from 'lucide-react'
// import bgMap from "../assets/map2.png";
// import aeroplane1 from "../assets/aeroplane_1.png";
// import StudyTab from './StudyTab';

// const Programs = () => {
//   return (
//     <>
//        <div className='max-w-7xl mx-auto flex flex-col justify-center md:flex-row gap-6 md:justify-between px-5 my-8 bg-no-repeat bg-[position:top_right] relative' style={{ backgroundImage: `url(${bgMap})` }}>
//        <div className="absolute top-[35px] right-[110px]"><img src={aeroplane1} alt="Aeroplane" className="w-[70px]"/></div>
//         <div className='w-full md:grid-cols-2 py-10 mt-10 place-content-center'>
// <h1 className="text-md font-bold mb-5 text-primary">
//   EXPLORE OUR PROGRAMS

//   <span className="flex items-center gap-1 mt-2">
//     <span className="w-4 h-[3px] bg-primary"></span>
//     <span className="w-16 h-[3px] bg-gray-300"></span>
//   </span>
// </h1>


// <h1 className='text-3xl font-bold text-secondary mb-2'>Unlock Global Opportunities:</h1>
// <h1 className='text-md font-semibold text-primary'>Your Gateway to International Education and Immigration Success.</h1>
// <p className='text-sm py-2 pb-3'>
//    A seamless study visa process opens the door to world-class education and global careers. With the right support and expertise, your journey from student to global professional becomes effortless.
// </p>

// <div className='tabs bg-gray-50 shadow-sm grid grid-cols-3 justify-center rounded-lg mt-5'>
//     <button className='text-primary flex p-4 gap-3 border border-gray-100 border-b-primary'>

//         <span><GraduationCap /></span>
//         <span className='text-sm'>Study</span></button>
//           <button className='text-black flex p-4 gap-3 border border-gray-200'>

//         <span><BriefcaseBusiness /> </span>
//         <span className='text-sm'>Work</span></button>

//         <button className='text-black flex p-4 gap-3 border border-gray-200'>

//         <span><Globe /></span>
//         <span className='text-sm'>Migrate</span></button>



// </div>
//         <div className='text-sm p-8 flex gap-2 bg-gray-50 shadow-md'> 
//             <p className='text-xs'>Access world-class education
// and unlock global opportunities.
// </p>
// <p className='text-xs pb-2'>Build your career with global
// exposure and experience.</p>
// <p className='text-xs'>Achieve permanent residency 
// and secure your future.</p>
//         </div>

// </div>


// <div className='w-full md:grid-cols-2 py-10 mt-10'>
// <StudyTab />
// </div>



// </div>
//     </>
//   )
// }

// export default Programs



import { BriefcaseBusiness, Globe, GraduationCap } from "lucide-react";
import bgMap from "../assets/map2.png";
import aeroplane1 from "../assets/aeroplane_1.png";
import StudyTab from "./StudyTab";

const Programs = () => {
  return (
    <div
      className="max-w-7xl mx-auto px-5 my-8 relative 
      flex flex-col md:flex-row gap-8 md:gap-12 
      bg-no-repeat bg-right-top md:bg-right-top"
      style={{ backgroundImage: `url(${bgMap})` }}
    >
      {/* ✈️ Airplane */}
      <img
        src={aeroplane1}
        alt="Aeroplane"
        className="hidden md:block absolute top-10 right-20 w-[70px] lg:w-[90px]"
      />

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 py-6 md:py-10">
        <h1 className="text-sm sm:text-md font-bold mb-4 text-primary">
          EXPLORE OUR PROGRAMS
          <span className="flex items-center gap-1 mt-2">
            <span className="w-4 h-[3px] bg-primary"></span>
            <span className="w-16 h-[3px] bg-gray-300"></span>
          </span>
        </h1>

        {/* Heading */}
        <h1 className="text-[clamp(22px,4vw,32px)] font-bold text-secondary mb-2">
          Unlock Global Opportunities:
        </h1>

        <h2 className="text-sm sm:text-base font-semibold text-primary">
          Your Gateway to International Education and Immigration Success.
        </h2>

        <p className="text-xs sm:text-sm py-3 text-gray-600">
          A seamless study visa process opens the door to world-class education
          and global careers. With the right support and expertise, your journey
          from student to global professional becomes effortless.
        </p>

        {/* Tabs */}
        <div className="grid grid-cols-3 bg-gray-50 shadow-sm rounded-lg mt-5 overflow-hidden text-xs sm:text-sm">
          <button className="text-white bg-secondary flex items-center justify-center gap-2 p-10">
            <GraduationCap size={24} />
            Study
          </button>

          <button className="flex items-center justify-center gap-2 p-10 border-l border-gray-200">
            <BriefcaseBusiness size={24} />
            Work
          </button>

          <button className="flex items-center justify-center gap-2 p-10 border-l border-gray-200">
            <Globe size={24} />
            Migrate
          </button>
        </div>

        {/* Info box */}
        <div className="mt-5 bg-gray-50 shadow-md rounded-lg p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-3 text-xs sm:text-xs md:text-sm">
          <p className="text-sm">Access world-class education and unlock global opportunities.</p>
          <p className="text-sm">Build your career with global exposure and experience.</p>
          <p className="text-sm">Achieve permanent residency and secure your future.</p>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 py-6 md:py-10">
        <StudyTab />
      </div>
    </div>
  );
};

export default Programs;
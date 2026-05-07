
import { BadgeDollarSign, Building2, CalendarDays, Globe, GraduationCap, Mail, NotebookText, Phone, SquarePen, UserRound, UserRoundCheck } from "lucide-react";
import aeroplane1 from "../assets/aeroplane_1.png";
import form_img from "../assets/form_img.png";
import form_img2 from "../assets/form_img2.png";
import {UsersRound} from "lucide-react";


const FormSection = () => {
  return (
    <section className="bg-[#F5F5F5]/70 py-10">
    <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-5 my-10'>

        <div className='flex relative'>
           <div className="flex flex-col w-1/2"> <div className="absolute top-[-39px] right-[146px]"><img src={aeroplane1} alt="Aeroplane" className="w-[70px]"/></div>
                   <h1 className="text-md font-bold mb-4 text-[#008297]">
   STUDY ABROAD

  <span className="flex items-center gap-1 mt-2">
    <span className="w-4 h-[3px] bg-[#008297]"></span>
    <span className="w-16 h-[3px] bg-gray-300"></span>
  </span>
</h1>
<h1 className='text-3xl font-bold text-secondary my-2'>Your Future.</h1>
<h1 className='text-[#008297] text-3xl font-bold'>Beyond Borders.</h1>

<p className='my-3 text-sm'>We help you access world-class education and global opportunities to build a successful tomorrow.</p>
<p className="my-2 flex gap-2 text-sm"><span><SquarePen className="text-[#008297]"/></span>Test preparations</p>
<p className="my-2 flex gap-2 text-sm"><span><NotebookText className="text-primary"/></span>Study without IELTS</p>
<p className="my-2 flex gap-2 text-sm"><span><BadgeDollarSign className="text-[#008297]"/></span>Study with scholarships</p>
<p className="my-2 flex gap-2 text-sm"><span><UserRoundCheck className="text-primary"/></span>Personalized guidance</p>
        </div>
        
        <div className="w-1/2"><img src={form_img} alt="Form" className="w-full h-auto object-cover"/></div>

        <div className="absolute z-10 w-full h-[155px] bg-cover bg-no-repeat bg-bottom rounded-lg bottom-[10px] shadow-lg" style={{backgroundImage:`url(${form_img2})`}}>
<blockquote className="text-lg font-semibold text-center mt-5">
          <span className='text-5xl text-primary font-bold'>"</span><span className="text-white">Your ambition. Our guidance. A world of opportunities.</span>
        </blockquote>


        </div>
        </div>


        <div className="grid grid-cols-1 gap-3 p-7 pt-4 shadow-lg rounded-lg mt-5">

              <div className="flex gap-5 mb-3">
              <div><span className="bg-white shadow-md p-3 rounded-full size-14 grid place-content-center"><UsersRound className="text-[#008297]" size={28}/></span></div>
          
            <div><p className="text-2xl font-semibold flex gap-3 items-center">
                
              Let's Build Your <span className="text-primary">Future</span></p>
            <p className="text-sm text-gray-700 my-2"> Fill in your details and our experts will connect with you.</p>
            <p className="w-[35px] h-[3px] bg-[#008297]"></p>
            </div></div>
            

  <div className="flex gap-5 mb-1">
  <div className="w-full md:w-1/2">
    <label for="firstName" className="text-xs">First Name <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><UserRound className="text-gray-900" size={16}/></span>
    <input type="text" id="firstName" placeholder="First name" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
    <div className="w-full md:w-1/2">
    <label for="lastName" className="text-xs">Last Name <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><UserRound className="text-gray-900" size={16}/></span>
    <input type="text" id="lastName" placeholder="Last name" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div></div>

<div className="flex gap-5 mb-1">
   <div className="w-full md:w-1/2">
    <label for="email" className="text-xs">Email <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><Mail className="text-gray-900" size={16}/></span>
    <input type="email" id="email" placeholder="Email" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
    <div className="w-full md:w-1/2">
    <label for="mobile" className="text-xs">Mobile Number <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><Phone className="text-gray-900" size={16}/></span>
    <input type="tel" id="mobile" placeholder="Mobile number" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div></div>
  <div className="flex gap-5 mb-1">
   <div className="w-full md:w-full">
    <label for="studyDestination" className="text-xs">Study Destination <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><Globe className="text-gray-900" size={16}/></span>
    <input type="text" id="studyDestination" placeholder="Select Destination" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
   </div>
  <div className="flex gap-5 mb-1">
   <div className="w-full md:w-1/2">
    <label for="month" className="text-xs">Intake <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><CalendarDays className="text-gray-900" size={16}/></span>
    <input type="text" id="month" placeholder="Select Month" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
    <div className="w-full md:w-1/2">
    <label for="year" className="text-xs">Year <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><CalendarDays className="text-gray-900" size={16}/></span>
    <input type="text" id="year" placeholder="Select Year" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div></div>
  <div className="flex gap-5 mb-1">

    <div className="w-full md:w-1/2">
    <label for="qualification" className="text-xs">Qualification <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><GraduationCap className="text-gray-900" size={16}/></span>
    <input type="text" id="qualification" placeholder="Select Degree" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
    <div className="w-full md:w-1/2">
    <label for="branch" className="text-xs">Branch <span className="text-primary">*</span></label>
    <div className="border border-gray-400 rounded-md p-2 mt-1 flex gap-3 items-center">
      <span><Building2 className="text-gray-900" size={16}/></span>
    <input type="text" id="branch" placeholder="Select Branch" className="border-none text-xs w-full h-full bg-transparent outline-none text-gray-900"/>
  </div>
  </div>
  
  </div>
  <div className="flex gap-5 mb-1 mt-3 justify-center">
    <button type="button" className="bg-primary rounded-full py-2 px-10 text-white text-sm hover:cursor-pointer hover:bg-secondary">Submit</button>
  </div>
  


        

        </div>

    </div>
    </section>
  
  )
}

export default FormSection



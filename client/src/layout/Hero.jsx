// import heroBgLayerOne from "../assets/heroBgLayerOne.webp";
import candidatePic from "../assets/boy.png";
// import map_bg from "../assets/map_bg.png";
import heroBg1 from "../assets/heroBg_1.png";
import map2 from "../assets/map2.png";
import aeroplane1 from "../assets/aeroplane_1.png";
import { ArrowRight, Backpack, BadgeDollarSign, FileCheck, Globe, GraduationCap, UserRoundCheck, UsersRound, ShieldCheck } from "lucide-react";
import ukFlag from "../assets/ukFlag.png";
import canadaFlag from "../assets/canadaFlag.png";
import ausFlag from "../assets/ausFlag.png";
import usaFlag from "../assets/usaFlag.png";
import germanFlag from "../assets/germanFlag.png";
import irelandFlag from "../assets/irelandFlag.png";
import singaporeFlag from "../assets/singaporeFlag.png";
import franceFlag from "../assets/franceFlag.png";
import 'animate.css';



const Hero = () => {
    return (
        <>
            <div className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat mx-auto" style={{ backgroundImage: `url(${heroBg1})`, backgroundAttachment: `fixed`     }}>
<div className="mt-36">


<div className="grid grid-cols-1 md:grid-cols-4 mt-10 max-w-7xl mx-auto gap-10 px-5 mb-10">
    <div className="col-span-1">
        <div className="flex gap-2 mb-10">
    <div className="bg-primary text-white p-2 rounded-full text-sm grid place-content-center cursor-pointer">UK</div>
    <div className="bg-transparent text-primary px-2 py-1 border border-primary rounded-full text-sm place-content-center cursor-pointer">CANADA</div>
    <div className="bg-transparent text-primary px-2 py-1 border border-primary rounded-full text-sm place-content-center cursor-pointer">AUSTRALIA</div>
    <div className="bg-transparent text-primary px-2 py-1 border border-primary rounded-full text-sm place-content-center cursor-pointer">USA</div>
    <div className="bg-transparent text-primary px-2 py-1 border border-primary rounded-full text-sm place-content-center cursor-pointer">GERMANY</div>
</div>
         <h3 className="text-2xl font-bold font-noto"><span className="block py-1">YOUR FUTURE </span> <span className="text-primary">NO BOUNDARIES</span></h3>
         <p className="text-sm text-secondary mt-2 before:content-[''] before:block before:w-10 before:h-[3px] before:bg-primary before:mb-2">We connect ambitious students
to world-class universities and
endless global opportunities.</p>



    </div>
     <div className="col-span-2 grid place-content-center relative mt-[-6px]" style={{ backgroundImage: `url(${map2})`, backgroundSize: 'cover'}}>
         <div className="absolute top-[-35px] right-[110px]"><img src={aeroplane1} alt="Aeroplane" className="w-[70px] animate__animated animate__fadeOutTopRight animate__delay-1s"/></div>
<div className="size-[320px] rounded-full bg-[linear-gradient(180deg,#f9b0aed6,transparent)] absolute left-[106px] top-[20px]">
   

</div>
        <h1 className="text-[150px] pt-[125px] leading-[115px] font-sans font-extrabold text-secondary absolute animate__animated animate__zoomIn"><span>STUDY </span><span className="text-primary">ABROAD</span></h1>
       <img src={candidatePic} alt="Candidate" className="w-48 sm:w-64 md:w-80 lg:w-[320px] 
             absolute left-1/2 -translate-x-1/2 
             top-20 sm:top-16 md:top-14"/>
    </div>
     <div className="col-span-1 flex gap-2 justify-between">
        <div className=""><p className="text-primary mb-2"><GraduationCap size={34}/></p>
            <p className="font-semibold text-2xl">500+</p>
            <p className="text-xs">Universities</p>

        </div>
        <div className=""><p className="text-primary mb-2"><UsersRound size={34}/></p>
            <p className="font-semibold text-2xl">50K+</p>
            <p className="text-xs">Students</p>

        </div>
        <div className=""><p className="text-primary mb-2"><Globe size={34}/></p>
            <p className="font-semibold text-2xl">20+</p>
            <p className="text-xs">Countries</p>

        </div>
    </div>
   
</div>
<div className="max-w-7xl mx-auto flex mt-44 justify-between px-5">
<div className="flex gap-5 bg-[linear-gradient(to_right,#fff_70%,transparent_98%)] rounded-3xl p-6 shadow-sm mt-5 [clip-path:path('M0_0_Q180_30_360_0_V120_Q180_90_0_120_Z')]">
    <img src={ukFlag} alt="UK Flag" className="size-14 rounded-full border border-gray-200"/>
     <img src={canadaFlag} alt="Canada Flag" className="size-14 rounded-full border border-gray-200"/>
     <img src={ausFlag} alt="Australia Flag" className="size-14 rounded-full border border-gray-200"/>
     <img src={usaFlag} alt="USA Flag" className="size-14 rounded-full border border-gray-200"/>
    
</div>
<div className="flex gap-5 
bg-[linear-gradient(to_left,#fff_70%,transparent_98%)] 
rounded-3xl p-6 shadow-sm mt-5 
[clip-path:path('M0_0_Q180_30_360_0_V120_Q180_90_0_120_Z')]">

  {/* flip content back */}
  <div className="flex gap-5 scale-x-[-1]">
   
    <img src={franceFlag} className="size-14 rounded-full border border-gray-200"/>
    <img src={singaporeFlag} className="size-14 rounded-full border border-gray-200"/>
    <img src={irelandFlag} className="size-14 rounded-full border border-gray-200"/>
     <img src={germanFlag} alt="Germany Flag" className="size-14 rounded-full border border-gray-200"/>
  </div>

</div>
</div>

<div>
<div className="max-w-7xl mx-auto flex justify-between mt-40 px-5">

   <div className="flex gap-5"> <div className="flex gap-3">
        <span className="text-primary block"><UserRoundCheck size={40}/></span>
        <p className="text-sm text-secondary font-semibold">Expert <br /> Guidance</p>
        
    </div>
    <div className="flex gap-3">
        <span className="text-primary block"><FileCheck size={40}/></span>
        <p className="text-sm text-secondary font-semibold">Visa <br /> Assistance</p>
    </div>
   
      <div className="flex gap-3">
        <span className="text-primary block"> <BadgeDollarSign size={40}/></span>
        <p className="text-sm text-secondary font-semibold">Scholarship <br /> Support</p>
    </div>
      <div className="flex gap-3">
        <span className="text-primary block"><Backpack size={40}/></span>
        <p className="text-sm text-secondary font-semibold">Travel <br /> Support</p>
    </div></div>
    <div>
        <button className="bg-primary cursor-pointer hover:bg-secondary text-white py-4 px-5 rounded-full flex gap-1 justify-center text-sm"><span>Explore More</span> <ArrowRight size={20}/></button>
        <p className="text-xs mt-2 mr-2 flex"><span><ShieldCheck size={16} className="text-primary mx-2"/></span>Trusted by <span className="mx-1 font-bold text-primary">50K+</span> students worldwide</p>
    </div>



</div>
</div>





            </div></div>
        </>
    )
}

export default Hero
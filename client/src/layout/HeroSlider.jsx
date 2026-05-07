import aeroplane1 from "../assets/aeroplane_1.png";
import candidateHero from "../assets/candidateHero.png";
import heroBg2 from "../assets/heroBg_2.png";
import { ArrowRight, Backpack, BadgeDollarSign, FileCheck, Globe, GraduationCap, UserRoundCheck, UsersRound, ShieldCheck, Globe2 } from "lucide-react";
import SearchBar from "./SearchBar";
import map2 from '../assets/map2.png';


const HeroSlider = () => {
  return (
    <section className="relative w-full h-[80%] overflow-hidden bg-white pt-24">
        <div className="max-w-7xl mx-auto px-5">
   <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 pt-10 md:pt-12">

    {/* LEFT CONTENT */}
    <div className="flex flex-col gap-3 relative text-center md:text-left animate__animated animate__backInLeft">


        <img
            src={aeroplane1}
            alt="Aeroplane"
            className="absolute right-10 top-[-90px] w-16 md:w-28 rotate-12"
        />

        <h1 className="font-bold leading-tight text-3xl sm:text-4xl lg:text-4xl">
            <span className="text-4xl sm:text-5xl lg:text-6xl">Y</span>our{" "}
            <span className="text-4xl sm:text-5xl lg:text-6xl">I</span>nternational{" "}
            <span className="text-4xl sm:text-5xl lg:text-6xl">J</span>ourney{" "}
            <span className="text-primary block mt-2">
                <span className="text-4xl sm:text-5xl lg:text-6xl">B</span>egins{" "}
                <span className="text-4xl sm:text-5xl lg:text-6xl">H</span>ere
            </span>
        </h1>

        <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto md:mx-0 my-3">
            We make studying abroad simple, seamless and life-changing.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">

            <button className="bg-primary text-white py-3 px-6 rounded-full text-sm hover:bg-secondary transition-all duration-300">
                Book Free Counselling
            </button>

            <button className="bg-white border border-primary text-black py-3 px-6 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-300">
                Learn More
            </button>

        </div>
        <div style={{backgroundImage:`url(${map2})`}} className="w-full h-28 bg-contain bg-right flex gap-3 pt-5">
           
        </div>
    </div>


   
    {/* <div className="relative flex justify-center items-end min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-cover bg-center"
        style={{
            backgroundImage: `url(${heroBg})`,
        }}
    >
        <img
            src={candidateHero}
            alt="Candidate Hero"
            className="w-full max-w-sm sm:max-w-md md:max-w-sm object-contain"
        />
    </div> */}


<div className="relative flex justify-center items-end w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl animate__animated animate__fadeInDown"
        style={{
            backgroundImage: `url(${heroBg2})`,
        }}
    >

<img
            src={candidateHero}
            alt="Candidate Hero"
            className="w-full max-w-sm sm:max-w-md md:max-w-sm object-contain animate__animated animate__backInRight"
        />

        <div className="bg-white p-3 rounded-md shadow-md mb-6">
            <Globe2 />
            <p className="font-bold text-primary text-md">25,000 +</p>
            <p className="text-xs text-gray-800">Students placed world wide</p>
        </div>


</div>

        </div>



        <SearchBar />
        </div>
    </section>
  )
}

export default HeroSlider
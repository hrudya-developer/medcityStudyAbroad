import { Cog, Computer, HeartPlus, Palette, ShoppingCart } from "lucide-react"
import art_img from "../assets/art_img.png";
import engg_img from "../assets/engg_img.png";
import mba_img from "../assets/mba_img.png";
import { BriefcaseBusiness } from 'lucide-react';
import cse_img from "../assets/cse_img.png";
import health_img from "../assets/health_img.png";
import commerce_img from "../assets/commerce_img.png";

const StudyTab = () => {
    const studyData = [
        {
            image: art_img,
            title: "Arts",
            icon:<Palette />,
            desc:"Unleash creativity and express your imagination."
        },
    {
         image: engg_img,
            title: "Engineering",
            icon:<Cog />,
            desc:"Innovate, build, and shape the future."
    },
        {
            image: mba_img,
            title: "Business Administration",
            icon:<BriefcaseBusiness />,
            desc:"Lead, manage and drive successful organizations."
        },
    {
         image: cse_img,
            title: "Computer Science & Information Technology",
            icon:<Computer />,
            desc:"Code the future with technology and innovation."
    },
   {
            image: health_img,
            title: "Health",
            icon:<HeartPlus />,
            desc:"Improve lives and build a healthier tomorrow."
        },
    {
         image: commerce_img,
            title: "Commerce",
            icon:<ShoppingCart />,
            desc:"Understand markets and create global impact."
    },
    ]


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        
{studyData.map((item,index)=>(
<div key={index} className=" bg-gray-100 shadow-sm rounded-lg p-4">
    <div className="relative"><img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded-md"/>
    <div className="absolute z-10 p-2 bg-primary text-white bottom-[-17px] left-[5%] rounded-full">   <span className="" size={10}>{item.icon}</span></div>
 </div>
    <h1 className="font-semibold text-sm mt-8 ps-2">{item.title}</h1>
    {/* <p className="text-xs mt-1 ps-2">{item.desc}</p> */}
    </div>
))}

    </div>
  )
}

export default StudyTab
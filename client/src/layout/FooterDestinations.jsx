
import uk_img from '../assets/uk_img.png';
import aeroplane from '../assets/aeroplane_1.png';
import { ArrowRight, FileText, Globe, Headset, ShieldCheck } from 'lucide-react';

const FooterDestinations = () => {

    const destinations = [
        {name:"UK",
            image:uk_img,
        },
         {name:"USA",
            image:uk_img,
        },
         {name:"Germany",
            image:uk_img,
        },
         {name:"Australia",
            image:uk_img,
        },
         {name:"New Zealand",
            image:uk_img,
        },
         {name:"Ireland",
            image:uk_img,
        },
              {name:"UK",
            image:uk_img,
        },
         {name:"USA",
            image:uk_img,
        },
         {name:"Germany",
            image:uk_img,
        },
         {name:"Australia",
            image:uk_img,
        },
         {name:"New Zealand",
            image:uk_img,
        },
         {name:"Ireland",
            image:uk_img,
        },
         
         {name:"Australia",
            image:uk_img,
        },
         {name:"New Zealand",
            image:uk_img,
        },
         {name:"Ireland",
            image:uk_img,
        },
    ]


  return (
    <section className='bg-[#f5fafe]'>
        <div className='max-w-7xl mx-auto px-5 py-16'>
            <div className='flex justify-center'>
                <img src={aeroplane} alt="aeroplane" className='w-16 h-16 [transform:rotateX(45deg)]'/>
           
            </div>
            <h1 className='text-3xl font-bold text-center'>Explore Top <span className='text-[#008297]'>Study Destinations</span></h1>
            <p className='text-center text-gray-600 text-sm my-4'>
              Choose your dream destination and start your global journey today!
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10'>
                {destinations.map((destination,index) => (
                    <div key={index} className='flex gap-3 items-center bg-gray-50 p-5 rounded-lg shadow-[0_0_10px_rgba(0,130,151,0.5)]'>
                        <img src={destination.image} alt={destination.name} className='size-16 rounded-full'/>
                       <div className='flex flex-col gap-3 font-semibold'><h3 className='flex items-center gap-3 text-sm'>{destination.name} <span className='text-[#008297]'><ArrowRight size={16}/></span></h3>
                        <div className='w-4 h-1 bg-[#008297]'></div></div>
                    </div>
                ))}
            </div>

            <div className='mt-10 flex rounded-lg shadow-md bg-white'>
                <div className='flex gap-3 p-5'>
                    <div className='size-11 rounded-full bg-[#008297] grid place-content-center'><Headset className='text-white'/></div>
                    <div>
                        <h3 className='text-secondary text-xs font-bold mb-1'>Expert Guidance</h3>
                        <p className='text-gray-800 text-xs'>Personalized support every step of the way.</p>
                    </div>
                </div>
                   <div className='flex gap-3 p-5'>
                    <div className='size-11 rounded-full bg-[#008297] grid place-content-center'><ShieldCheck className='text-white'/></div>
                    <div>
                        <h3 className='text-secondary text-xs font-bold mb-1'>Trusted by Thousands</h3>
                        <p className='text-gray-800 text-xs'>12+ years of experience & global presence.</p>
                    </div>
                </div>
                  <div className='flex gap-3 p-5'>
                    <div className='size-11 rounded-full bg-[#008297] grid place-content-center'><FileText className='text-white'/></div>
                    <div>
                        <h3 className='text-secondary text-xs font-bold mb-1'>Visa Assistance</h3>
                        <p className='text-gray-800 text-xs'>End-to-end help for a hastle-free process.</p>
                    </div>
                </div>
                  <div className='flex gap-3 p-5'>
                    <div className='size-11 rounded-full bg-[#008297] grid place-content-center'><Globe className='text-white'/></div>
                    <div>
                        <h3 className='text-secondary text-xs font-bold mb-1'>Global Opportunities</h3>
                        <p className='text-gray-800 text-xs'>Unlock your future with world-class education.</p>
                    </div>
                </div>
            </div>




          </div>
          <div className='bg-secondary text-white text-center p-5 text-xs'>
            <p>© 2026 Medcity International Overseas Corporation. All rights reserved.
</p>
          </div>
    </section>
    
  )
}

export default FooterDestinations
import { MdFlight } from "react-icons/md";
import uk_img from "../assets/uk_img.png";
import { GiChurch } from "react-icons/gi";
import germany_img from "../assets/germany_img.png";

const Destinations = () => {

    const destinationInfo = [
        {
            number: "01",
            image: uk_img,
            place: "UK",
            icon: <GiChurch />,
            desc1: "World-class education",
            desc2: "Rich cultural heritage",
        },
         {
            number: "02",
            image: germany_img,
            place: "Germany",
            icon: <GiChurch />,
            desc1: "World-class education",
            desc2: "Rich cultural heritage",
        },
         {
            number: "03",
            image: uk_img,
            place: "Australia",
            icon: <GiChurch />,
            desc1: "World-class education",
            desc2: "Rich cultural heritage",
        },
         {
            number: "04",
            image: uk_img,
            place: "USA",
            icon: <GiChurch />,
            desc1: "World-class education",
            desc2: "Rich cultural heritage",
        },
    
    ]

    return (
        <section id="_destinationWrapper" className='py-20'>
            <div className='max-w-7xl mx-auto px-5'>

                {/* Header */}
                <div className='text-center mb-10 flex justify-center flex-col'>
                    <p className='text-primary mb-4 flex justify-center gap-3 items-center text-sm'>
                        <span><MdFlight className="text-primary" /></span>
                        EXPLORE. LEARN. GROW
                    </p>
                    <h1 className='text-3xl font-bold'>
                        Dream <span className='text-primary'>Destinations</span>
                    </h1>
                    <p className="text-black text-sm my-3">
                        Choose your perfect study abroad destination and unlock a world of opportunities.
                    </p>
                    <p className="w-[65px] h-[3px] bg-[#008297] mx-auto mt-3"></p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {destinationInfo.map((destination) => (
                        <div
                            key={destination.number}
                            className='rounded-xl overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-shadow duration-300 bg-white group'
                        >
                            {/* Image with number badge */}
                            <div className="relative">
                                <img
                                    src={destination.image}
                                    alt={destination.place}
                                    className='w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300'
                                />
                                {/* Number Badge */}
                                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                                    {destination.number}
                                </span>
                            </div>

                            {/* Card Body */}
                            <div className='p-4'>
                                {/* Place + Icon */}
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className='text-lg font-bold'>{destination.place}</h2>
                                    <span className="text-primary text-2xl">{destination.icon}</span>
                                </div>

                                {/* Divider */}
                                <div className="w-10 h-[2px] bg-[#008297] mb-3"></div>

                                {/* Descriptions */}
                                <ul className="space-y-1">
                                    <li className="text-gray-800 text-xs flex items-center gap-2">
                                       
                                        {destination.desc1}
                                    </li>
                                    <li className="text-gray-800 text-xs flex items-center gap-2">
                                      
                                        {destination.desc2}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Destinations
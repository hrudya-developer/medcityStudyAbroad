import { ChartNoAxesCombined, GraduationCap, Map, MapPin, Search, SearchIcon, UserRoundCheck } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <section>
        <div className="bg-white grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-5 py-3 shadow-md border border-gray-50 animate__animated animate__slideInUp">
            <div className='box_outer flex gap-3 p-3 border-r border-gray-100'>
                <div className='bg-secondary text-white rounded-full grid place-content-center size-10'>
                    <MapPin size={18} className='text-white'/></div>
                <div className='flex items-start flex-col justify-start'>
                    <p className='text-xs text-gray-700'>I want to study in</p>
                    <select id="destination" className='text-sm font-semibold my-2 text-start'>
                        <option value="" className='text-xs text-start'> Select Destination </option>
                        <option value="" className='text-xs'>USA</option>
                        <option value="" className='text-xs'>UK</option>
                        <option value="" className='text-xs'>Canada</option>    
                    </select>
                </div>
            </div>

              <div className='box_outer flex gap-3 p-3 border-r border-gray-100'>
                <div className='bg-secondary text-white rounded-full grid place-content-center size-10'>
                    <GraduationCap size={18} className='text-white'/></div>
                <div className='flex items-start flex-col justify-start'>
                    <p className='text-xs text-gray-700'>I want to study </p>
                    <select id="destination" className='text-sm font-semibold my-2 text-start'>
                        <option value="" className='text-xs text-start'> Select Course </option>
                        <option value="" className='text-xs'>MBA</option>
                        <option value="" className='text-xs'>Enginering</option>
                        <option value="" className='text-xs'>Nursing</option>    
                    </select>
                </div>
            </div>

              <div className='box_outer flex gap-3 p-3 border-r border-gray-100'>
                <div className='bg-secondary text-white rounded-full grid place-content-center size-10'>
                    <ChartNoAxesCombined size={18} className='text-white'/></div>
                <div className='flex items-start flex-col justify-start'>
                    <p className='text-xs text-gray-700'>Study Level</p>
                    <select id="destination" className='text-sm font-semibold my-2 text-start'>
                        <option value="" className='text-xs text-start'> Select Level </option>
                        <option value="" className='text-xs'>Graduate</option>
                        <option value="" className='text-xs'>Post Graduate</option>
                  
                    </select>
                </div>
            </div>

              <div className='box_outer flex gap-3 p-3'>
                <div className=''>
                   
                   <button type="button" className='bg-primary text-white px-4 py-2 rounded-full flex justify-center items-center gap-3'><span><Search size={16}/></span><span className='text-sm'>Search Now</span> </button>
               
            </div>
            
        </div></div>
    </section>
  )
}

export default SearchBar
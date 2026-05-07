import { Phone } from 'lucide-react'
import React from 'react'
import { MdMobileFriendly } from 'react-icons/md'


const ContactInfo = () => {
  return (
    <section className='bg-gray-50 pb-14'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 items-center place-content-center py-3 bg-white rounded-lg shadow-lg px-5'>
            <div className='flex gap-5 justify-center'>
              <div className='rounded-full p-2 size-12 grid place-content-center'><Phone className='text-[#008297]'size={20}/></div>
               <div className=''><p className='flex gap-2 text-[#008297] mb-2'>Contact us</p>
                <p className='text-[#008297] font-bold'>+91 1234567890</p></div>
            </div>

             <div className='flex gap-5 justify-center md:border-x-2 border-gray-300'>
              <div className='bg-gray-100 rounded-full p-2 size-12 grid place-content-center'><MdMobileFriendly className='text-[#008297]' size={20}/></div>
               <div><p className='flex gap-2 text-[#008297] mb-2'>Call us</p>
                <p className='text-[#008297] font-bold'>+91 1234567890</p></div>
            </div>

             <div className='flex gap-5 justify-center'>
              <div className='bg-gray-100 rounded-full p-2 size-12 grid place-content-center'><Phone className='text-[#008297]' size={20}/></div>
               <div><p className='flex gap-2 text-[#008297] mb-2'>Email</p>
                <p className='text-[#008297] font-bold'>info@mioc.in</p></div>
            </div>


        </div>

    </section>
  )
}

export default ContactInfo
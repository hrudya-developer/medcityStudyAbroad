import { Phone } from 'lucide-react'
import React from 'react'
import { MdMobileFriendly } from 'react-icons/md'

const ContactInfo = () => {
  return (
    <section className=''>
        <div className='max-w-7xl px-5 mx-auto flex gap-5 items-center justify-between py-10'>
            <div className='flex gap-4'>
              <div><Phone className='text-[#008297]'/></div>
               <div><p className='flex gap-2 text-[#008297]'>Contact us</p>
                <p className='text-[#008297]'>+91 1234567890</p></div>
            </div>

             <div className='flex gap-4'>
              <div><MdMobileFriendly className='text-[#008297]'/></div>
               <div><p className='flex gap-2 text-[#008297]'>Call us</p>
                <p className='text-[#008297]'>+91 1234567890</p></div>
            </div>

             <div className='flex gap-4'>
              <div><Phone className='text-[#008297]'/></div>
               <div><p className='flex gap-2 text-[#008297]'>Email</p>
                <p className='text-[#008297]'>info@mioc.in</p></div>
            </div>


        </div>

    </section>
  )
}

export default ContactInfo
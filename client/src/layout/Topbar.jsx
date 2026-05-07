import { Briefcase, Calendar, Newspaper } from 'lucide-react'
import React from 'react'

const Topbar = () => {
  return (
    <section>
        <div className="bg-white text-secondary py-4 text-center text-xs h-10 flex gap-5 max-w-7xl mx-auto px-5 justify-end">
            <p className='text-black flex gap-2'><span><Newspaper className='text-primary' size={16}/></span>News & Articles</p>
             <p className='text-black flex gap-2'><span><Calendar className='text-primary' size={16}/></span>Events</p>
              <p className='text-black flex gap-2'><span><Briefcase className='text-primary' size={16}/></span>Careers</p>
        </div>
    </section>
  )
}

export default Topbar
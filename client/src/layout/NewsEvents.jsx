import { CalendarDays, ChevronRight } from 'lucide-react';
import news_img from '../assets/news_img.png';

const NewsEvents = () => {

    const newsEvents =[
        {
            image: news_img,
             date: "March 15, 2024",
            title: "Study Abroad Fair 2024",
        },
          {
            image: news_img,
             date: "March 15, 2024",
            title: "Study Abroad Fair 2024",
        },
           
          {
            image: news_img,
             date: "March 15, 2024",
            title: "Study Abroad Fair 2024",
        },
           
          {
            image: news_img,
             date: "March 15, 2024",
            title: "Study Abroad Fair 2024",
        },
           
           
           
    ]



  return (
    <section className='py-10 bg-gray-50'>
    <div className='max-w-7xl mx-auto px-5'>

        <h1 className='text-2xl font-bold text-secondary'>News & Events</h1>
        <div className='w-10 h-[3px] bg-[#008297] mt-3'></div>

<div className='flex gap-5 mt-10'>

    {newsEvents.map((item, index) =>(
        <div key={index} className='border p-3 rounded-lg shadow-md'>
            <img src={item.image} alt={item.title} className='w-full h-auto rounded-md' />
            <div className='flex flex-col items-center'>
            <p className='text-sm text-[#008297] mt-6 flex gap-2'><span><CalendarDays /></span>{item.date}</p>
            <h2 className='text-sm font-bold text-secondary mt-2'>{item.title}</h2>
           <div className='flex justify-center'><button className='bg-[#008297] text-white p-2 mt-3 text-sm rounded-full hover:bg-primary/90 transition'><ChevronRight /></button></div>
            </div>
        </div>
    ))}

</div>


    </div>
    </section>
  )
}

export default NewsEvents
import quoteBg from '../assets/quote-bg.png';
const QuoteSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-5 py-10 bg-bottom mb-10 bg-no-repeat shadow-md rounded-lg" style={{ backgroundImage:`url('${quoteBg}')` }}>
        <blockquote className="text-lg font-semiboldtext-center text-gray-900">
          <span className='text-5xl text-primary font-bold'>"</span>Your ambition. Our guidance. A world of opportunities. <span className='text-5xl text-primary font-bold'>"</span>
        </blockquote>
    
      </div>
    </>
  )
}

export default QuoteSection
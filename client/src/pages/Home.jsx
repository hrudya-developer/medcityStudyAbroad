import About from "../layout/About"
// import ContactInfo from "../layout/ContactInfo"
import Destinations from "../layout/Destinations"
import FormSection from "../layout/FormSection"
import Hero from "../layout/Hero"
import Navbar from "../layout/Navbar"
import NewsEvents from "../layout/NewsEvents"
import Programs from "../layout/Programs"
import QuoteSection from "../layout/QuoteSection"
import Testimonial from "../layout/Testimonial"
import WhyChoose from "../layout/WhyChoose"

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <WhyChoose />
            <QuoteSection />
            <Programs />
            <FormSection />
            <Destinations />
            <Testimonial />
            <NewsEvents />
            {/* <ContactInfo /> */}
        </>
    )
}

export default Home
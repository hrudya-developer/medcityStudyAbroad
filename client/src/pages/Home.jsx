import About from "../layout/About"
import ContactInfo from "../layout/ContactInfo"
import Destinations from "../layout/Destinations"
import FooterDestinations from "../layout/FooterDestinations"
import FooterSection1 from "../layout/FooterSection1"
import FormSection from "../layout/FormSection"
import HeroSlider from "../layout/HeroSlider"
// import Hero from "../layout/Hero"
import Navbar from "../layout/Navbar"
import NewsEvents from "../layout/NewsEvents"
import Programs from "../layout/Programs"
import QuoteSection from "../layout/QuoteSection"
import Testimonial from "../layout/Testimonial"
import Topbar from "../layout/Topbar"
import WhyChoose from "../layout/WhyChoose"

const Home = () => {
    return (
        <>
        <Topbar />
            <Navbar />
            {/* <Hero /> */}
            <HeroSlider />

            <About />
            <WhyChoose />
            <QuoteSection />
            <Programs />
            <FormSection />
            <Destinations />
            <Testimonial />
            <NewsEvents />
            <ContactInfo />
            <FooterSection1 />
            <FooterDestinations />
        </>
    )
}

export default Home
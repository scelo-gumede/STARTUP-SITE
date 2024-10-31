import Blog from "../components/Blog"
import Hero from "../components/Hero"
import Introduction from "../components/Introduction"
import OurWork from "../components/OurWork"
import Testimonials from "../components/Testimonials"
import WhoWeAre from "../components/WhoWeAre"
import WhyChoose from "../components/WhyChoose"


const Home = ()=>{
    return (
        <div className="pt-[50px] px-[50px] md:px-[70px] lg:px-[100px]">
            <Hero />
            <WhoWeAre value={true} />
            <OurWork />
            <Introduction />
            <WhyChoose />
            <Testimonials />
            <Blog />
        </div>
    )
}


export default Home
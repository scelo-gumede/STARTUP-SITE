import Hero from "../components/Hero"
import Introduction from "../components/INtroduction"
import OurWork from "../components/OurWork"
import WhoWeAre from "../components/WhoWeAre"
import WhyChoose from "../components/WhyChoose"


const Home = ()=>{
    return (
        <div className="pt-[50px] px-[100px]">
            <Hero />
            <WhoWeAre />
            <OurWork />
            <Introduction />
            <WhyChoose />
        </div>
    )
}


export default Home
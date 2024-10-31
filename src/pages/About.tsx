import Introduction from "../components/Introduction"
import WhoWeAre from "../components/WhoWeAre"




const About = ()=>{
    return(
        <main className="pt-[50px] px-[50px] md:px-[70px] lg:px-[100px]">
            <Introduction />
            <WhoWeAre  value={false}/>
           
        </main>
    )
}

export default About
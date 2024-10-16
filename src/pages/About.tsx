import Introduction from "../components/Introduction"
import WhoWeAre from "../components/WhoWeAre"




const About = ()=>{
    return(
        <main>
            <Introduction />
            <WhoWeAre  value={false}/>
           
        </main>
    )
}

export default About
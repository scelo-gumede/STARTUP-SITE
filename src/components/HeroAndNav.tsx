import Navbar from "./Navbar"
import Hero from "./Hero"
import image from '../assets/new-saver.jpg';

interface HeroAndNavProps{
    text?:string
}

const HeroAndNav = (props:HeroAndNavProps) => {
  return (
    <div  style={{backgroundImage:`url(${image})`}} >
        <Navbar />
        <Hero />
    </div>
  )
}

export default HeroAndNav
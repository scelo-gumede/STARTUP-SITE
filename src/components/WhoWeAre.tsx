import { Button } from "@mui/material"
import image from "../assets/Frame 9.jpg"
import { useNavigate } from "react-router-dom"


interface WhoWeAreProps{
  value:boolean
}


const WhoWeAre = (props:WhoWeAreProps) => {
  const navigate = useNavigate()
  const{value}=props

  const handleClick =()=>{
      navigate("about")
  }

  return (
    <section style={{marginLeft:"-100px",marginRight:"-100px",paddingRight:"100px",paddingLeft:"100px"}} className="flex-col lg:flex-row flex gap-5 py-24">
      
        <div className="lg:pl-24 flex flex-col gap-2">
            <p className="text-secondary text-mediumFont font-extrabold">WHO WE ARE</p>
            <p className="text-black  leading-tight text-bigFont font-medium">GET TO KNOW <br /> ABOUT IT COMPANY <br /> DIGITAL STARTUP <br /> AGENCY</p>
            <p className="textFont text-slate-600">At ITCOMPANY, we focus on providing top-notch <br /> business-driven IT solutions to companies of all sizes <br /> and types. Our cutting-edge technology solutions <br />implemented by our team are unmatched in the industry.A</p>
            { value && (
              <div className="flex justify-start my-2">
              <Button variant="contained" color="secondary" size="large" onClick={handleClick} >About Us</Button>
              </div>
            )}
        </div>


        <div className="border-8 rounded-3xl border-solid border-secondary">
            <img src={image} className="h-full w-full"/>
        </div>
    </section>
  )
}

export default WhoWeAre
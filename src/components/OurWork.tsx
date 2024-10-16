
import image from "../assets/Frame 11.jpg"
import OurWorkCart from "./OurWorkCart"


const cart =[
  {
    image:image,
    content:"web development"
  },
  {
    image:image,
    content:"UI/UX"
  },
  {
    image:image,
    content:"SEO Optimazation"
  }

]


const OurWork = () => {
 

  return (
    <section className="my-[100px] flex flex-col gap-8">
        <p className="text-center font-extrabold text-mediumFont text-secondary">OUR WORK</p>
        <p className="text-center font-bold text-bigFont leading-snug text-black">WE'RE DELIVERING ONLY EXCEPTIONAL QUALITY WORK</p>
        <div className="flex overflow-hidden gap-2 mr-6   ">
            
           {cart.map((item,i)=>{
            return(
              <OurWorkCart {...item} key={i} />
            )
           })}
        </div>
    </section>
  )
}

export default OurWork
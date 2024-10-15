import { testimonials } from "../data"
import TestimonialCart from "./TestimonialCart"




const Testimonials = () => {
  return (
    <section>
        <p className="text-primary">WHAT PEOPLE SAY ABOUT US</p>
        <div>
            {testimonials.map((article,i)=>{
                return (
                    <TestimonialCart {...article} key={i} />
                )
            })}
        </div>
    </section>
  )
}

export default Testimonials
import { testimonials } from "../data"
import TestimonialCart from "./TestimonialCart"




const Testimonials = () => {
  return (
    <section>
        <p className="text-primary text-bigFont font-extrabold py-10">WHAT PEOPLE SAY ABOUT US</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5  ">
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
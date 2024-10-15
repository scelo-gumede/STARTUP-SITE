import { services } from "../data";
import ServiceCart from "./ServiceCart";






const ServicesProjects = () => {
  return (
    <section className="mx-[100px] flex flex-col gap-6 my-10">
        <div className="space-y-1">
        <p className="text-mediumFont text-center font-bold text-secondary">WE PROVIDE DIGITAL SERVICES</p>
        <p className="text-bigFont text-center font-bold text-primary">SERVICES WE'RE OFFERING</p>
        <p className="text-textFont text-center ">We are committed to providing our customers with exceptional service <br /> while offering our employees the best training.</p>
        </div>
        <div className="flex  gap-10 p-2">
            {services.map((service,i)=>{
                return (
                    <ServiceCart {...service} key={i} />
                )
            })}
        </div>
    </section>
  )
}

export default ServicesProjects
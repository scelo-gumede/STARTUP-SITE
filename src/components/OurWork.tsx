
import image from "../assets/Frame 11.jpg"



const OurWork = () => {
  return (
    <section className="my-[100px] flex flex-col gap-8">
        <p className="text-center font-extrabold text-mediumFont text-secondary">OUR WORK</p>
        <p className="text-center font-extrabold text-bigFont text-primary">WE'RE DELIVERING ONLY EXCEPTIONAL QUALITY WORK</p>
        <div className="flex overflow-hidden gap-2 mr-6   ">
            <img src={image}  />
            <img src={image} />
            <img src={image} />
        </div>
    </section>
  )
}

export default OurWork
import image from "../assets/Frame 9.jpg"




const WhoWeAre = () => {
  return (
    <section className="flex gap-5 my-24">
        <div className="pl-24 flex flex-col gap-5">
            <p className="text-secondary text-mediumFont font-extrabold">WHO WE ARE</p>
            <p className="text-black  leading-snug text-bigFont font-medium">GET TO KNOW <br /> ABOUT IT COMPANY <br /> DIGITAL STARTUP <br /> AGENCY</p>
            <p className="textFont text-slate-600">At ITCOMPANY, we focus on providing top-notch <br /> business-driven IT solutions to companies of all sizes <br /> and types. Our cutting-edge technology solutions <br />implemented by our team are unmatched in the industry.A</p>
        </div>
        <div className="border-8 rounded-3xl border-solid border-secondary">
            <img src={image} className="h-full" />
        </div>
    </section>
  )
}

export default WhoWeAre
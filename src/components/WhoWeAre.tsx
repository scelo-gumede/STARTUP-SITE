import image from "../assets/Frame 9.jpg"




const WhoWeAre = () => {
  return (
    <section className="flex gap-5 my-24">
        <div className="pl-24 flex flex-col gap-5">
            <p className="text-secondary text-mediumFont font-extrabold">WHO WE ARE</p>
            <p className="text-primary text-bigFont font-extrabold">GET TO KNOW <br /> ABOUT IT COMPANY <br /> DIGITAL STARTUP <br /> AGENCY</p>
            <p className="textFont">At ITCOMPANY, we focus on providing top-notch <br /> business-driven IT solutions to companies of all sizes <br /> and types. Our cutting-edge technology solutions <br />implemented by our team are unmatched in the industry.A</p>
        </div>
        <div>
            <img src={image} />
        </div>
    </section>
  )
}

export default WhoWeAre
import image from "../assets/Rectangle 3.jpg"



const Introduction = () => {
  return (
    <section className="px-[100px] gap-12 my-24  flex justify-center items-center">
        <div className="rounded-md overflow-hidden">
            <img src={image} />
        </div>
        <div className="flex flex-col gap-9">
            <p className="text-mediumFont text-secondary font-bold">OUR INTRODUCTION </p>
            <p className="font-bold text-bigFont text-primary">WELCOME TO OUR DIGITAL AGENCY</p>
            <div className="text-[26px] text-secondary font-bold">
                <p>WEB DEVELOPMENT</p>
                <p>WEB DESIGN</p>
            </div>
            <p className="text-textFont">
            We deliver compelling capabilities with meaningful outcomes through our unique IT solutions for businesses.
            </p>
        </div>
    </section>
  )
}

export default Introduction
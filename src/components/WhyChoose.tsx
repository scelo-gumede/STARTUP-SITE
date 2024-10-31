import image from "../assets/Rectangle 4.jpg"



const WhyChoose = () => {
  return (
    <section style={{"marginLeft":"-100px","marginRight":"-100px"}} className="bg-secondary px-[50px]  md:px-[100px] ">

        <div className="my-[100px]   md:flex md:justify-center">

            <div className=" grid grid-cols-1 items-center md:flex gap-10">

                <div className="text-black items-center font-extrabold flex flex-col md:items-start justify-center gap-8 ">
                    <p className="text-mediumFont">WHY CHOOSE</p>
                    <p className="text-bigFont">WE'RE HERE TO <br /> HELP YOUR <br /> BUSINESS</p>
                    <div>
                    <button className="bg-primary transition rounded-md hover:bg-blue-950 self-start text-white font-medium p-2">Discover</button>
                    </div>
                </div>

                <div>
                    <img src={image} className="w-full h-full" />
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default WhyChoose
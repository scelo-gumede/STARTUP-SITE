import image from "../assets/Rectangle 4.jpg"



const WhyChoose = () => {
  return (
    <section style={{"marginLeft":"-100px","marginRight":"-100px"}} className="bg-secondary px-[100px] ">
        <div className="my-[100px]  flex justify-center">
            <div className="flex gap-10">
                <div className="text-black font-extrabold flex flex-col justify-center gap-8 ">
                    <p className="text-mediumFont">WHY CHOOSE</p>
                    <p className="text-bigFont">WE'RE HERE TO <br /> HELP YOUR <br /> BUSINESS</p>
                    <button className="bg-primary transition rounded-md hover:bg-blue-950 self-start text-white font-medium p-2">Discover</button>
                </div>
                <div>
                    <img src={image} />
                </div>
            </div>
        </div>
       
    </section>
  )
}

export default WhyChoose
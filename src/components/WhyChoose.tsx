import image from "../assets/Rectangle 4.jpg"



const WhyChoose = () => {
  return (
    <section style={{"marginLeft":"-100px","marginRight":"-100px"}} className="bg-secondary px-[100px] ">
        <div className="my-[100px]  flex justify-center">
            <div className="flex gap-10">
                <div className="text-black font-extrabold flex flex-col justify-center gap-8 ">
                    <p className="text-2xl">WHY CHOOSE</p>
                    <p className="text-6xl">WE'RE HERE TO <br /> HELP YOUR <br /> BUSINESS</p>
                    <button className="bg-primary rounded-md self-start text-white font-medium p-2">Discover</button>
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
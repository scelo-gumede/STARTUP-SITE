

interface TestimonialCartProps{
    text:string,
    image:string,
    position:string,
    name:string
}


const TestimonialCart = (props:TestimonialCartProps) => {
    const{text,image,position,name}=props
  return (
    <article className="bg-blue-200 flex flex-col justify-between p-8 gap-5 shadow-md rounded-md">
        <p style={{fontStyle:"italic"}} className="">{text}</p>
        <div className="flex items-center justify-start gap-5 ">
            <div className="w-[50%] overflow-hidden border border-solid border-primary rounded-lg ">
                <img src={image} className="w-full  h-full size-24 object-cover" />
            </div>
            <div>
                <p className="textFont font-extrabold text-secondary">{name}</p>
                <p>{position}</p>
            </div>
        </div>
    </article>
  )
}

export default TestimonialCart
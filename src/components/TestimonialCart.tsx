

interface TestimonialCartProps{
    text:string,
    image:string,
    position:string,
    name:string
}


const TestimonialCart = (props:TestimonialCartProps) => {
    const{text,image,position,name}=props
  return (
    <article>
        <p>{text}</p>
        <div>
            <div>
                <img src={image} />
            </div>
            <div>
                <p className="textFont">{name}</p>
                <p>{position}</p>
            </div>
        </div>
    </article>
  )
}

export default TestimonialCart
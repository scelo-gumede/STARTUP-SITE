
interface ServiceProps{
    text:string,
    image:string,
    title:string
}


const ServiceCart = (props:ServiceProps) => {
    const{title,text,image}=props
  return (
    <article className="flex flex-col gap-4  ">
        <p className="text-mediumFont font-bold text-secondary">{title}</p>
        <div className="rounded-lg overflow-hidden">
            <img src={image}  />
        </div>
        <p className="text-textFont">{text}</p>
    </article>
  )
}

export default ServiceCart
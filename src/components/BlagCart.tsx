


interface BlogCartProps {
    image:string,
    title:string,
    text:string
}


const BlogCart = (props:BlogCartProps) => {
    const{image,title,text}=props
  return (
    <article className=" overflow-hidden flex flex-col gap-4">
        <div className="rounded-tl-md  rounded-tr-md overflow-hidden">
            <img src={image} className="h-full w-full" />
        </div>
        <div>
            <p className="font-semibold text-3xl ">{title}</p>
            <p className="font-thin">{text}</p>
        </div>
    </article>
  )
}

export default BlogCart
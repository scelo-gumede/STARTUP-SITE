


interface BlogCartProps {
    image:string,
    title:string,
    text:string,
    date?:string
}


const BlogCart = (props:BlogCartProps) => {
    const{image,title,text,date}=props
  return (
    <article className={ date ?`flex  ` :`overflow-hidden flex flex-col gap-4`}>
        <div className="rounded-tl-md  rounded-tr-md overflow-hidden">
            <img src={image} className="h-full w-full" />
        </div>
        <div>
            <p className="font-semibold text-3xl ">{title}</p>
            <p>{date && (<span>{String(date)}</span>)}</p>
            {!date && (<p className="font-thin text-slate-400">{text}</p>)}
        </div>
    </article>
  )
}

export default BlogCart
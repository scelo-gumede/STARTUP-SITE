
import { useState } from "react"

interface OurWorkCartProps{
    image:string,
    content?:string
}


const OurWorkCart = (props:OurWorkCartProps)=>{
    const[hover,setHover]=useState(false)
    const{image,content}=props

    return (
        <article>
            <div className="relative cursor-pointer delay-100 overflow-hidden" onMouseLeave={()=> setHover(false)} onMouseEnter={()=> setHover(true)}>
            <img src={image}  />
            <div className={`absolute rounded-2xl overflow-hidden left-0 w-full bg-black opacity-30 bottom-0 h-full transition ${hover ?"":"translate-y-full"} `}></div>
            <p className={`absolute left-10 bottom-10 text-mediumFont font-bold  ${hover && "text-white"} `}>{content}</p>
            </div>
        </article>
    )
}

export default OurWorkCart
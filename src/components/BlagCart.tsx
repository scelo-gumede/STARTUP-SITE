


interface BlogCartProps {
    image:string,
    title:string,
    text:string
}


const BlagCart = (props:BlogCartProps) => {
    const{image,title,text}=props
  return (
    <article>
        <div>
            <img src={image} />
        </div>
        <div>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    </article>
  )
}

export default BlagCart

import { data } from "../data"
import BlagCart from "./BlagCart"


const Blog = () => {
  return (
    <section className="flex flex-col overflow-hidden gap-8 my-20">
           <p className="text-center text-secondary text-mediumFont font-extrabold">BLOG</p>
           <p className="text-center text-black text-bigFont font-extrabold">LATEST NEWS & ARTICLES</p>
           <div className="flex gap-8">
           {data.map((article,i)=>{
            return <BlagCart {...article} key={i} />
           })}
           </div>
    </section>
  )
}

export default Blog
import Icons from "./Icons";
import image from "../assets/new-saver.jpg"

interface HeroProps {
    text?: string;
}

const Hero = (props: HeroProps) => {
    return (
        <section style={{marginLeft:"-100px",marginRight:"-100px",paddingRight:"100px",paddingLeft:"100px"}} className="text-secondary   pb-20 ">
            {props.text ? (
                <div>{props.text}</div>
            ) : (
                <div className="flex flex-col md:flex-row  md:space-y-2">
                    
                        <div className="md:w-[50%] flex justify-center px-10  space-y-5  flex-col ">
                            <img  src={image} className="rounded-lg overflow-hidden"/>
                            <p className="text-black text-mediumFont">Trusted by thousands of organizations</p>
                            <Icons />
                        </div>

                        <div className="   md:w-[50%] flex flex-col justify-center">
                            <p className="text-black leading-snug font-bold text-bigFont">
                            ATTRACT THE CLIENTS <br className="hidden md:block"/> WHO WANT YOU FOR <br className="hidden md:block" />WHAT YOU DO BEST
                            </p>
                            <p className="text-mediumFont text-slate-600 font-thin">
                            Bringing focus to your firm's positioning strategy
                            </p>
                        </div>
                    
                </div>
            )}
        </section>
    );
}

export default Hero;

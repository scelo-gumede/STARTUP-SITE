
interface HeroProps {
    text?: string;
}

const Hero = (props: HeroProps) => {
    return (
        <section className="text-secondary py-20">
            {props.text ? (
                <div>{props.text}</div>
            ) : (
                <div className="flex flex-col items-end space-y-2">
                    
                    <p className="font-extrabold text-[58px]">
                        ATTRACT THE CLIENTS <br/> WHO WANT YOU FOR <br />WHAT YOU DO BEST
                    </p>
                    <p className="text-[28px] font-medium">
                        Bringing focus to your firm's positioning strategy
                    </p>
                    
                </div>
            )}
        </section>
    );
}

export default Hero;

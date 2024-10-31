



const Footer = () => {
  return (
    <footer className="lg:px-[100px] px-[50px] md:px-[70px] bg-secondary py-5 font-extrabold text-white  text-[26px]">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
            <div className="md:hidden lg:block">
                <p>IT COMPANY</p>
                <p className="font-thin mb-5">STARTUP AGENCY</p>
                <p className="font-thin text-[20px] ">Looking for something in <br /> particular? Just use the <br /> handy search bar below <br /> and access hundreds of <br /> pages of Ignition content.</p>
            </div>
            
            <div>
                <p className="mb-16">CONTACTS</p>
                <div className="text-[20px] font-thin">
                    <address className="">
                    707 Randolph Street <br />
                    Napa, CA 94559 <br />

                    Office Hours <br />
                    M-F 8:30am-5:00pm
                    </address>
                </div>
            </div>

            <div>
                <p className="mb-20">RECIEVE NEWS RIGHT IN YOUR EMAIL</p>
                <input className="block p-2 rounded-md" placeholder="enter your email "  type="text"/>
                <button className="p-[10px] rounded-lg my-3 bg-secondary">Submit</button>
            </div>
        </div>

        <div className="w-full h-1 my-4 bg-white"></div>
        <p className="text-[20px] font-thin">Copyright © 2021.All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
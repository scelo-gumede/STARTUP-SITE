import NavlistItems from "./NavlistItems"



const Navbar = () => {
  return (
    <header className="pt-[50px]  px-[100px] ">
        <section className="flex justify-between NavBar items-baseline">
            <div>
                <p className="font-extrabold text-[26px]">REGULAR PAGES</p>
                <p className="font-medium border border-solid border-pinkPrimary p-1 rounded-2xl text-pinkPrimary text-[24px]">STARTUP AGENCY</p>
            </div>

            <div className="flex font-thin space-x-2">
            <div>
                <p className=" text-[24px]">Call Us : <span className="">(061) 012 1251</span></p>
                <p className="font-light text-[24px]">(Monday - Saturday)</p>
            </div>
            <div className="h-full w-1 text-brown-200"></div>
            <div>
                <p className=" text-[24px]">Mail Us For Help</p>
                <p className="font-thin text-[24px]    ">info@email.com</p>
            </div>
            </div>

        </section>
        <div className="w-full my-3 h-[1px] bg-black"></div>
        <section>
            <NavlistItems />
        </section>
    </header>
  )
}

export default Navbar
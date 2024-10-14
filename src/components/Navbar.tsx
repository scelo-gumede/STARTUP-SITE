import NavlistItems from "./NavlistItems"



const Navbar = () => {
  return (
    <header className="pt-[50px] px-[100px]">
        <section className="flex justify-between items-baseline">
            <div>
                <p className="font-extrabold text-[26px]">IT COMPANY</p>
                <p className="font-medium text-[24px]">STARTUP AGENCY</p>
            </div>

            <div className="flex space-x-2">
            <div>
                <p className="font-extrabold text-[24px]">Call Us : (061) 012 1251</p>
                <p className="font-light text-[24px]">(Monday - Saturday)</p>
            </div>
            <div className="h-full w-1 text-brown-200"></div>
            <div>
                <p className="font-extrabold text-[24px]">MAIL US FOR HELP</p>
                <p className="font-light text-[24px]">info@email.com</p>
            </div>
            </div>

        </section>
        <div className="w-full py-5 h-[1px] bg-red-600"></div>
        <section>
            <NavlistItems />
        </section>
    </header>
  )
}

export default Navbar
import NavlistItems from "./NavlistItems"
import MenuIcon from '@mui/icons-material/Menu';



const Navbar = () => {
  return (
    <header className=" py-6 px-6 md:pt-[50px] bg-secondary   md:px-[100px] ">
        <section className="flex justify-between NavBar items-center">
            <div>
                <p className="font-extrabold text-2xl">REGULAR PAGES</p>
                <p className="font-medium my-2 border border-solid border-black p-1   text-lg">Startup Agency</p>
            </div>

            <div className=" hidden lg:flex font-thin space-x-2">
            <div>
                <p className=" text-[24px]">Call Us : <span className="">(061) 012 1251</span></p>
                <p className="font-light text-[24px]">(Monday - Saturday)</p>
            </div>
            <div className="h-full w-1 text-brown-200"></div>
            <div>
                <p className=" text-[24px]">Mail Us For Help</p>
                <p className="font-thin text-[24px]">info@email.com</p>
            </div>
            </div>
            
            <div className="lg:hidden">
            <MenuIcon fontSize="large"  />
            </div>
        </section>

        <div className="w-full lg:block  hidden my-3 h-[1px] bg-black"></div>
        <section className="hidden lg:block lg:w-full">
            <NavlistItems />
        </section>
    </header>
  )
}

export default Navbar
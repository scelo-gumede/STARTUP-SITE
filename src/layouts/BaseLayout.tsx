import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"


const BaseLayout = ()=>{
    return (
        <div>
            <nav className="font-all">
               <Navbar />
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}


export default BaseLayout
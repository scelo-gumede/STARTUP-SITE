import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const BaseLayout = ()=>{
    return (
        <div className="gradient-background">
            <nav className="font-all">
               <Navbar />
            </nav>
            <Outlet />
            <Footer />
        </div>
    )
}


export default BaseLayout
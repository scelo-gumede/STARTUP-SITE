import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroAndNav from "../components/HeroAndNav"

const BaseLayout = ()=>{
    return (
        <div>
            <nav className="font-all">
                <HeroAndNav />
            </nav>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}


export default BaseLayout
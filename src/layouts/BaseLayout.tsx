import { Outlet } from "react-router-dom"


const BaseLayout = ()=>{
    return (
        <div>
            <nav>Navbar</nav>
            <Outlet />
            <footer>Footer</footer>
        </div>
    )
}


export default BaseLayout
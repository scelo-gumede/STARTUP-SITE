import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const NavlistItems = () => {
  return (
    <div className="flex justify-between">
        <ul className="flex text-black space-x-1 font-bold text-[24px]">
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer'><NavLink to="/">Home</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="about">About</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="services">Service</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="portfolio">Portfolio</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="blog">Blog</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="team">Team</NavLink></li>
            <li className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to="contact">Contacts</NavLink></li>
        </ul>
        <div className='space-x-5'>
            <span className='text-blue-800 cursor-pointer' ><FacebookIcon /></span>
            <span className='text-red-700 cursor-pointer'><InstagramIcon /></span>
            <span className='text-black cursor-pointer'><XIcon /></span>
            <span className='text-blue-400 cursor-pointer'><LinkedInIcon /></span>
        </div>
    </div>
  )
}

export default NavlistItems
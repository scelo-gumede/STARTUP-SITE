import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';
import { links } from '../data';

const NavlistItems = () => {
  return (
    <div className=" flex  items-center justify-between">

        <ul className="flex text-black space-x-1 font-bold text-[24px]">
            {links.map((link,i)=>{
              return(
                <li key={i} className='hover:bg-primary transition delay-75 ease-in hover:text-white p-2 rounded-md cursor-pointer' ><NavLink to={link.to}>{link.label}</NavLink></li>
              )
            })}
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
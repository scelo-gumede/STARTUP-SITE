import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const NavlistItems = () => {
  return (
    <div className="flex justify-between">
        <ul className="flex space-x-5 font-bold text-[24px]">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="about">About</NavLink></li>
            <li><NavLink to="services">Service</NavLink></li>
            <li><NavLink to="portfolio">Portfolio</NavLink></li>
            <li><NavLink to="blog">Blog</NavLink></li>
            <li><NavLink to="team">Team</NavLink></li>
            <li><NavLink to="contact">Contacts</NavLink></li>
        </ul>
        <div className='space-x-5'>
            <span><FacebookIcon /></span>
            <span><InstagramIcon /></span>
            <span><XIcon /></span>
            <span><LinkedInIcon /></span>
        </div>
    </div>
  )
}

export default NavlistItems
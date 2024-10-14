import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const NavlistItems = () => {
  return (
    <div className="flex justify-between">
        <ul className="flex space-x-5 font-bold text-[24px]">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Contacts</li>
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
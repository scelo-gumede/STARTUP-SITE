import image from "../assets/Rectangle 3.jpg"
import WebIcon from '@mui/icons-material/Web';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


const Introduction = () => {
  return (
    <section className="px-[100px] gap-12 my-24  flex justify-center items-center">
        <div className="rounded-md overflow-hidden">
            <img src={image} />
        </div>
        <div className="flex flex-col gap-6">
            <p className="text-mediumFont text-secondary font-bold">OUR INTRODUCTION </p>
            <p className="font-bold text-bigFont text-primary">WELCOME TO OUR DIGITAL AGENCY</p>
            <div className="text-[26px] text-secondary font-bold">
                <p ><span className="mr-4 text-pinkPrimary  "><WebIcon /></span>WEB DEVELOPMENT</p>
                <p> <span className="mr-4 text-pinkPrimary "><GridViewOutlinedIcon /></span>  WEB DESIGN</p>
            </div>
            <p className="text-textFont text-slate-600">
            We deliver compelling capabilities with meaningful outcomes through our unique IT solutions for businesses.
            </p>
        </div>
    </section>
  )
}

export default Introduction
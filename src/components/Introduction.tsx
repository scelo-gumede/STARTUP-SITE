import image from "../assets/Rectangle 3.jpg"
import WebIcon from '@mui/icons-material/Web';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


const Introduction = () => {
  return (
    <section className="lg:px-[100px] gap-12 my-24   lg:flex lg:justify-center lg:items-center   grid grid-cols-1" >


        <div className="rounded-md order-2 overflow-hidden">
            <img src={image} className="w-full h-full" />
        </div>


        <div className="flex order-1 flex-col gap-6">
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
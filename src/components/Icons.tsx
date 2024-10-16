import React from 'react';
import coca from "../assets/coca-cola-logo-svgrepo-com.svg";
import bb from "../assets/flag-bb-svgrepo-com.svg";
import google from "../assets/google-svgrepo-com.svg";
import microsoft from "../assets/microsoft-svgrepo-com.svg";
import nodejs from "../assets/nodejs-1-logo-svgrepo-com.svg";


const Icons = () => {
    return (
        <div className="icon-wrapper">
            <div className="icon-container flex text-black ">
                <img src={coca} alt="Coca-Cola Logo" className="icon" />
                <img src={bb} alt="Barbados Flag" className="icon" />
                <img src={google} alt="Google Logo" className="icon" />
                <img src={microsoft} alt="Microsoft Logo" className="icon" />
                <img src={nodejs} alt="Node.js Logo" className="icon" />
                <img src={coca} alt="Coca-Cola Logo" className="icon" />
                <img src={bb} alt="Barbados Flag" className="icon" />
                <img src={google} alt="Google Logo" className="icon" />
                <img src={microsoft} alt="Microsoft Logo" className="icon" />
                <img src={nodejs} alt="Node.js Logo" className="icon" />
                <img src={coca} alt="Coca-Cola Logo" className="icon" />
                <img src={bb} alt="Barbados Flag" className="icon" />
                <img src={google} alt="Google Logo" className="icon" />
                <img src={microsoft} alt="Microsoft Logo" className="icon" />
                <img src={nodejs} alt="Node.js Logo" className="icon" />
            </div>
        </div>
    );
};

export default Icons;


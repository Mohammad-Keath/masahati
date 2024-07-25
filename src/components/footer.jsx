import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";



export default function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img className="logo" src="/logo.png" alt="logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque
          qui, facere voluptatem ab alias doloribus vitae. Culpa quae eius sint
          cupiditate quaerat, molestias, sit, recusandae nulla debitis tenetur
          repellendus?
        </p>
        <div className="iconsContainer">
          <FaFacebookSquare className="icons" />
          <BsInstagram className="icons" />
        </div>
      </div>
      <div className="footerRight">
        <h3>Contact</h3>
        <p><FaPhone/> +962 78232311</p>
        <p><IoMdMail/> masahati@gmail.com</p>
      </div>
      {/* <div className="footerRight">
        <h3>Contact</h3>
        <p><FaPhone/> +962 78232311</p>
        <p><IoMdMail/> masahati@gmail.com</p>
      </div> */}
    </div>
  );
}

import React from "react";
import { IoIosContact } from "react-icons/io";
import {Image} from "react-bootstrap";
import Lin from "../images/lin.png";
import { FaInstagram,FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
class Contact extends React.Component{
render(){
    return(

       
  <div className="call">
   
 <h5 className="contact">Contact Me</h5>   
<IoIosContact className="cot"></IoIosContact>
  <div><FaInstagram className="insta"></FaInstagram><p3><a href="https://www.instagram.com/gihanayannick/">yannickgihana</a></p3><FaLinkedin className="linked"></FaLinkedin><p4><a href="https://www.linkedin.com/in/gihana-yannick-6b8802171/">yannickgihana</a></p4><FcGoogle className="Goog"></FcGoogle><p6>ygihana@gmail.com</p6></div> 
  </div>
 
  
    )
}



}

export default Contact;
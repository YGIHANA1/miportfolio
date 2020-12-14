import React from "react"
import { AiFillLinkedin, AiFillGoogleSquare } from "react-icons/ai";
class Footer extends React.Component{
render(){
    return(<div className="Footer bg-dark justify-content-center" variant="dark">
        
            <ul><li><a href="https://www.linkedin.com/in/gihana-yannick-6b8802171/"><AiFillLinkedin></AiFillLinkedin>Linkedin@gihanayannick</a></li>
                <li><a href="#"><AiFillGoogleSquare><AiFillGoogleSquare/></AiFillGoogleSquare>Ygihana@gmail.com</a></li>
        
             </ul>
           
    </div>)
}
}


export default Footer
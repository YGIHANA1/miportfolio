import React from "react"
import {Row,Col,Container,Image, Card} from "react-bootstrap" 
import pic from "../images/me.jpg"
import Spo from "../images/spo.jpeg"
import Lin from "../images/link.jpeg"
import Net from "../images/net.jpeg"
import { IoLogoNodejs,IoLogoHtml5} from "react-icons/io";
import { FaBootstrap ,FaGithub,FaDatabase} from "react-icons/fa";
import { DiReact } from "react-icons/di"
import "../App.css"
class About extends React.Component{
render(){
return(<div className="Jumbotron" fluid> 
   
 <Image variant="Top" src={pic} className="Pic" />
   <h2> Full stack Developer<br/><br/>Yannick Gihana</h2>
   
   <p> 
      My name is Yannick ,I'm a junior developer I started coding intensively in 04/2020 at strive school.
      <br/>I'm undergraduated at the european university of Madrid in Global international business, with strive school.<br/>I'm confident to say that by now,
      I'm able to build a website from scratch with libraries<br/> and stacks like react, redux, html5, css3, node, js and mongoDB.
    </p>
   
    
 <div className="Card">
   
     <span><IoLogoNodejs></IoLogoNodejs><i><IoLogoHtml5></IoLogoHtml5></i><FaBootstrap className="fab"><FaBootstrap/></FaBootstrap><DiReact className="direact"></DiReact><FaGithub className="git"></FaGithub><FaDatabase className="data"></FaDatabase></span>
     
  
 </div>
 <hr className="bg-light"/>
 <div className="Card">
   <h3>PROJECTS</h3>
   <Container>
  <Row xs={1} sm={1}>
    <Card.Body>
      <Image src={Lin} thumbnail />
      <div className="card-title ">
      <h> Linkedin Demo</h>
      
       <p> Building linkedin wasn't easy enough,since we were asked to retrieve the data from each student and we were asked to use our jwt and server endpoints,most part was backend coding</p> 
       </div>
    </Card.Body>
    <Card.Body>
      <Image src={Net} thumbnail />
      <div className="card-title ">
       <h>Netflix Demo</h>
       <p>Netflix was our second project with my team,we were asked to make it looks like Netflix by styling and using routers,actually we focused on the frontend and navigation</p> 
       </div>
       </Card.Body>
       <Card.Body>
      <Image src={Spo} thumbnail />
      <div className="card-title ">
      <h>Spotify Demo</h>
      <Card.Text>Spotify was very challenging,it has some of the features like,audio that was only js codes () and display the data we've fetched from rapidapi </Card.Text></div>
      </Card.Body>
  </Row>
</Container>

   </div>
    </div>)
}
}


export default About
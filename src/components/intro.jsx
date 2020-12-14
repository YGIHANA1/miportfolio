// import React from "react" 
// import {Form,Button} from "react-bootstrap/"
// import axios from "axios"
// class User extends React.Component{
//   constructor(props){
//   super(props);
//    this.state ={
//         email:"",
//         password:"",
//     }  }
//     componentDidMount =()=>{
// axios.get("/users/:id")
// .then(res=>{this.setState({email:res.data[0],password:res.data.email})})
//     }
// render(){
// return(<>
//  <div className="form">
//  <Form className="mt-3">
//   <Form.Group controlId="formBasicEmail" >
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(val)=>this.setState({email:val.currentTarget.value})} />
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" autoComplete="shipping" value={this.state.password} onChange={(val)=>{this.setState({password:val.currentTarget.value})}}/>
//   </Form.Group>
  
//   <Button variant="primary" type="submit" onClick={this.login} value="login" >
//     Submit
//   </Button>
// </Form>
//  </div>
// </>)
// }
// login =async()=>{
//     const res= await fetch(`${process.env.REACT_APP_API_URL}users/`,{
//      headers:{"content-type":"application/json"},
//      "method":"Post",
//      body:JSON.stringify({email:this.state.email,password:this.state.password})
//     })
//     if(res.ok){
// const json= await res.json()
// localStorage.setItem("accessToken", json.token)
// localStorage.setItem("refreshToken", json.refreshToken)
// }
// }
// }
// export default User
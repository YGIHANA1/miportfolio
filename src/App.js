import React from 'react';
import './App.css';
import "./index.css"
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return ( <div className="App">
   
<Router>
 
 <Navbar/>
 <Switch>
 <Route path="/home"  component={Home}/>
<Route path="/about" component={About}/>
<Route path="/contact" component={Contact}/>
</Switch>
    </Router>

    <Footer/>
    </div> 
  );
}

export default App;

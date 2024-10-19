import { Component } from "react"
import Navbar from "./navbar"
import Aboutus from "./pages/Aboutus"
import Services from "./pages/Services"
import Home from "./pages/home"
import "./styles.css"
import SignupForm from "./pages/Signupform"
import SignUp from "./pages/signup"
function App(){
  let Component
  console.log(window.location)
  switch(window.location.pathname){
    case "/home.js":
      Component= <Home/>
      break
    case "/Aboutus.js":
      Component = <Aboutus/>
      break
    case "/Services.js":
      Component=<Services/>
      break
    case "/signup.js":
      Component=<SignUp/>
      break
    case "/Signupforms.js":
      console.log(window.location)
      Component=<SignupForm/>
      break
    default:
      console.log(Component)
      console.log(window.location.pathname)
  }
  return (<> 
  <Navbar/>
  {Component}
  </>)
}

export default App
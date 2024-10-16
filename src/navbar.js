import "./styles.css";
export default function Navbar(){
    return <nav className = "nav" >
        <p>Lawn Services</p>
        <button>
  <a href="/home.js">Home</a>
</button>
        <button>  <a href="/Services.js">Services</a>
        </button>
        <button>  <a href="/Aboutus.js">AboutUs</a>
        </button>
        <button>  <a href="/signup.js">Login/SignUp</a></button>
    </nav>
    
}

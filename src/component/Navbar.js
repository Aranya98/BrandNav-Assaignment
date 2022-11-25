import logo from "./images/Logo.svg"
import "../App.css"
import {useState} from "react"
export default function Navbar() {
    const[flag,setFlag]=useState(false)
    return (
        <div className="fixed">
        <div className="navbar">
            <div className="logo">
                <img src={logo} Alt="Comapny Logo" />
            </div>
            <div className="navlist">
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="navbtn">
                <button className="btn">Sign In</button>
                <button className="btn">Sign Up</button>
            </div>
            <div className="smallnav" onClick={()=>setFlag(!flag)} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKs2it0coLN5c9ZUM0y2IgWnlY6MtpT3Kmw&usqp=CAU" alt="nav" />
            </div>
        </div>
        <div className="navlist2" style={flag?{display:"flex"}:{display:"none"}}>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
    )
}
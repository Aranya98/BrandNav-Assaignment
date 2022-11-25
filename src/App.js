import Navbar from "./component/Navbar";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";
import Page3 from "./component/Page3";
import Page4 from "./component/Page4"
import Page5 from "./component/Page5";
import Page6 from "./component/Page6";
import "./App.css"
export default function App(){
    return(
        <div>
        <Navbar/>
        <Page1 />
        <Page2/>
        <Page3 />
        <Page4 />
        <Page5/>
        <Page6/>
        </div>
    )
}
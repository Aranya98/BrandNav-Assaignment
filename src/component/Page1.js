import photo from "./images/Illustration 1.svg"
import i1 from "./images/Group 1215.svg"
import i2 from "./images/Group 1216.svg"
import i3 from "./images/Group 1217.svg"
export default function Page1() {
    return (
        <div className="Page_main">
            <div className="Main">
                <div className="left_div">
                    <h1>Want anything to be easy with <b><label id="boldone">LaslesVPN</label></b></h1>
                    <p>Provide a network for all your needs with ease and fun using <b>LaslesVPN </b> discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                <div className="right_div">
                    <img src={photo} alt="Illustration" />
                </div>
            </div>
            <div className="sub_Main">
                <div className="sub_child">
                    <div>
                        <img src={i2} alt="Users"/>
                    </div>
                    <div>
                        <label className="l1">90+</label><br />
                        <label>Users</label>
                    </div>
                </div>
                <div className="sub_child1">
                    <div>
                        <img src={i1} alt="Locations"/>
                    </div>
                    <div>
                        <label className="l1">30+</label><br />
                        <label>Locations</label>
                    </div>
                </div >
                <div className="sub_child1">
                    <div>
                        <img src={i3} alt="ServerData"/>
                    </div>
                    <div>
                        <label className="l1">50+</label><br />
                        <label>Servers</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
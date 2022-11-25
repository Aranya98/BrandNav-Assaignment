import logo from "./images/Logo.svg"
import facebook from "./images/Facebook.svg"
import insta from "./images/Instagram.svg"
import Twit from "./images/Twitter.svg"
export default function Page6() {
    return (
        <div className="P6_Main">
            <div className="P6_sub">
                <div><h1>Subscribe Now for Get Special Features!</h1>
                    <p>Let subscribe with us and find the fun.</p></div>
                <div>
                    <button>Subscribe Now</button>
                </div>
            </div>

            {/*Footer */}
            <div className="P6_Footer">
                <div className="Footer">
                    <img src={logo} alt="logo" />
                    <p><b>LaslesVPN</b> is a private virtual network that has unique features and has high security.</p>
                    <div >
                        <img src={facebook} alt="logo" />
                        <img src={insta} alt="logo" />
                        <img src={Twit} alt="logo" />
                    </div>
                    <p>@2022LaslesVPN</p>
                </div>
                <div className="Footer">
                    <h4><b>Product</b></h4>
                    <p>Download</p>
                    <p>Pricing</p>
                    <p>Locations</p>
                    <p>Server</p>
                    <p>Countries</p>
                    <p>Blog</p>
                </div>
                <div className="Footer">
                    <h4><b>Engage</b></h4>
                    <p>FAQ</p>
                    <p>Tutorials</p>
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    
                </div>
                <div className="Footer">
                    <h4><b>Earn Money</b></h4>
                    <p>Affiliate</p>
                    <p>Become Partner</p>
                  
                </div>

            </div>

        </div>
    )
}
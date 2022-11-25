import free from "./images/Free.svg"
export default function Page3() {
    return (
        <div>
            <div className="P3_sub">
                <h1>Choose Your Plan</h1>
                <p>Lets choose the package that is best for you and explore it happily and cheerfully.</p>
            </div>
            <div className="P3_sub1">

                <div className="P3_sub12">
                    <div className="P3_sub12i">
                        <br /><br /><img src={free} alt="Free" /><br />
                        <label><b>Free Plan</b></label>
                    </div><br />
                    <div className="P3_sub12l">
                        <label>Unlimited Bandwitch</label><br />
                        <label>Encrypted Connection</label><br />
                        <label>No Traffic Logs</label><br />
                        <label>Works on All Devices</label><br />
                    </div><br /><br />
                    <div className="P3_sub12btn">
                        <h1>Free</h1>
                        <button>Select</button>
                    </div><br />
                </div>
                <div className="P3_sub12">
                    <div className="P3_sub12i">
                        <img src={free} alt="Free" /><br />
                        <label><b>Standard Plan</b></label>
                    </div><br />
                    <div className="P3_sub12l">
                        <label>Unlimited Bandwitch</label><br />
                        <label>Encrypted Connection</label><br />
                        <label>Yes Traffic Logs</label><br />
                        <label>Works on All Devices</label><br />
                        <label>Connect Anyware</label><br />
                    </div><br />
                    <div className="P3_sub12btn">
                        <h3>$9/mo</h3>
                        <button>Select</button>
                    </div><br />
                </div>
                <div className="P3_sub12">
                    <div className="P3_sub12i">
                        <img src={free} alt="Free" />
                        <label><b>Premium Plan</b></label>
                    </div><br />
                    <div className="P3_sub12l">
                        <label>Unlimited Bandwitch</label><br />
                        <label>Encrypted Connection</label><br />
                        <label>Yes Traffic Logs</label><br />
                        <label>Works on All Devices</label><br />
                        <label>Connect Anyware</label><br />
                        <label>Get New Features</label>
                    </div>
                    <div className="P3_sub12btn">
                        <h3>$12/mo</h3>
                        <button>Select</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
import photo from "./images/Illustration 2.svg"
import tick from "./images/Group 1120.svg"
export default function Page2() {
    return (
        <div>
            <div className="Main">
                <div className="right_div">
                    <img src={photo} alt="Illustration" />
                </div>
                <div className="left_div">
                    <h1>We Provide Mant Features You Can Use</h1>
                    <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                    <div className="left_subdiv">
                        <div>
                            <img src={tick} alt="tickmark"/>
                            <label>Powerfull online protection.</label>
                        </div>
                        <div>
                            <img src={tick} alt="tickmark"/>
                            <label>Internet without borders.</label>
                        </div>
                        <div>
                            <img src={tick} alt="tickmark"/>
                            <label>Supercharged VPN</label>
                        </div>
                        <div>
                            <img src={tick} alt="tickmark"/>
                            <label>No specific time limits.</label>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
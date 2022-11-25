import global from "./images/Huge Global.svg"
import M1 from "./images/Mask Group (1).svg"
import M2 from "./images/Mask Group (2).svg"
import M3 from "./images/Mask Group (3).svg"
import M4 from "./images/Mask Group (4).svg"
import M5 from "./images/Mask Group.svg"
export default function Page4() {

    return (
        <>
        <div className="P4_Main">
            <div className="P3_sub">
                <h1>Huge Flobal Network of Fast VPN</h1>
                <p>See <b>LaslesVPN </b> everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className="global">
                <img src={global} alt="Global Map" />
            </div>
        </div>
        <div className="P4_MG">
                <img src={M5} alt="NetFlix" />
                <img src={M1} alt=" Reddit" />
                <img src={M2} alt=" Amazon" />
                <img src={M3} alt="Discord" />
                <img src={M4} alt=" Spotify" />
            </div>
        </>
    )
}
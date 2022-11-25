import P1 from "./images/Ellipse 175 (1).png"
import P2 from "./images/Ellipse 175 (2).png"
import P3 from "./images/Ellipse 175.png"
import { useState } from 'react'
export default function Page5() {
    const [ind, setInd] = useState(0)
    const scrollfunc = (value) => {

        let p = document.getElementsByClassName("Profile1")
        let e = document.getElementsByClassName("empty")

        if (value === "left" && ind >= 0 && ind <= p.length - 1) {
            if (ind == p.length - 1) {
                p[ind].style.border = "2px solid rgb(178,175,175)"
                e[ind].style.width = "15px"
                e[ind].style.backgroundColor = "rgb(138,130,130)"
                setInd(ind - 1)
            }
            else if (ind !== 0) {
                setInd(ind - 1)
                p[ind + 1].style.border = "2px solid rgb(178,175,175)"
                e[ind + 1].style.width = "15px"
                e[ind + 1].style.backgroundColor = "rgb(138,130,130)"
            }
            else if (ind !== p.length - 1) {
                p[ind + 1].style.border = "2px solid rgb(178,175,175)"
                e[ind + 1].style.width = "15px"
                e[ind + 1].style.backgroundColor = "rgb(138,130,130)"
            }
            p[ind].style.border = "3px solid red"
            e[ind].style.width = "50px"
            e[ind].style.backgroundColor = "red"
            e[ind].style.borderRadius = "10px"
        }
        if (value === "right" && ind >= 0 && ind <= p.length - 1) {
            if (ind !== p.length) {
                p[ind].style.border = "3px solid red"
                e[ind].style.width = "50px"
                e[ind].style.backgroundColor = "red"
                e[ind].style.borderRadius = "10px"
                if (ind != p.length - 1) {
                    setInd(ind + 1)
                }
                if (ind !== 0) {
                    p[ind - 1].style.border = "2px solid rgb(178,175,175)"
                    e[ind - 1].style.width = "15px"
                    e[ind - 1].style.backgroundColor = "rgb(138,130,130)"
                }
            }

        }
        console.log(ind)

    }
    return (
        <div>
            <div className="P3_sub">
                <h1>Trusted by Thousands of Happy Customer</h1>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <div className="P5_sub">
            <div className="Profile_Main">
                <div className="Profile1">
                    <div className="Profile">
                        <img src={P3} alt="Viezh Robert" />
                        <div>
                            <label> <b>Viezh Robert</b></label><br />
                            <label>Warsaw, Poland</label>
                        </div>
                        <label>4.5</label>
                    </div>
                    <div>
                        <p>"Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best".</p>
                    </div>
                </div>
                <div className="Profile1">
                    <div className="Profile">
                        <img src={P1} alt="Yessica Christy" />
                        <div>
                            <label><b>Yessica Christy</b></label> <br />
                            <label>Shanxi,China</label>
                        </div>
                        <label>4.5</label>
                    </div>
                    <div>
                        <p>
                            "I like it because I like to travel far and still can connect with high speed".
                        </p>
                    </div>
                </div>
                <div className="Profile1">
                    <div className="Profile">
                        <img src={P2} alt="Kim Young Jou" />
                        <div>
                            <label><b>Kim Young Jou</b></label><br />
                            <label>Seoul, South Korea</label>
                        </div>
                        <label>4.5</label>
                    </div>
                    <div>
                        <p>"This is very unusual for my business that currently requires a virtual private network that has high security"</p>
                    </div>
                </div>
            </div>
            <div className="P5_scroll">
                <div className="empty_main">
                    <p className="empty"></p>
                    <p className="empty"></p>
                    <p className="empty"></p>
                </div>
                <div className="buttons">
                    <button onClick={() => scrollfunc("left")} className="P5_btn">
                        <svg height="40" width="40" className="rightarrow">
                            <polyline points="23,19 1,19 11,12 1,19 11,26 1,19" />

                        </svg>
                    </button>
                    <button onClick={() => scrollfunc("right")} className="P5_btn"><svg height="40" width="40" className="rightarrow">
                        <polyline points="1,19 22,19 11,12 23,19 11,26 23,19" />
                    </svg></button>
                </div>
            </div>
            </div>
        </div>
    )
}
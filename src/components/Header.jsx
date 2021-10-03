import Nav from "./Nav";

import orange__desktop from "../assets/desktop/image-header.jpg"
import orange__mobile from "../assets/mobile/image-header.jpg"
function Header() {
    return (
        <div className="Header">
            <Nav />
            <div className="Header__Hero">
                <h1 className="Header__Hero__title">
                    We are creatives
                </h1>
            </div>
            <img className="Header__img Header__img--desktop" src={orange__desktop} alt="orange" />
            <img className="Header__img Header__img--mobile" src={orange__mobile} alt="orange" />
        </div>
    ) 
}

export default Header;
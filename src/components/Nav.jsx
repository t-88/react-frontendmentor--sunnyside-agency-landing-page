import Hamberger from "./ui/Hamberger";

import logo from "../assets/logo.svg"
function Nav() {
    return (
        <div className="Nav">
            <img className="Nav__logo" src={logo} alt="" />
            <Hamberger urls={["About","Services","Projects","Contact"]}/>
            <section className="Nav__urls">
                { ["About","Services","Projects","Contact"].map( (text , index) => {
                    let className = index !== 3 ?  "Nav__urls__url" : "Nav__urls__url--light"
                    return (
                        <a href="#_"  className={className} key={index}>
                            { text }
                        </a>
                    )
                }) }
            </section>
        </div>
    )
}
export default Nav;
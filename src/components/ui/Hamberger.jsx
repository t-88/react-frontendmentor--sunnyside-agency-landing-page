import { useRef } from "react";
function Hamberger({urls}) {
    const ref = useRef(null)
    const urlList = useRef(null)
    function toggleMenu() {
        const children = ref.current.children
        for(let i = 0; i < children.length; i++) {
            if(children[i].classList.contains("Hamberger__line--animate")) {
                children[i].classList.remove("Hamberger__line--animate")
            } else {
                children[i].classList.add("Hamberger__line--animate")
            }
        }
        if(urlList.current.classList.contains("Hamberger__urls--visible")) {
            urlList.current.classList.remove("Hamberger__urls--visible")
            urlList.current.classList.add("Hamberger__urls--hidden")
            setTimeout(() => {
                urlList.current.classList.remove("Hamberger__urls--hidden")
            },300)
        } else {
            urlList.current.classList.add("Hamberger__urls--visible")
        }
    }
    return (
        <>
            <div className="Hamberger" ref={ref} onClick={toggleMenu}>
                <span className="Hamberger__line"/>
                <span className="Hamberger__line"/>
                <span className="Hamberger__line"/>
            </div>
            <ul ref={urlList} className="Hamberger__urls">
                { urls.map( (text , index) => {
                        let className = index !== 3 ?  "Hamberger__urls__url" : "Hamberger__urls__url Hamberger__urls__url--light"
                        return (
                            <a href="#_"  className={className} key={index}>
                                { text }
                            </a>
                        )
                    }) }
            </ul>
        </>
    )
}
export default Hamberger;

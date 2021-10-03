import TextImg from "./ui/TextImg"
import ImgText from "./ui/ImgText"

import Egg__desktop from "../assets/desktop/image-transform.jpg"
import Egg__mobile from "../assets/mobile/image-transform.jpg"
import Cup__desktop from "../assets/desktop/image-stand-out.jpg"
import Cup__mobile from "../assets/mobile/image-stand-out.jpg"
import GD_desktop from "../assets/desktop/image-graphic-design.jpg"
import GD_mobile from "../assets/mobile/image-graphic-design.jpg"
import photoGr_desktop from "../assets/desktop/image-photography.jpg"
import photoGr_mobile from "../assets/mobile/image-photography.jpg"

function Features() {
    let text = [
        {title: "Transform your brand",description: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."},
        {title: "Stand out to the right audience",description: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."},
        {title: "Graphic design",description: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",color: "green"},
        {title: "Photography",description: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",color: "blue"},
    ]
    return (
        <div className="Features">
            <TextImg imgs={[{src:Egg__desktop,type:"desktop"},{src:Egg__mobile,type:"mobile"}]} text={text[0]}/>
            <TextImg imgs={[{src:Cup__desktop,type:"desktop"},{src:Cup__mobile,type:"mobile"}]} text={text[1]} reverse={true}/>
            <div className="Features__container">
                <ImgText imgs={[{src:GD_desktop,type:"desktop"},{src:GD_mobile,type:"mobile"}]} text={text[2]}/>
                <ImgText imgs={[{src:photoGr_desktop,type:"desktop"},{src:photoGr_mobile,type:"mobile"}]} text={text[3]}/>
            </div>
        </div>
    )
}

export default Features
import Testimonial from "./ui/Testimonial";

import Emily from "../assets/image-emily.jpg";
import Thomas from "../assets/image-thomas.jpg";
import Jennie from "../assets/image-jennie.jpg";
function Testimonials() {
    const data = [
        {img:Emily,name:"Emily R.",jop:"Marketing Director",testimonial:"We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."},
        {img:Thomas,name:"Thomas S.",jop:"Chief Operating Officer",testimonial:"Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."},
        {img:Jennie,name:"Jennie F.",jop:"Business Owner",testimonial:"Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"}
    ]

    return (
        <div className="Testimonials">
            <h1 className="Testimonials__title">
                Client testimonials
            </h1>
            <div className="Testimonials__container">
                {data.map( (testimonial,index) => 
                    <Testimonial data={testimonial} key={index}/>
                )}
            </div>
        </div>
    )
}
export default Testimonials;
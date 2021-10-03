function Testimonial({data}) {
    return (
        <div className="Testimonial">
            <img src={data.img} alt="img" />
            <p className="Testimonial__text">
                {data.testimonial}
            </p>
            <div className="Testimonial__more">
                <strong className="Testimonial__more__name">{data.name}</strong>
                <p className="Testimonial__more__jop">{data.jop}</p>
            </div>
        </div>
    )
}
export default Testimonial;
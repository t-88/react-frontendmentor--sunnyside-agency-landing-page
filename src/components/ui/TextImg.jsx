function TextImg({imgs,text={},reverse=false}) {
    return (
        <div className={`TextImg ${reverse === true ? "TextImg--reverse" : ""}`}>
            <div className="TextImg__container">
                <div className="TextImg__container__text">
                    <h1>{ text.title }</h1>
                    <p className="TextImg__container__text__description">{ text.description }</p>
                    <a href="#_" className={`TextImg__container__text__learnMore ${reverse === true ? "TextImg__container__text__learnMore--diff" : ""}`}>
                    <p>learn more</p> 
                    <span/>
                    </a>
                </div>
            </div>
            {
                imgs.map((img,index) => 
                    <img className={`TextImg__img TextImg__img--${img.type}`} src={img.src} alt="img" key={index}/>
                )
            }
        </div>
    )
}

export default TextImg;
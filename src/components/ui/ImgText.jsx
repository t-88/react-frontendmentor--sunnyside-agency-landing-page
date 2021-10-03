function ImgText({imgs,text}) {
    
    return (
        <div className="ImgText">
            {
                imgs.map( (img,index) => 
                    <img key={index} className={`ImgText__img ImgText__img--${img.type}`} src={img.src} alt="img" />
                )
            }
            <div className={`ImgText__text ImgText__text--${text.color}`}>
                <h1>{text.title}</h1>
                <p>{text.description}</p>
            </div>
        </div>
    )
}
export default ImgText; 
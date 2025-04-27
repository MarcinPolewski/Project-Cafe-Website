import classes from "./ImageView.module.css";


function ScrollingImages({ images }) {
    return (
        <div className={classes.scrollingImages}>
            {images.map((image, index) => (
                <div key={index} className={classes.imageContainer}>
                    <img src={image} alt={`Image ${index + 1}`} className={classes.image} />
                </div>
            ))}
        </div>);
}

// 5 obrazków co się przesuwa
function ImageView({ images }) {
    return (
        <div className={classes.imageView}>
            <ScrollingImages images={images} />
            <ScrollingImages images={images} /> {/* two times to guarantee continous scroll*/}
        </div>);
}


export default ImageView;
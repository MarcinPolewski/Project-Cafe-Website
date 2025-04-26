import classes from "./ImageView.module.css";


// 5 obrazków co się przesuwa
function ImageView({ images }) {
    return (
        <div className={classes.imageView}>
            {images.map((image, index) => (
                <div key={index} className={classes.imageContainer}>
                    <img src={image} alt={`Image ${index + 1}`} className={classes.image} />
                </div>
            ))}
        </div>);
}

export default ImageView;
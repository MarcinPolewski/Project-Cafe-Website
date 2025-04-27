import './ImageView.css';

function ScrollingImages({ images }) {
    return (
        <div className="scrollingImages">
            {images.map((image, index) => (
                <div key={index} className="imageContainer">
                    <img src={image} alt={`Image ${index + 1}`} className="imageFromScroll" />
                </div>
            ))}
        </div>);
}

// 5 obrazków co się przesuwa
function ImageView({ images }) {
    return (
        <div className="imageView">
            <ScrollingImages images={images} />
            <ScrollingImages images={images} /> {/* two times to guarantee continous scroll*/}
        </div>);
}


export default ImageView;
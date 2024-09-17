function ImageWithText({imageUrl, text}) {
    return (
        <div><img src={imageUrl} alt={text} style={{ width: '300px', height: '200px' }} /><p>{text}</p></div>
    );
}export default ImageWithText;
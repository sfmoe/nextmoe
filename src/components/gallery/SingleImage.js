export default function SingleImage(props){
    const {currentImage, styles} = props;
    return(
    <div className={styles.single__image}>
        <img src={currentImage.url}  alt={currentImage.description} />
    </div>
    )
}


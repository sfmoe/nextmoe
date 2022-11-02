import Image from 'next/image'
export default function SingleImage(props){
    const {currentImage, styles} = props;
    // console.log(currentImage)
    return(
    <div className={styles.single__image}>
        <Image src={currentImage.url} alt={currentImage.description} width={currentImage.width} height={currentImage.height} />
        {/* <img src={currentImage.url}  alt={currentImage.description} /> */}
    </div>
    )
}


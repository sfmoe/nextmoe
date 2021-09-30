import contentfulApi from "@utils/ContentfulApi";
import styles from '@styles/image.module.css';


export default function Image(props){
    const currentImage = props.currentImage[0];
 
    return (
    <div className={styles.single__image}>
      <img src={currentImage.url} />
    </div>
    )
}

export const getStaticPaths = () => {
  
  return {
      paths: [],
      fallback: 'blocking'
  }
}

export const getStaticProps = async ({params})=> {

  const {port, image} = params;
  const portfolioImages = await contentfulApi.getPortfolio(port); 

  if(!portfolioImages.length)  {
    return {
      notFound: true,
    };
  }
  let currentImage = getSingleImage(portfolioImages, image);
  if(!currentImage.length)  {
    return {
      notFound: true,
    };
  }
  return {
      props: {currentImage}
  };
}

export const getSingleImage = (port, imageId)=>{
  return port.filter(item=>{
      return item.sys.id == imageId;
  });
}
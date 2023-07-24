import contentfulApi from "@utils/ContentfulApi";
import styles from '@styles/image.module.css';
import SingleImage from '@components/gallery/SingleImage';

export default function Image(props){
    const currentImage = props.currentImage[0];
 
    return (
      <SingleImage styles={styles} currentImage={currentImage} />
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
  const portfolioMenus = await contentfulApi.getAllPortfolioNames();

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
      props: {currentImage, portfolioMenus},
      revalidate: 60,
  };
}

export const getSingleImage = (port, imageId)=>{
  return port.filter(item=>{
      return item.sys.id == imageId;
  });
}
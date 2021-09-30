import styles from '@styles/gallery.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Modal from 'react-modal';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SingleImage from '@components/gallery/SingleImage';

import contentfulApi from "@utils/ContentfulApi";

/* setup modal */
Modal.setAppElement("#__next");

const PortfolioPage = (props)=>{

  const {allImages, port} = props
  const router = useRouter();


  useEffect(() => {
    document.querySelector("#__next").className = "portfolio"; 
  }, []);

  return (
    <>
 
    <Head>
    <title>Moe Martinez | {port.replace(port.charAt(0), port.charAt(0).toUpperCase())} Portfolio | Photographer - Web Developer</title>   
    </Head>
    
    <Modal 
    className="gallery-overlay-body" overlayClassName="gallery-overlay"
    isOpen={!!router.query.imageID}
    onRequestClose={() => router.push(`/portfolio/${port}`)}
    >
      <span className="close"></span>
      <span className="prev"></span>
      <span className="next"></span>
       <img src="/assets/me.jpg"></img>
        {/* <SingleImage styles={styles} currentImage={currentImage} /> */}
    </Modal>
    
    
    <div className={`${styles.gallery} gallery`}>
    {allImages.map(image=>{
       return (
         <Link key={image.sys.id} href={`/image/${port}/${image.sys.id}`}>
          <a>
            <img src={`${image.url}?w=300`}  alt={image.name} /> 
        </a>
        </Link>  
    )
    })}
    </div>

    </>
  )
};

export const getStaticPaths = async () => {
  
  return {
      paths: [],
      fallback: 'blocking'
  }
}


export const getStaticProps = async ({params})=> {
  const port = params.port;
 
  const allPortfolios = await contentfulApi.getAllPortfolioNames();

  let checkPortfolio = allPortfolios.map(port=>{return  port.portfolioTitle}).includes(port);

  if(!checkPortfolio)  {
      return {
        notFound: true,
      };
  }else{

    const images = await contentfulApi.getPortfolio(port);

      return {
      props: {allImages: images, port: port}, // will be passed to the page component as props
    }

}
}

export default PortfolioPage;
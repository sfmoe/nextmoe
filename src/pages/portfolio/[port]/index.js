import styles from '@styles/gallery.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Modal from 'react-modal';

import contentfulApi from "@utils/ContentfulApi";

/* setup modal */
Modal.setAppElement("#__next");

const PortfolioPage = (props)=>{
  const {allImages, port} = props
  const router = useRouter();

  const [modalOpen, setmodalOpen] = useState(false);
  const toggleModal = (e)=>{
    modalOpen ? setmodalOpen(false) : setmodalOpen(true);
  };

  useEffect(() => {
    document.querySelector("#__next").className = "portfolio"; 
    (router.query.SingleImage) ? setmodalOpen(true) : setmodalOpen(false);
  }, []);

  return (
    <>
    <Head>
    <title>Moe Martinez | {port.replace(port.charAt(0), port.charAt(0).toUpperCase())} Portfolio | Photographer - Web Developer</title>   
    </Head>
    <div className={`${styles.gallery} gallery`}>
    {allImages.map(image=>{
       return (
         <Link key={image.sys.id} href={`./${port}?imageID=${image.sys.id}`} as={`/image/${port}/${image.sys.id}`} replace={false}>
          <a>
            <img src={`${image.url}?w=300`}  alt={image.name} /> 
        </a>
        </Link>  
    )
    })}
    </div>
    <Modal className="gallery-overlay-body" overlayClassName="gallery-overlay" 
    isOpen={false}
    onRequestClose={() => router.push(`./${port}`)}
    contentLabel="Post modal">
    <span className="close" onClick={toggleModal}></span>
    <span className="prev"></span>
    <span className="next"></span>
    <img src={`/${router.query.imageID}`}/>
    </Modal>
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
import styles from '@styles/gallery.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Modal from 'react-modal';

import contentfulApi from "@utils/ContentfulApi";

/* setup modal */
Modal.setAppElement("#__next");

const PortfolioPage = ({allImages, port})=>{

  const [modalOpen, setmodalOpen] = useState(false);
  const router = useRouter();

  const toggleModal = ()=>{
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
         <Link key={image.sys.id} href={image.url} >
          <a>
            <img src={`${image.url}?w=300`}  alt={image.name} /> 
        </a>
        </Link>  
    )
    })}
    </div>
    <Modal className="gallery-overlay-body" overlayClassName="gallery-overlay" isOpen={modalOpen}>
    <span className="close" onClick={toggleModal}></span>
    <span className="prev"></span>
    <span className="next"></span>
    <img src={`${router.query.location}/${router.query.SingleImage}`}/>
    </Modal>
    </>
  )
};



export const getStaticProps = async (context)=> {
  const { port } = context.params;
  const images = await contentfulApi.getPortfolio(port);

  return {
    props: {allImages: images, port: context.params.port}, // will be passed to the page component as props
  }
}

export const getStaticPaths = () => {
  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}


export default PortfolioPage;
import styles from '@styles/gallery.module.css';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import contentfulApi from "@utils/ContentfulApi";


const PortfolioPage = (props)=>{

  const {allImages, port} = props

  useEffect(() => {
    document.querySelector("#__next").className = "portfolio"; 
  }, []);

  return (
    <>
    <Head>
    <title>Moe Martinez | {port.replace(port.charAt(0), port.charAt(0).toUpperCase())} Portfolio | Photographer - Web Developer</title>   
    </Head>
 
    <div id="main" className={`${styles.gallery} gallery`}>
    {allImages.map(image=>{
       return (
         <Link key={image.sys.id} href={`/portfolio/${port}/${image.sys.id}`}>
          <a>
            <img src={`${image.url}?w=300`}  alt={`thumbnail for ${image.title}`} /> 
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
      revalidate: 60,
    }
  }
}

export default PortfolioPage;
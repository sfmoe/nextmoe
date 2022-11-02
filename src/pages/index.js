import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import contentfulApi from '@utils/ContentfulApi';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const loadImages = (homehero, allImages) => {

  let hero = homehero.querySelector(".home-hero");
  let imagesFiltered = allImages.filter(item=>{
      if(window.matchMedia("(max-width: 480px)").matches){
        if(item.width < item.height){
          return item;
        }  
      }else{
        return item;
      }
      });
 
  let random = Math.floor(Math.random() * imagesFiltered.length);
  let randomImage = imagesFiltered[random];
  
      if(hero){
      hero.style.backgroundPosition = 'left top';
      hero.style.backgroundImage = `url(${randomImage.url})`;
      
      hero.addEventListener("mousemove", (e)=>{
        let rect = hero.getBoundingClientRect(),
            clientW = e.target.clientWidth,
            clientH = e.target.clientHeight,
            clientX =  e.clientX - rect.x,
            clientY =  e.clientY - rect.y;
   
            hero.style.backgroundPosition = `${(clientX/clientW)*100}% ${(clientY/clientH)*100}%`;

      })

      }
}

const rotateImages = (homehero ,allImages)=>{
  setInterval(()=>loadImages(homehero, allImages), 15000);
}

export default function Home({allImages, pageContent}) {

  const heroContainer = useRef(null)
  useEffect(() => {
    document.querySelector("#__next").className = "homepage";

    loadImages(heroContainer.current, allImages);
    rotateImages(heroContainer.current, allImages); 

  }, []);

  const titleText = "Moe Martinez | Photographer - Web Developer";
  return (
    <>
      <Head>
        <title>{titleText}</title>   
      </Head>

    <section className="home-hero-container" ref={heroContainer}>
      <div className="home-hero"></div>
    </section>
    
    <section id="main" className="home-copy">
    {documentToReactComponents(pageContent.pageContent.json)}
    </section>

    </>
  )
}




export const getStaticProps = async ()=> {
  const images = await contentfulApi.getPortfolio("home");
  const pageContent = await contentfulApi.getPageContet("Home"); 

  return {
    props: {allImages: images, pageContent: pageContent},
    revalidate: 60,
  }
}

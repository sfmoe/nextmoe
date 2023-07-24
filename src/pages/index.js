import Head from 'next/head';
import React, { useEffect } from 'react';
import contentfulApi from '@utils/ContentfulApi';

import Link from "next/link";


export default function Home({portfolioMenus}) {
  useEffect(() => {
    document.querySelector("#__next").className = "homepage";
  }, []);

  const titleText = "Moe Martinez | Photographerss";
  return (
    <>
      <Head>
        <title>{titleText}</title>   
      </Head>
      <div className="homeGallery">
        {portfolioMenus.map(e=>{
          if(e.order == null){
            return;
          }
           return (<Link href={`/portfolio/${e.portfolioTitle}`} 
           alt={`${e.portfolioTitle} portfolio`}  className="homeCategories" style={{backgroundImage: `url("${e.portfolioImagesCollection.items[0].url}")` }} key={e.order}>
            <div className="homeCategoryTitle">{e.portfolioTitle}</div>
            </Link>)
         
        })}
      </div>

    </>
  )
}


export const getStaticProps = async ()=> { 
  const portfolioMenus = await contentfulApi.getAllPortfolioNames();
  return {
      props: {portfolioMenus},
      revalidate: 60,
  };
}
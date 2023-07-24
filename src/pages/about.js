import contentfulApi from "@utils/ContentfulApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import { useEffect } from 'react'


export default function About(props){

    useEffect(() => {
        document.querySelector("#__next").className = "about-page";    
        
      }, []);

     const pageContent = props.pageContent;



    return(
        <div id="main" className="content">
            <section>
        {documentToReactComponents(pageContent.pageContent.json, renderOption(pageContent.pageContent))}
            </section>
        </div>
        )
};


function renderOption(richTextBodyField){
  const assetBlockMap = new Map(
      richTextBodyField.links?.assets?.block?.map((asset) => [asset.sys.id, asset]),
    );
    
  const renderOptions = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
          const { title, url, height, width, description } = assetBlockMap.get(
            node.data.target.sys.id,
          );
       
            return (
              <div className="profile-image">
                <img src={`${url}?w=500`} alt={description} />
              </div>
            );
  
        },
      },
    };
  
    return renderOptions
  }



export const getStaticProps = async ()=> {
    const page = await contentfulApi.getPageContet("About"); 
    const portfolioMenus = await contentfulApi.getAllPortfolioNames();
    return {
        props: {pageContent: page, portfolioMenus},
        revalidate: 60,
    };
}

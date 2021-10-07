import contentfulApi from "@utils/ContentfulApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import { useEffect } from 'react'


export default function Development({pageContent}){
    useEffect(() => {
        document.querySelector("#__next").className = "development-page";    
      }, []);


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
              <div className="image-in-page">
                <img src={`${url}?w=500`} alt={description} />
              </div>
            );
  
        },
      },
    };
  
    return renderOptions
  }

  

export const getStaticProps = async ()=> {
    const page = await contentfulApi.getPageContet("Development"); 
    return {
        props: {pageContent: page}
    };
}

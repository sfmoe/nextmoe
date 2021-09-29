import contentfulApi from "@utils/ContentfulApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { useEffect } from 'react'


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
export default function About({pageContent}){
    useEffect(() => {
        document.querySelector("#__next").className = "about-page";    
      }, []);


    return(
        <div className="content">
            <section>
        {documentToReactComponents(pageContent.pageContent.json, renderOption(pageContent.pageContent))}
            </section>
        </div>
        )
};


export const getStaticProps = async ()=> {
    const page = await contentfulApi.getPageContet("About"); 
    return {
        props: {pageContent: page}
    };
}

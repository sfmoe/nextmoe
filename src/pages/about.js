import contentfulApi from "@utils/ContentfulApi";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from "@contentful/rich-text-types";
import { cloneElement, useEffect } from 'react'

//IG_API_TOKEN
export default function About(props){
    useEffect(() => {
        document.querySelector("#__next").className = "about-page";    
        
      }, []);

     const pageContent = props.pageContent;
     const igData = props.igData.data;

    return(
        <div id="main" className="content">
            <section>
        {documentToReactComponents(pageContent.pageContent.json, renderOption(pageContent.pageContent))}
            </section>
            <section className="ig-posts">
              <h3>Latest Instagram Posts</h3>
              {igData.map(e=>{
                return(
                  <a href={e.permalink} key={e.id}>
                  <div className="ig-post">
                    <img src={e.media_url} alt={e.caption}/>
                    <span>{e.caption}</span>
                  </div>
                  </a>
                )
              })}
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
    const iglatestURL = await fetch(`https://graph.instagram.com/me/media?fields=id,media_url,caption,permalink&access_token=${process.env.IG_API_TOKEN}&limit=2`)
    const igData = await iglatestURL.json();

      console.log(igData)

    const page = await contentfulApi.getPageContet("About"); 
    return {
        props: {pageContent: page, igData: igData},
        revalidate: 60,
    };
}

const publicFolder = "/assets/portfolio/";

export function getStaticProps(context) {
    const { port, image } = context.params
    console.log(context.params)
    return {
      props: {image: image, port: port}, // will be passed to the page component as props
    }
  }

export const getStaticPaths = () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default function Images({image, port}){
    return <div className="solo-image"><img src={`${publicFolder}${port}/${image}`}/></div>
}
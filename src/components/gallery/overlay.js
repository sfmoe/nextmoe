import React, {useEffect} from "react";


const Overlay = (props)=>{
    const [overlayOpen, setOverlayOpen] = React.useState(false);
    return(
        <>
            <img className="full-image" id="fullImage" src="#" alt="full size image"/>
            <div className="gallery-overlay" >
                <span className="close"></span>
                <span className="prev"></span>
                <span className="next"></span>
            </div>
        </>
    )
}

export default Overlay;
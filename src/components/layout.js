import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Script from 'next/script';               

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Layout = (props) => {
        return(
        <>
        <Header props={props.children.props}/> 
        {/* <script src="https://kit.fontawesome.com/b4082de183.js" crossOrigin="anonymous"></script> */}
        {props.children}
        <Footer></Footer>
        </>
        )

}


export default Layout;
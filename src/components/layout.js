import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Script from 'next/script';               

const Layout = (props) => {
  
        return(
        <>
        <Header>
        <title>Moe Martinez | Photographer - Web Developer</title>   
        </Header>
        <Script src="https://use.fontawesome.com/2fa843e17f.js"></Script>
        {props.children}
        <Footer></Footer>
        </>
        )

}


export default Layout;
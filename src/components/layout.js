import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Script from 'next/script';               

const Layout = (props) => {
        return(
        <>
        <Header props={props.children.props}/> 
        <Script src="https://use.fontawesome.com/2fa843e17f.js"></Script>
        {props.children}
        <Footer></Footer>
        </>
        )

}


export default Layout;
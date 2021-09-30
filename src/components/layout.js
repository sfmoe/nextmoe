import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Script from 'next/script';               

class Layout extends React.Component {
    render() {
        return(
        <>
        <Header>
        <title>Moe Martinez | Photographer - Web Developer</title>   
        </Header>
        <Script src="https://use.fontawesome.com/2fa843e17f.js"></Script>
        {this.props.children}
        <Footer></Footer>
        </>
        )
    }
}


export default Layout;
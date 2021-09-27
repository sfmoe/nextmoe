import App, {Head} from "next/app";
import React from "react";
import Layout from "@components/layout";
import '@styles/globals.css';
import '@styles/homepage.css'

class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;

    return(
      <>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </>
    )

  }

}

export default MyApp

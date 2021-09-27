import Document, {Html, Head, Main, NextScript} from "next/document";
class MyDcoument extends Document{

    render(){
        return(
            <Html lang="en">
                <Head>
                <link rel="icon" href="/assets/icon/favicon-16x16.png"  type="image/png" />
                <meta name="description" content="Chicago based photographer and web developer. Beauty, Portraits, Editorials. Street Photography, and building front end for web applications" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}


export default MyDcoument;
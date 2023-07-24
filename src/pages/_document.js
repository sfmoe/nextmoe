import Document, {Html, Head, Main, NextScript} from "next/document";
class MyDcoument extends Document{

    render(){
        return(
            <Html lang="en">
                <Head>
                <link rel="icon" href="/assets/icon/favicon-16x16.png"  type="image/png" />
                <meta name="description" content="Chicago based photographer. Beauty, Portraits, Editorials and Street Photography." />
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
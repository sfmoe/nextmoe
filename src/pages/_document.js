import Document, {Html, Head, Main, NextScript} from "next/document";
class MyDcoument extends Document{

    render(){
        return(
            <Html lang="en">
                <Head>
                <link rel="icon" href="/assets/icon/favicon-16x16.png"  type="image/png" />
                <meta name="description" content="Chicago based photographer. Beauty, Portraits, Headshots, Editorials and Street Photography." />
                <meta property="og:site_name" content="Moe Martinez, Photographer" />
                <meta property="og:title" content="I'm Moe Martinez and I take photos." />
                <meta property="og:url" content="https://moemartinez.com" />
                <meta property="og:description" content="I am a Chicago photographer, I want to take your photo!" />
                <meta property="og:image" content="https://moemartinez.com/assets/websitecard.png" />
                <meta property="og:image:alt" content="I take photos." />

		        <meta name="author" content="Moe Martinez" />

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
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
                <title>Chatsy</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

import "../styles/globals.css";
import "../styles/font.css";

//? layout
import Layout from "../components/Layout";

//? swiper
import "swiper/css/bundle";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

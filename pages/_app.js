import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../node_modules/rc-pagination/assets/index.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

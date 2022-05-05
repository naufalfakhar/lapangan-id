import Wrapper from "../components/Wrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </div>
  );
}

export default MyApp;

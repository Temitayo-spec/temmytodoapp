import { Provider } from "react-redux";
import React from "react";
import store from "../store";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";
import LoadingScreen from "../comps/LoadingScreen";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    // setLoading(false);
  }, []);
  return (
    <Provider store={store}>
      <>
        {!loading ? (
          <>
            <NextNProgress
              startPosition={0.2}
              stopDelayMs={200}
              height={3}
              color="#000"
              showSpinner={false}
              // render={(progressBarProps, ref) => (
              //   <div ref={ref} style={{ position: "fixed", zIndex: 1 }}>
            />
            <Component {...pageProps} />
          </>
        ) : (
          <LoadingScreen />
        )}
      </>
    </Provider>
  );
}

export default MyApp;

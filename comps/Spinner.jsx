import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="loadingSpinner"></div>
    </div>
  );
};

export const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname && setLoading(true);
    };
    const handleComplete = (url) => {
      url === router.pathname && setLoading(false);
      console.log(url, router.asPath);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return loading && <Spinner />;
};

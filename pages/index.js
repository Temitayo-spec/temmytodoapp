import Head from "next/head";
import Frontpage from "../comps/Frontpage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
    return (
      <div className="container">
        <Head>
          <title>Todo List App || MERN Stack</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="A mern stack app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {router.pathname === "/" && <Frontpage />}
      </div>
    );
}

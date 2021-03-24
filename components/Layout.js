import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Nprogress from "nprogress";

const Layout = ({ children, footer = true, dark = false, title }) => {
  const router = useRouter();
  useEffect(() => {
    const handlerouteChange = (url) => {
      console.log(url);
      Nprogress.start();
    };
    router.events.on("routeChangeStart", handlerouteChange);
    router.events.on("routeChangeComplete", () => Nprogress.done());

    return () => {
      router.events.off("routeChangeStart", handlerouteChange);
    };
  }, []);
  return (
    <div className={dark ? "bg-dark" : ""}>
      <Navbar />

      <main className="container py-4">
        {title && <h1 className="text-center text-light">{title}</h1>}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1> Create for Brian Argel</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights reserved</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;

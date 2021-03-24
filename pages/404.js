import Layout from "../components/Layout";
import Link from "next/link";
const custom404 = () => (
  <div className="text-center">
    <Layout>
      <h1>404</h1>
      <p>This page not exist. Please Return 404</p>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </Layout>
  </div>
);

export default custom404;

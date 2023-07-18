import Testimonial from "../components/Testimonial";
import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="bpunty.media Landing Page" />
      <Layout>
        <Hero />
        <About />
        <Testimonial />
      </Layout>
    </>
  );
}

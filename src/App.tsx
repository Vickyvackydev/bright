import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";
import SEO from "./components/SEO";
import SchemaData from "./components/SchemaData";

import Home from "./pages/home";

import { useEffect } from "react";
import lenis from "./utils";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/projects";
import ChainIndustry from "./pages/chain-industry";

import InfinityExchange from "./pages/infinity-exchange";
import BingXExchange from "./pages/bingx-exchange";
import VTraders from "./pages/v-traders";
import Myosin from "./pages/myosin";
import AboutMe from "./pages/about-me";
import PuzzleCollection from "./pages/puzzle-collection";

function App() {
  const location = useLocation();
  const { pathname } = location;

  // Social links from footer.tsx
  const socialLinks = [
    "https://www.instagram.com/brigaz_afia/#",
    "https://x.com/brightafia?s=21",
    "https://www.linkedin.com/in/bright-afia-703481178/",
    "https://www.tiktok.com/@brigaz_afia",
    "https://www.facebook.com/people/Bright-Emmanuel/100075079857314/",
    "https://t.me/brightafia",
  ];

  const getPageSEO = () => {
    const baseTitle = "Bright - Growth Marketer";
    const baseDescription =
      "Bright Emmanuel Afia is a Lagos-based creative expert in storytelling, video content, and marketing—helping brands connect and grow across Africa.";

    switch (pathname) {
      case "/":
        return { title: `${baseTitle} | Home`, description: baseDescription };
      case "/projects":
        return {
          title: `Bright | Projects`,
          description:
            "Explore the various projects and creative works by Bright Emmanuel Afia.",
        };
      case "/chain-industry":
        return {
          title: `Bright | Chain - Industry`,
          description: "Portfolio work for Chain Industry.",
        };
      case "/infinity-exchange":
        return {
          title: `Bright | Infinity - Exchange`,
          description: "Portfolio work for Infinity Exchange.",
        };
      case "/puzzle-collection":
        return {
          title: `Bright | Puzzle - Collection`,
          description: "A collection of creative puzzles and designs.",
        };
      case "/v-traders":
        return {
          title: `Bright | V - Traders`,
          description: "Portfolio work for V-Traders.",
        };
      case "/myosin":
        return {
          title: `Bright | Myosin`,
          description: "Portfolio work for Myosin.",
        };
      case "/about-me":
        return {
          title: `Bright | About - Me`,
          description:
            "Learn more about Bright Emmanuel Afia, his journey, and his expertise.",
        };
      case "/bingx-exchange":
        return {
          title: `Bright | BingX - Exchange`,
          description: "Portfolio work for BingX Exchange.",
        };
      default:
        return { title: baseTitle, description: baseDescription };
    }
  };

  const seoData = getPageSEO();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [pathname]);
  useEffect(() => {
    // On route change, scroll to top smoothly
    lenis.scrollTo(0, {
      offset: 0,
      immediate: false,
    });
  }, [location.pathname]);
  return (
    <AnimatePresence mode="wait">
      <SEO
        title={seoData.title}
        description={seoData.description}
        canonical={`https://www.brightemmanuel.com${pathname}`}
        ogUrl={`https://www.brightemmanuel.com${pathname}`}
      />
      <SchemaData
        type="Person"
        data={{
          name: "Bright Emmanuel Afia",
          url: "https://www.brightemmanuel.com",
          jobTitle: "Growth Marketer & Creative Director",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Lagos",
            addressCountry: "Nigeria",
          },
          sameAs: socialLinks,
        }}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/chain-industry" element={<ChainIndustry />} />
          <Route path="/puzzle-collection" element={<PuzzleCollection />} />
          <Route path="/infinity-exchange" element={<InfinityExchange />} />
          <Route path="/bingx-exchange" element={<BingXExchange />} />
          <Route path="/v-traders" element={<VTraders />} />
          <Route path="/myosin" element={<Myosin />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;

import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";

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

  useEffect(() => {
    if (pathname === "/") {
      document.title = "Bright - Growth Marketer | Home";
    } else if (pathname === "/projects") {
      document.title = "Bright | Projects";
    } else if (pathname === "/chain-industry") {
      document.title = "Bright | Chain - Industry";
    } else if (pathname === "/infinity-exchange") {
      document.title = "Bright | Infinity - Exchange";
    } else if (pathname === "/puzzle-collection") {
      document.title = "Bright | Puzzle - Collection ";
    } else if (pathname === "/v-traders") {
      document.title = "Bright | V - Traders";
    } else if (pathname === "/myosin") {
      document.title = "Bright | Myosin";
    } else if (pathname === "/about-me") {
      document.title = "Bright | About - Me";
    }
  }, [pathname]);
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

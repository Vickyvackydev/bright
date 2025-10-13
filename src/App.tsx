import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./layout";

import Home from "./pages/home";

import { useEffect } from "react";
import lenis from "./utils";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/projects";
import ChainIndustry from "./pages/chain-industry";
import PuzzleExchange from "./pages/puzzle-exchange";
import InfinityExchange from "./pages/infinity-exchange";
import BingXExchange from "./pages/bingx-exchange";
import VTraders from "./pages/v-traders";
import Myosin from "./pages/myosin";

function App() {
  const location = useLocation();
  // const { pathname } = location;

  // useEffect(() => {
  //   if (pathname === "/") {
  //     document.title = "Spark Labs | Home";
  //   } else if (pathname === "/metta") {
  //     document.title = "Spark Labs | Metta";
  //   } else if (pathname === "/unveil") {
  //     document.title = "Spark Labs | Unveil";
  //   } else if (pathname === "/10x-community") {
  //     document.title = "Spark Labs | 10x Community";
  //   } else if (pathname === "/wurlet") {
  //     document.title = "Spark Labs | Wurlet";
  //   } else if (pathname === "/models") {
  //     document.title = "Spark Labs | Models";
  //   } else if (pathname === "/contact") {
  //     document.title = "Spark Labs | Contact";
  //   }
  // }, [pathname]);
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
          <Route path="/puzzle-exchange" element={<PuzzleExchange />} />
          <Route path="/infinity-exchange" element={<InfinityExchange />} />
          <Route path="/bingx-exchange" element={<BingXExchange />} />
          <Route path="/v-traders" element={<VTraders />} />
          <Route path="/myosin" element={<Myosin />} />
        </Routes>
      </Layout>
    </AnimatePresence>
  );
}

export default App;

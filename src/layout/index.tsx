import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroller from "../components/smoothScroller";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroller>
      <div
        // className={clsx(
        //   "w-full bg-[#F2F5F3] transition-colors duration-500",
        //   darkmode ? "bg-custom-black" : "bg-[#F2F5F3]"
        // )}
        className="overflow-hidden"
      >
        <Header />

        {children}
        <Footer />
      </div>
    </SmoothScroller>
  );
}

export default Layout;

import React, { lazy } from "react";
import ResponsiveAppBar from "@/components/Global/Appbar";
import Footer from "@/components/Global/Footer";
import Header from "@/components/header/header";

import About from "@/components/About/About";
import Eventbar from "@/components/Eventbar/Eventbar";


export default function Home() {

  return (
   
  <main>
    <ResponsiveAppBar />
    <Header />
    <About />
    <Eventbar />
    <Footer />
  </main>
  )
}

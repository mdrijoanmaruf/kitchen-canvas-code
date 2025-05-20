
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import TopRecipes from "@/components/TopRecipes";
import FeaturesSection from "@/components/FeaturesSection";
import ChefSpotlight from "@/components/ChefSpotlight";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopRecipes />
      <FeaturesSection />
      <ChefSpotlight />
      <Footer />
    </div>
  );
};

export default Index;

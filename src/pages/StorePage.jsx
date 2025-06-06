import React from "react";
import ShopHeroSection from "../components/home/ShopHeroSection";
import StoreCardsSection from "../components/storecards/StoreCardsSection";
import SubscriptionSection from "../components/subscribtion/SubscriptionSection";

const StorePage = () => {
  
  return (
    <>
      <ShopHeroSection heading={"Store"} />
      <div className="w-full grid grid-cols-1 lg:grid-cols-3  items-center p-5 gap-2">
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
        <StoreCardsSection />
      </div>
      <SubscriptionSection/>
    </>
  );
};

export default StorePage;

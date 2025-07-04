import React from "react";
import ServicesHero from "./ServicesHero";
import ServiceOverviewGrid from "./ServiceOverviewGrid";
import DetailedServiceBreakdown from "./DetailedServiceBreakdown";
import ServiceFlow from "./ServiceFlow";
import ServicePackages from "./ServicePackages";
import SuccessStats from "./SuccessStats";
import Services from "../HomeComponents/Services";
import FAQ from "../AboutComponnets/AboutMain/FAQ";

export default function ServicesMain() {
  return (
    <>
      <div>
        <ServicesHero />
        <ServiceOverviewGrid />
        <Services />
        <DetailedServiceBreakdown />
        <ServiceFlow />
        {/* <ServicePackages /> */}
        {/* <SuccessStats /> */}
        <FAQ />
      </div>
    </>
  );
}

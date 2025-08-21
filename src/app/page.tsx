"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutComponent from "@/components/About";
import ServicesComponent from "@/components/Services";
import ContactComponent from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return (
          <>
            <Hero  />
            <AboutComponent showBgImage={false} isAboutPage={false} />
            <ServicesComponent showBgImage={false} inServicePage={false} />
            <ContactComponent showBgImage={false} />
          </>
        );
      case "about":
        return <AboutComponent showBgImage={true} isAboutPage={true} />;
      case "services":
        return <ServicesComponent showBgImage={true} inServicePage={true} />;
      case "contact":
        return <ContactComponent showBgImage={true} />;
      default:
        return (
          <>
            <Hero  />
            <AboutComponent showBgImage={false} isAboutPage={false} />
            <ServicesComponent showBgImage={false} inServicePage={false} />
            <ContactComponent showBgImage={false} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
      <Footer />
    </div>
  );
}

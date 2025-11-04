import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import Location from "@/components/Location";
import Policies from "@/components/Policies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Accommodations />
      <Location />
      <Policies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

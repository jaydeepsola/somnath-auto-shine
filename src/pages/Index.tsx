import NewNavigation from "@/components/NewNavigation";
import NewHero from "@/components/NewHero";
import NewServices from "@/components/NewServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewGallery from "@/components/NewGallery";
import NewReviews from "@/components/NewReviews";
import CommercialContracts from "@/components/CommercialContracts";
import NewContact from "@/components/NewContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NewNavigation />
      <NewHero />
      <NewServices />
      <WhyChooseUs />
      <NewGallery />
      <NewReviews />
      <CommercialContracts />
      <NewContact />
      <Footer />
    </div>
  );
};

export default Index;

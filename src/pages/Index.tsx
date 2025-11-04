import NewNavigation from "@/components/NewNavigation";
import NewHero from "@/components/NewHero";
import NewServices from "@/components/NewServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import NewGallery from "@/components/NewGallery";
import NewReviews from "@/components/NewReviews";
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
      <NewContact />
      <Footer />
    </div>
  );
};

export default Index;

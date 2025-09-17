import HeroSection from "../../Components/HeroSection/HeroSection";
import CategoriesSection from "../../Components/CategoriesSection/CategoriesSection";
import Reminder from "../../Components/ReminderSection/Reminder";
import FeaturedVideo from "../../Components/ServicesArea/Featured/FeaturedVideo";
import ServiceVideo from "../../Components/ServicesArea/ServicesI/ServiceVideo";

const LandingPage = () => {
  return (
    <div className="bg-amber-50">
      <HeroSection />
      <CategoriesSection />
       <Reminder/>
       <div className="mt-20">

       <FeaturedVideo/>
       <ServiceVideo/>
       </div>
    </div>
  );
};

export default LandingPage;

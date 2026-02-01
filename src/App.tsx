import Header from "@/widgets/Header";
import Footer from "@/widgets/Footer";
import GradientBackground from "@/widgets/GradientBackground";
import LastSectionWidget from "@/widgets/LastSectionWidget";
import ResultWidget from "@/widgets/ResultWidget";
import HeadlineWidget from "@/widgets/HeadlineWidget";
import BenefitWidget from "@/widgets/BenefitWidget";
import HeroImageWidget from "@/widgets/HeroImageWidget";
import MerchWidget from "@/widgets/MerchWidget";
import StatisticsWidget from "@/widgets/StatisticsWidget";
import CommunityWidget from "@/widgets/CommunityWidget";
import GalleryWidget from "@/widgets/GalleryWidget";
import HeroWidget from "@/widgets/HeroWidget";

function App() {
  return (
    <>
      <HeroWidget>
        <Header />
      </HeroWidget>
      <GradientBackground
        rotationDeg={180}
        scale={1}
        objectFit="cover"
        offsetX="0%"
        offsetY="0%"
        filter="brightness(0.7)"
        imgWidth="120%"
        imgHeight="120%"
      >
        <HeadlineWidget />
        <BenefitWidget />
        <HeroImageWidget />
        <MerchWidget />
        <StatisticsWidget />
        <CommunityWidget />
        <GalleryWidget />
        <ResultWidget />
        <LastSectionWidget />
      </GradientBackground>
      <Footer />
    </>
  );
}

export default App;

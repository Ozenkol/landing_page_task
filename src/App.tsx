import Header from "./components/Header";
import FirstPage from "./components/FirstPage";
import GradientBackground from "./components/GradientBackground";
import SecondPage from "./components/SecondPage";
import Footer from "./components/Footer";
import ThirdPage from "./components/ThirdPage";
import FouthPage from "./components/FouthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import LastPage from "./components/LastPage";
import ResultPage from "./components/ResultPage";
import StatisticsWidget from "./components/StatisticsWidget";
import GalleryWidget from "./components/GalleryWidget";
import CommunityWidget from "./components/CommunityWidget";

function App() {
  return (
    <>
      <FirstPage>
        <Header />
      </FirstPage>
      <GradientBackground>
        <SecondPage />
        <ThirdPage />
        <FouthPage />
        <FifthPage />
        <SixthPage />
        <StatisticsWidget />
        <CommunityWidget />
        <GalleryWidget />
        <ResultPage />
        <LastPage />
      </GradientBackground>
      <Footer />
    </>
  );
}

export default App;

// Import Components
import Banner from "./Components/Banner/Banner";
import BestSells from "./Components/BestSells/BestSells";
import ExtraInfo from "./Components/ExtraInfo/ExtraInfo";
import FeatureSlide from "./Components/FeatureSlide/FeatureSlide";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import MainSection from "./Components/MainSection/MainSection";
import PopularProducts from "./Components/PopularProducts/PopularProducts";
// Import Style
import "./Styles/App.scss"

function App() {

  return (
    <>
      <Header />
      <MainSection />
      <FeatureSlide />
      <Banner />
      <PopularProducts />
      <BestSells />
      <ExtraInfo />
      <Footer />
    </>
  )
}

export default App;

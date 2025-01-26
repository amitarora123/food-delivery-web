import {
  Header,
  Featured,
  Hero,
  PopularItems,
  FeaturedRestaurent,
} from './components';
import AppFeatures from './components/AppFeatures';
import BottomContainer from './components/BottomContainer';
import FoodCatagories from './components/FoodCatagories';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Featured />
      <PopularItems />
      <FeaturedRestaurent />
      <FoodCatagories />
      <AppFeatures />
      <BottomContainer />
      <Footer />
    </>
  );
}

export default App;

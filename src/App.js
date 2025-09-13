import "./App.css";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { RootLayout } from "./components/RootLayout";
import { Footer } from "./components/Footer";
import { MenuCard } from "./common/MenuCard";
import { TopPicks } from "./common/TopPicks";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <RootLayout />
      <Footer />
      <MenuCard
        imgUrl={"greeksalad.jpg"}
        title={"Green Salad"}
        description={
          "Explore a whole range of cuisines and satisfy your cravings. Whether you want to dine in or enjoy a meal at home, we’ve got you covered."
        }
      />
      <TopPicks imgUrl={"greeksalad.jpg"} badgeTitle={"Greek Salad"} />
    </>
  );
}

export default App;

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import GalleryContainer from "./components/GalleryContainer";
import "./App.css";

function App() {
  
  return (
    <div id="layout">
      <Header></Header>
      <Hero></Hero>
      <GalleryContainer />
      <Footer></Footer>
    </div>
  )
}

export default App;

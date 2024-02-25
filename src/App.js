import AnaSayfa from "./components/AnaSayfa.jsx";
import Navbar from "./components/Navbar.jsx";
import Baslik from "./components/Baslik.jsx";
import Plan from "./components/Plan.jsx";
import Rota from "./components/Rota.jsx";
import Rotaiki from "./components/Rotaiki.jsx";
import Rotauc from "./components/Rotauc";
import Rotadrt from "./components/Rotadrt";
import Image from "./components/Image.jsx";
import Footer from "./components/Footer.jsx";
import Rotabes from "./components/Rotabes.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <AnaSayfa />
      <Baslik />
      <Plan />
      <Rota />
      <Rotaiki />
      <Rotauc />
      <Rotadrt />
      <Rotabes />
      <Image />
      <Footer />
      
    </div>
  );
}

export default App;

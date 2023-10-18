// import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import SearchBar from "./components/SearchBar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./Pages/FirstPage";
import Genres from "./Pages/Genres";
import GenreId from "./Pages/GenreId";
import Publishers from "./Pages/Publishers";
import PublishersId from "./Pages/PublishersId";
import Platforms from "./Pages/Platforms";
import PlatformsId from "./Pages/PlatformsId";
import { SavedGamesContextProvider } from "./AppContext/AppContext";
import SavedGamesList from "./SavedGames/SavedGames";
import About from "./Pages/About";
function App() {

  return (
    <>
    <SavedGamesContextProvider>
  <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<SearchBar />} />
      <Route path="/game/:id" element={<FirstPage />} />
      <Route path="/genre" element={<Genres />} />
      <Route path="/genre/:id" element={<GenreId />} />
      <Route path="/publishers" element={<Publishers />} />
      <Route path="/publishers/:id" element={<PublishersId />} />
      <Route path="/platform" element={<Platforms />} />
      <Route path="/platform/:id" element={<PlatformsId />} />
      <Route path="saved" element={<SavedGamesList />} />
      <Route path="about" element={<About />} />
    </Routes>
  </Router>
</SavedGamesContextProvider>
      <Footer/>
    </>

  )
}


export default App;

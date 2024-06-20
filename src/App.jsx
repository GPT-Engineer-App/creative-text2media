import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TextToImage from "./pages/TextToImage.jsx";
import TextToVideo from "./pages/TextToVideo.jsx";
import VideoToVideo from "./pages/VideoToVideo.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/text-to-image" element={<TextToImage />} />
        <Route exact path="/text-to-video" element={<TextToVideo />} />
        <Route exact path="/video-to-video" element={<VideoToVideo />} />
      </Routes>
    </Router>
  );
}

export default App;
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TextToImage from "./pages/TextToImage.jsx";
import TextToVideo from "./pages/TextToVideo.jsx";
import VideoToVideo from "./pages/VideoToVideo.jsx";
import ImageToVideo from "./pages/ImageToVideo.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Gallery from "./pages/Gallery.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/text-to-image" element={<TextToImage />} />
        <Route exact path="/text-to-video" element={<TextToVideo />} />
        <Route exact path="/video-to-video" element={<VideoToVideo />} />
        <Route exact path="/image-to-video" element={<ImageToVideo />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
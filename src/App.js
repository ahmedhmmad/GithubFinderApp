import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Notfound from "./components/pages/Notfound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <Router>
      <div className="flex-flex-col justify-between h-screen">
        <Navbar />

        <main className="container px-3 pb-12 mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Notfound />} />
            <Route path="/notfound" element={<Notfound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

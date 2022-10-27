import About from "./component/About";
import Service from "./component/Service";
import FAQ from "./component/FAQ";
import Contact from "./component/Contact";
import Home from "./component/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/About" element={<About />} />

          <Route path="/Service" element={<Service />} />

          <Route path="/Contact" element={<Contact />} />

          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

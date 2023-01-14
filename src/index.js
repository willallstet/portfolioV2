import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Soundtable from "./pages/soundtable";
import Contact from "./pages/contact";
import Redesign from "./pages/redesign";
import Writing from "./pages/writing";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Iterative from "./pages/iterative";
import Cyanobacteria from "./pages/cyanobacteria";
import "./pages/design.css";
import Techlands from "./pages/techlands";
import Blueno from "./pages/bluenoAr";
import Weensy from "./pages/weensyOs";
import MNIST from "./pages/mnist";
import Backpack from "./pages/backpack";
import Tapback from "./pages/tapbackRedesign";
import GeoJournal from "./pages/geoJournal";
import Gitlab from "./pages/gitlab";
import DogCat from "./pages/dogCat";


export default function App() {
  return (
    <div className="all">
      <BrowserRouter>
        <Routes>
          <Route path="/portfolioV2" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="portfolioV2" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="bluenoAr" element={<Blueno />} />
            <Route path="geoJournal" element={<GeoJournal />} />
            <Route path="gitlab" element={<Gitlab />} />
            <Route path="mnist" element={<MNIST />} />
            <Route path="weensyOS" element={<Weensy />} />
            <Route path="soundtable" element={<Soundtable />} />
            <Route path="dogCat" element={<DogCat />} />
            <Route path="redesign" element={<Redesign />} />
            <Route path="writing" element={<Writing />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="techlands" element={<Techlands />} />
            <Route path="iterative" element={<Iterative />} />
            <Route path="cyanobacteria" element={<Cyanobacteria />} />
            <Route path="tapback" element={<Tapback />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

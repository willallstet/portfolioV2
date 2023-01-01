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
import './pages/design.css';
import Techlands from "./pages/techlands";

export default function App() {
  return (
    <div className="all">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="soundtable" element={<Soundtable />} />
            <Route path="redesign" element={<Redesign />} />
            <Route path="writing" element={<Writing />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="techlands" element={<Techlands />} />
            <Route path="iterative" element={<Iterative />} />
            <Route path="cyanobacteria" element={<Cyanobacteria />} />
          </Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
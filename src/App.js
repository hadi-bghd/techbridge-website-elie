import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import Nav from "./Components/Nav";
import "./App.css";
import TechBridgePage from "./Sections/TechBridgePage";
import ITSupport from "./Sections/ITSupport";
import NetworkInfrastructure from "./Sections/NetworkInfrastructure";
import Cybersecurity from "./Sections/Cybersecurity";
import SoftwareDevelopment from "./Sections/SoftwareDevelopment";
import GraphicDesign from "./Sections/GraphicDesign";
import CCTVInstallation from "./Sections/CCTVInstallation";
import ITSolutions from "./Sections/ITSolutions";
import CloudSolutions from "./Sections/CloudSolutions";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/recipes" && <Nav />}

      <Routes>
        <Route path="/" element={<TechBridgePage />} />
        <Route path="/techbridge" element={<TechBridgePage />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="/network-infrastructure" element={<NetworkInfrastructure />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/cctv-installation" element={<CCTVInstallation />} />
        <Route path="/it-solutions" element={<ITSolutions />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="*" element={<TechBridgePage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
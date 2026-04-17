import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Nav from "./Components/Nav";
import "./App.css";
import TechBridgePage from "./Sections/TechBridgePage";
import ITSupport from "./Sections/ITSupport";
import NetworkInfrastructure from "./Sections/NetworkInfrastructure";
import Cybersecurity from "./Sections/Cybersecurity";
import SoftwareDevelopment from "./Sections/SoftwareDevelopment";

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
          <Route path="*" element={<TechBridgePage />} />
        </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Nav from "./Components/Nav";
import "./App.css";
import TechBridgePage from "./Sections/TechBridgePage";

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/recipes" && <Nav />}

      <Routes>
        <Route path="/" element={<TechBridgePage />} />
        <Route path="/techbridge" element={<TechBridgePage />} />
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
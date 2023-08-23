import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";

import Analytics from "./pages/Analytics";
import Devices from "./pages/Devices";
import Settings from "./pages/Settings";
import Alarms from "./pages/Alarms";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Analytics" element={<Analytics />} />
        <Route path="/Devices" element={<Devices />} />
        <Route path="/Alarms" element={<Alarms />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;

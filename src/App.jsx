import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
        <Route exact path="/" component={Home} />
        <Route path="/Analytics" component={Analytics} />
        <Route path="/Devices" component={Devices} />
        <Route path="/Alarms" component={Alarms} />
        <Route path="/Settings" component={Settings} />
      </Routes>
    </Router>
  );
};

export default App;

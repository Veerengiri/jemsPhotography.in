import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wedding from "./pages/Service/Wedding";
import { ServiceProvider } from "./providers/ServiceProvider";

const App = () => {
  return (
    <Router>
      <ServiceProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/wedding" element={<Wedding />} />
          <Route path="/service/engagement" element={<Wedding />} />
          <Route path="/service/pre-wedding" element={<Wedding />} />
          <Route path="/service/cinematography" element={<Wedding />} />
          <Route path="/service/destination-wedding" element={<Wedding />} />
        </Routes>
      </ServiceProvider>
    </Router>
  );
};

export default App;

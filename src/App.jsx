import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/footer/Footer";
import ShreeMataji from "./Pages/shreemataji/ShreeMataji";
import Sahajayoga from "./Pages/sahajayoga/Sahajayoga";
import Center from "./Pages/center/Center";
import Events from "./Pages/eventss/Events";
import Download from "./Pages/downlo/Download";
import { Statecommittee } from "./Pages/committee/state/statecommittee";
import { DistrictCommittee } from "./Pages/committee/district/DistrictCommittee";
import Subtle from "./Pages/sahajayoga/Subtle";

// import StateCommittee from "./Pages/committee/StateCommittee";
// import DistrictCommittee from "./Pages/committee/DistrictCommittee";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shree-mataji" element={<ShreeMataji />} />
          <Route path="/sahaja-yoga" element={<Sahajayoga />} />
          <Route path="/centers" element={<Center />} />
          <Route path="/events" element={<Events />} />
          <Route path="/download" element={<Download />} />
          <Route path="/subtle" element={<Subtle />} />

          {/* ✅ Committee Routes */}
          <Route path="/committee/state" element={<Statecommittee />} />
          <Route path="/committee/district" element={<DistrictCommittee />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;

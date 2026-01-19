import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./Pages/Home";
import ShreeMataji from "./Pages/shreemataji/ShreeMataji";
import Sahajayoga from "./Pages/sahajayoga/Sahajayoga";
import Center from "./Pages/center/Center";
import Events from "./Pages/eventss/Events";
import Download from "./Pages/downlo/Download";
import Subtle from "./Pages/sahajayoga/Subtle";
import { Contact } from "./Pages/contact/Contact";
import { MaharashtraDarshan } from "./Pages/darshan/MaharashtraDarshan";

import { DistrictCommittee } from "./Pages/committee/district/DistrictCommittee";

import { StateCommittee } from "./Pages/committee/state/StateCommittee";
import Chaitanrath from "./Pages/chaitanrath/chaitanrath";

function App() {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <>
      {/* Navbar receives setLanguage to update the language */}
      <Navbar setLanguage={setLanguage} language={language} />

      <main className="pt-16 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route
            path="/shree-mataji"
            element={<ShreeMataji language={language} />}
          />
          <Route
            path="/sahaja-yoga"
            element={<Sahajayoga language={language} />}
          />
          <Route path="/centers" element={<Center language={language} />} />
          <Route path="/events" element={<Events language={language} />} />
          <Route path="/download" element={<Download language={language} />} />
          <Route path="/subtle" element={<Subtle language={language} />} />
          <Route path="/contact-us" element={<Contact language={language} />} />
          <Route
            path="/chaitan-rath"
            element={<Chaitanrath language={language} />}
          />
          <Route
            path="/maharashtra-darshan"
            element={<MaharashtraDarshan language={language} />}
          />
          <Route
            path="/committee/state"
            element={<StateCommittee language={language} />}
          />
          <Route
            path="/committee/district"
            element={<DistrictCommittee language={language} />}
          />
        </Routes>
      </main>

      <Footer language={language} />
    </>
  );
}

export default App;

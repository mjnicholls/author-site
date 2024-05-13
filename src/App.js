import React, { Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Home/Home";
import Books from "./Books/Books";
import Nibbles from "./Nibbles/Nibbles";
import Stew from "./Nibbles/subnibbles/Stew";
import House from "./Nibbles/subnibbles/House";
import Scotland from "./Nibbles/subnibbles/Scotland";
import Royce from "./Nibbles/subnibbles/Royce";
import Skinny from "./Nibbles/subnibbles/Skinny";
import Rankin from "./Nibbles/subnibbles/Rankin";
import Kyrgyzstan from "./Nibbles/subnibbles/Kyrgyzstan";
import Orkney from "./Nibbles/subnibbles/Orkney";
import Etude from "./Nibbles/subnibbles/Etude";
import Tailspin from "./Nibbles/subnibbles/Tailspin";
import Irish from "./Nibbles/subnibbles/Irish";
import Spanish from "./Nibbles/subnibbles/Spanish";
import Thousandth from "./Nibbles/subnibbles/1002nd";
import Trimming from "./Nibbles/subnibbles/Trimming";
import Finnish from "./Nibbles/subnibbles/Finnish";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
};

function App() {
  return (
    <Router basename="/">
      <Suspense fallback={<div>Loading...</div>}>
        <div style={containerStyle}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/books" element={<Books />} />
              <Route path="/nibbles" element={<Nibbles />} />
              <Route path="/nibbles/stew" element={<Stew />} />
              <Route path="/nibbles/house" element={<House />} />
              <Route path="/nibbles/scotland" element={<Scotland />} />
              <Route path="/nibbles/royce" element={<Royce />} />
              <Route path="/nibbles/skinny" element={<Skinny />} />
              <Route path="/nibbles/rank" element={<Rankin />} />
              <Route path="/nibbles/kyrgyzstan" element={<Kyrgyzstan />} />
              <Route path="/nibbles/orkney" element={<Orkney />} />
              <Route path="/nibbles/story" element={<Etude />} />
              <Route path="/nibbles/tailspin" element={<Tailspin />} />
              <Route path="/nibbles/top-ten-irish-novels" element={<Irish />} />
              <Route path="/nibbles/top-ten-spanish-novels" element={<Spanish />} />
              <Route path="/nibbles/thousand" element={<Thousandth />} />
              <Route path="/nibbles/trimming" element={<Trimming />} />
              <Route path="/nibbles/top-ten-nordic-novels" element={<Finnish />} />
              {/* <Route path="*" element={<NoMatch />} /> */}
            </Routes>
          </Layout>
        </div>
      </Suspense>
    </Router>
    
  );
}

export default App;

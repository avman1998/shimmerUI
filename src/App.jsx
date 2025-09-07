import React, { useState } from "react";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Team from "./Team";
import About from "./About";
import Header from "./Header";
import Accordion from "./Accordion";
import ProtectedRoute from "./ProtectedRoute";
import LanguageSelect from "./LanguageSelect";
import ImageSlider from "./ImageSlider";
import Autocomplete from "./Autocomplete";
const App = () => {
  const [lang, setLang] = useState("en");
  return (
    <div>
      <LanguageSelect lang={lang} setLang={setLang} />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/about" element={<About lang={lang} />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/image-slider" element={<ImageSlider />}></Route>
          <Route path="/autocomplete" element={<Autocomplete />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

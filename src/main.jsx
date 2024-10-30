import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AppLayout from "./components/AppLayout.jsx";
import SortingHomePage from "./pages/sorting/SortingHomePage.jsx";
import SortingQuizPage from "./pages/sorting/SortingQuizPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="sorting">
            <Route index element={<SortingHomePage />} />
            <Route path="quiz" element={<SortingQuizPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

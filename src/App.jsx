import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AppLayout from "./components/AppLayout.jsx";
import SortingHomePage from "./pages/sorting/SortingHomePage.jsx";
import SortingQuizPage from "./pages/sorting/SortingQuizPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import CreateAccountPage from "./pages/auth/CreateAccountPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="sorting">
            <Route index element={<SortingHomePage />} />
            <Route path="quiz" element={<SortingQuizPage />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="create-account" element={<CreateAccountPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
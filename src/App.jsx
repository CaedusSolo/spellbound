import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import AppLayout from "./components/AppLayout.jsx";
import SortingHomePage from "./pages/sorting/SortingHomePage.jsx";
import SortingQuizPage from "./pages/sorting/SortingQuizPage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import AuthLayout from "./pages/auth/AuthLayout.jsx";
import CreateAccountPage from "./pages/auth/CreateAccountPage.jsx";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider.jsx";
import { FidgetSpinner } from "react-loader-spinner";
import ProfileHomePage from "./pages/profile/ProfileHomePage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

function App() {
  const { authState, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return (
      <div className="container">
        <FidgetSpinner
          visible={true}
          height="100"
          width="100"
          backgroundColor="#5A189A"
          wrapperClass="fidget-spinner-wrapper"
          ariaLabel="fidget-spinner-loading"
          className="d-block mx-auto w-75"
          ballColors={["#9E4EDD", "#C77DFF", "#7B2CBF"]}
        />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="sorting">
            <Route index element={<SortingHomePage />} />
            <Route
              path="quiz"
              element={
                <ProtectedRoute>
                  <SortingQuizPage />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route index element={<Home />} />
          <Route path="auth" element={<AuthLayout />}>
            {authState.isAuthenticated && <Route path="logout" />}
            <Route path="login" element={<LoginPage />} />
            <Route path="create-account" element={<CreateAccountPage />} />
          </Route>

          <Route path="profile">
            <Route index element={<ProfileHomePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { App };

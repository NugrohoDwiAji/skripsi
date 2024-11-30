import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/registerPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import Dashboard from "./pages/dashboard.jsx";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // Periksa token di localStorage
  if (!token) {
    alert("Akses ditolak. Anda harus login terlebih dahulu."); // Opsional: pemberitahuan kepada pengguna
    return <Navigate to="/login" replace />;
  }
    return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

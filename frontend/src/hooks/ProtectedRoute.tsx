import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const token = localStorage.getItem("token");

  if (!user.user_id || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

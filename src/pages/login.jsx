import "../styles/login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/billing"); 
  };

  return (
    <div className="login-page">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-title">Quotation System</h1>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            autoFocus
            required
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>

        <div className="login-footer">
          ERP / Billing System
        </div>
      </form>
    </div>
  );
}

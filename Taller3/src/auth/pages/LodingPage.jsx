import { AuthContextProvider } from "../context/AuthContextProvider";
import { useForm } from "../hooks/useForm";
import "./LPage.css";

export function LoginPage() {
  const { formState, handleInputChange, handleSubmit } = useForm();

  return (
    <div className="login-container">
      <AuthContextProvider>

        <img className="logo" src="logologin.png" alt="Logo" />
        <form onSubmit={handleSubmit} className="form-container">
          <div className="user-box">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              value={formState.email}
            />
          </div>

          <div className="password-box">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              value={formState.password}
            />

            <button type="submit">Log In</button>
          </div>
        </form>
      </AuthContextProvider>
    </div>
  );
}
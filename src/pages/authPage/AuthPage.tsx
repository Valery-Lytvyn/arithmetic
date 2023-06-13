import Button from "../../components/button/Button";
import { LOGIN_LABEL } from "../../constants/constants";
import useAuth from "../../hooks/useAuth";
import "./authPage.scss";

function AuthPage() {
  const { userName, setUserName, authUser } = useAuth();

  return (
    <div className="auth">
      <h2 className="p-3 text-danger">Please enter your name:</h2>

      <form className="authForm" onSubmit={authUser}>
        <div className="inputGroup">
          <label htmlFor="name">name:</label>

          <input
            autoFocus
            type="text"
            id="name"
            name="name"
            value={userName}
            placeholder="your name"
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                authUser(e);
              }
            }}
          />
        </div>

        <Button
          className="btn-primary px-3"
          ariaLabel="Login button"
          btnValue={LOGIN_LABEL}
          type="submit"
        />
      </form>
    </div>
  );
}

export default AuthPage;

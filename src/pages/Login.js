import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";

// Import Firebase
import { app } from "../firebase";

// Import Context
import { AuthContext } from "../hooks/Auth";

// Import Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import styles
import {
  LoginWrapper,
  LoginForm,
  FormTitle
} from "../styles/loginStyles";
import { Submit } from "../styles/layout";

const Login = ({ history }) => {
  
  const Error = () => toast("Impossible de se Connecter");

  const handleLogin = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        Error();
      }
    },
    [history],
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <LoginWrapper>
      <ToastContainer
        toastClassName="toast_container"
        position="bottom-right"
      />
      <FormTitle>Connectez-vous</FormTitle>
      <LoginForm onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Veuillez saisir votre email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Veuillez saisir votre mot de passe"
          required
        />
        <Submit type="submit">Connexion</Submit>
      </LoginForm>
    </LoginWrapper>
  );
};

export default withRouter(Login);

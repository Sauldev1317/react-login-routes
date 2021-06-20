import * as React from 'react';
import './style.css';

export interface ILoginFormViewProps {
    userName: string;
    password: string;
    addDataForm: (value: string, type: "user" | "password") => void;
    signIn: (event: React.FormEvent) => void;
}

const LoginFormView = (props: ILoginFormViewProps) => {
    const { userName, password, addDataForm, signIn } = props;

  return (
    <div className="signInContainer">
        <div className="formContainer">
            <h5 className="titleSignInText">Welcome back</h5>
            <p className="descriptionSignInText">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. </p>
           <form className="form" onSubmit={(event: React.FormEvent) => signIn(event)}>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Email, username or mobile"
                    value={userName}
                    onChange={(event) => addDataForm(event.target.value, "user")}
                />
                <input 
                    className="input" 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(event) => addDataForm(event.target.value, "password")}
                />
                <p className="forgetPasswordText">Forget password?</p>
                <button className="buttonSignIn ripple" type="submit">Sign in</button>
                <p className="dontHaveAccountText descriptionSignInText">Don’t have an account? <span className="forgetPasswordText">Register</span></p>
           </form>
        </div>
    </div>
  );
}

export default LoginFormView;

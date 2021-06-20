import React from 'react';
import './style.css';
import LoginForm from "../../components/LoginForm";

interface ILoginViewProps {

}

function LoginView (props: ILoginViewProps) {
  return (
    <div className="root">
      <div className="informationContainer">
        <div className="informationImg">
          <div className="imgFilter">
            <h5 className="textWidth titleText">Get ready for the best trip of your life!</h5>
            <p className="textWidth descriptionText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus nisi, molestie non neque et, facilisis venenatis erat. </p>
          </div>
        </div>
      </div>
     <LoginForm />
    </div>
  );
}

export default LoginView
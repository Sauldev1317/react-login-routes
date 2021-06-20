import axios from 'axios';
import * as React from 'react';
import LoginFormView from "./view";

export interface ILoginFormProps {
}

const LoginForm = (props: ILoginFormProps) => {
  const [userName, setUserName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const signIn = (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      generalData: {accountName: "EJEMPLO", reportName: "SEMANAL HORIZONTAL", rangeDates: "12-12-12 / 12-12-12"},
      tableBodyData: [
        {
          employeeName: "SAUL",
          employeeNumber: "1",
          branch: "SISTEMAS",
          day1: "12-12-12",
          day2: "13-12-12",
          day3: "14-12-12",
          day4: "15-12-12",
          day5: "16-12-12",
          day6: "17-12-12",
          day7: "18-12-12",
        }
    ],
      tableHeaderData:[{}],
      typeReport: "semanal-horizontal",
      format: "pdf",
    }

    axios.post(`http://localhost:8080/api/jasper/generateReport`, data)
    .then(res => {
      console.log(res);
      console.log(res.data);
    });
    
    // var xmlHttpRequest = new XMLHttpRequest();
    // xmlHttpRequest.setRequestHeader("Content-type", 'application/json');
    // xmlHttpRequest.open('POST', 'http://localhost:8080/api/jasper/generateReport', true);
    // xmlHttpRequest.send(JSON.stringify(data))
  };

  const addDataForm = (value: string, type: "user" | "password") => {
    switch (type) {
      case "user":
        setUserName(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  }

  return (
    <LoginFormView 
      userName={userName} 
      password={password} 
      addDataForm={addDataForm}
      signIn={signIn}
    />
  );
}

export default LoginForm;
import { useHistory } from 'react-router-dom';
import React, { useState } from "react";
// import React, {useEffect, useState} from "react";
import axios from 'axios';
import './Login_page.css';

function Login_page() {

  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {
      mail: mail,
      password: password
    }
    console.log(data);

    axios.post('https://api.ziyuno.com/api/auth/login/en', data)
    .then(
      res => {
        console.log("res",res);
        history.push("/List");
      }
    )
    .catch(
      err => {
        console.log("err", err);
      }
    )
  }

  return (
    <div className="Login">
      <div className="Login-panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <i className="fas fa-user fa-5x"></i>
          <input className="login-text" type="email" name="mail" placeholder="Mail" onChange={e => setMail(e.target.value)} required/>
          <input className="login-text" type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required/>
          <button className="btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login_page;

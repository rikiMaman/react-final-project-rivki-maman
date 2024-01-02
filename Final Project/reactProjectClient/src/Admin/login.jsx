// import React, { useState } from 'react';
// import Button from "@mui/material/Button";
// import Input from "@mui/material/Input";
// import { BrowserRouter, Switch, Route } from "react-router-dom@7";
// import Input from "@mui/material/Input";
// import Input from '@mui/joy/Input';
// import React, { useState } from "react";
// import Button from "@mui/joy/Button";
// import Input from "@mui/joy/Input";
// import AppStore from "./AppStore";
// import Button from '@mui/material/Button';


// import * as React from 'react';
// import Alert from "@mui/material/Alert";
// import AlertTitle from '@mui/material/AlertTitle';

// import SetAppointment from '../Client/SetAppointment';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import AdminStore from './AppStore'

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { register, handleSubmit } = useForm();
  const [ddata, setData] = useState({});
  const [massege, setmassege] = useState("");
  const naviga = useNavigate()
  const [showPersonalDetails, setShowPersonalDetails] = useState("");

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check if the entered name and password are 'admin' and '123456'
    // if () {
    //   setName('');
    //   setPassword('');
    //   console.log('Invalid credentials');
    // }
  };


  const goToAerver = (data) => {
    axios.post(`http://localhost:8787/login`, data)
      .then(res => {
        Adminstore.setIsAdmin(true);
        const r = res.data;
        console.log(r)
        naviga("/admin")
        setmassege(r)
        setData(JSON.stringify(data))
      }
      ).catch(err =>
        setmassege(err.response),
        handleLogin()


      )
  }
  // useEffect(() => {
  //   Adminstore.setIsAdmin(Adminstore.isAdmin);
  // }, [Adminstore.isAdmin]);
  return (
    <>
      {/* {showPersonalDetails ? <PersonalDetails /> : */}

      <form onSubmit={handleSubmit((data) => {
        goToAerver(data)
      })}>
        {/* type="password" */}
        {/* <input   {...register("name")} placeholder="name" />
          <input  {...register("password")} placeholder="password" /> */}
        <div id='enter'>


          <TextField id="outlined-basic" label="name" {...register("name")} placeholder="name" variant="outlined" type="password"
              />
            <TextField id="filled-basic"  {...register("password")} placeholder="password" variant="filled"
              label="password"
             type="password"
              />
          {/* <TextField type="submit" variant="filled" placeholder="password" /> */}
          {/* <input  /> */}
          <Stack spacing={0} direction="row">
            {/* <Button variant="text">Text</Button> */}
            <Button type="submit" onClick={naviga("/admin")} variant="outlined" >Connected</Button>
          </Stack>
          <p>{massege}</p>
        </div>
      </form>
    </>
  )

}




import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter as Router } from 'react-router-dom';
import Client from "./Client/Client";
import Admin from "./Admin/Admin";
import { useLocation } from 'react-router-dom';
import styled from "@emotion/styled";

function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleNavigation = (path) => {
    navigate(path);
    setButtonVisible(false)
  };

  return (
    <div >
      {buttonVisible&&<Button  type="submit" variant="outlined" onClick={() => handleNavigation('./client')}>
        Client
      </Button>}
      {buttonVisible&& <Button  type="submit"  variant="outlined" onClick={() => handleNavigation('/login')  } >
        Business
      </Button>}
      
    </div>
  );
}
export default HomePage;
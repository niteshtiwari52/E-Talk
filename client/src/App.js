import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import Error from "./Components/Error";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";
import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";

import { darkTheme, lightTheme} from "./Components/Themes"
import { useSelector } from "react-redux";


import { getMySelf } from "./Redux/Reducer/User/user.action";
import { useDispatch } from "react-redux";
import { BsWindowSidebar } from "react-icons/bs";


function App() {
  const [loading, setloading] = useState(false);
  const darkThemeEnabled = useSelector((state) => state.themeReducer.darkThemeEnabled);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);



  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.ETalkUser){

      dispatch(getMySelf()); 
    }
   
 
  }, [localStorage]);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      primary: "#1ca9fe",
      secondary: "#4eac6d",
      danger: "#ff4e2b",
      light: "#223645",

      bgPrimary: "rgb(173,216,255)",
      bgSecondary: "rgb(78,172,109)",

      bg: "#f7f7ff",
      bgprimary: "#eff7fe",

      btn: "#1ca9fe",
      btnSecondary: "rgb(22 163 74)",
      btnlight: "#f6f6f9",
      
      hr: "#ffffff",
      border: "#eff1f2",
      gradient: "linear-gradient(145deg,#1ca9fe,#1c6ee9);",
    },
    media: {
      mobile: "800px",
      tab: "998px",
    },
  };


  
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage />}>
              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

import { Route, Routes, useNavigate } from "react-router-dom";
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

import { darkTheme, lightTheme } from "./Components/Themes";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { getMySelf } from "./Redux/Reducer/User/user.action";
import { fetchChats } from "./Redux/Reducer/Chat/chat.action";
import Verification from "./Components/Verification";
import Verify from "./Components/Verify";

function App() {
  const [loading, setloading] = useState(false);
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkThemeEnabled = useSelector(
    (state) => state.themeReducer.darkThemeEnabled
  );
  const user = useSelector((globalState) => globalState.user.userDetails);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (localStorage.ETalkUser) {
      dispatch(getMySelf());

      dispatch(fetchChats());
    }
    // eslint-disable-next-line
  }, [localStorage]);

  // useEffect(() => {
  //   if (user) {
  //     setStatus(user.is_verified);
  //   }
  //   if (status !== true) {
  //     navigate("/verification");
  //   }
  // }, [user]);

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/verification" element={<Verification />} />
            <Route path="/verify-email/:token" element={<Verify />} />
            <Route path="/features" element={<Features />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<AuthPage />}>
              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/team" element={<Error />} />
          </Routes>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;

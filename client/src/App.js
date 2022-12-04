import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import DefaultLayoutHoc from "./Layout/DefaultLayout";
import AuthPage from "./Pages/AuthPage";
import HomePage from "./Pages/HomePage";
import Error from "./Components/Error";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/auth" element={<AuthPage />}>
            <Route path="" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
// import About from "./Components/About";
// import HomePage from "./Pages/Homepage";

import "./App.css";
import Error from "./components/Error";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/auth" element={<About />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

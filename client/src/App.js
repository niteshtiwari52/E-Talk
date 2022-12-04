import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Error from "./components/Error";
import ChatPage from "./Pages/ChatPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

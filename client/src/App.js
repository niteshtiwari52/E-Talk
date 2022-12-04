import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import HomePage from "./Pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/auth" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;

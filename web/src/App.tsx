import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./authentication/signup";
import Signin from "./authentication/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App;

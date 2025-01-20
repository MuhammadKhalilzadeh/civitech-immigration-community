import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./authentication/signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./authentication/signup";
import Signin from "./authentication/signin";
import ForgotPassword from "./authentication/forgot-password";
import SetNewPassword from "./authentication/set-new-password";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/" element={<SetNewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

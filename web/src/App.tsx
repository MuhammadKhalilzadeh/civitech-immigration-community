import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./authentication/signup";
import Signin from "./authentication/signin";
import ForgotPassword from "./authentication/forgot-password";
import SetNewPassword from "./authentication/set-new-password";
import Layout from "./layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/set-new-password" element={<SetNewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

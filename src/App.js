import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";

// Amplify imports
// import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";

// pages
import LandingPage from "./Components/LandingPage";
import NotFound from "./Components/NotFound";
// import LoginPage from "./Components/auth/LoginPage";
// import RegisterPage from "./Components/auth/RegisterPage";
// import RegisterEmailCode from "./Components/auth/RegisterEmailCode";
// import PasswordResetPage from "./Components/auth/ResetPasswordForm";
// import PasswordResetEmailPage from "./Components/auth/ResetPasswordEmail";
// import UserDashboard from "./Components/userDash/UserDashboard";
// import TestForm from "./Components/auth/TestForm";

// layouts and wrappers
import RootLayout from "./layouts/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<LandingPage />} />
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/registerconfirmation" element={<RegisterEmailCode />} />
        <Route path="/resetpassword" element={<PasswordResetPage />} />
        <Route path="/test" element={<TestForm />} /> */}
        {/* <Route
          path="/resetpasswordemail"
          element={<PasswordResetEmailPage />}
        />
        <Route path="/dashboard" element={<UserDashboard />} /> */}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  // const [user, setUser] = useState("");

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

// export default withAuthenticator(App);

export default App;

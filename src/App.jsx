import React, { useContext, useState } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import VerificationCode from "./screens/VerificationCode";
import ForgotPassword from "./screens/ForgotPass";
import ChangePassword from "./screens/ChangePass";
import UploadPicture from "./screens/UploadPic";
import Profile from "./screens/Profile";
import Footer from "./components/Footer/Footer";
import FirPage from "./screens/FirPage";
import UserLanding from "./screens/UserLanding";
import Contact from "./screens/Contact";
import FirPageNSI from "./screens/FirPageNSI";
import History from "./screens/History";
import { HeaderContext } from "./Contexts/HeaderContext";
import HistoryNSI from "./screens/HistoryNSI";
import { UserContext } from "./Contexts/UserContext";
import { WidgetLoader } from "react-cloudinary-upload-widget";
import BlogDetails from "./screens/BlogDetails";
function App() {
  const [showHeader, setShowHeader] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <WidgetLoader />
      <HeaderContext.Provider value={{ showHeader, setShowHeader }}>
        <Routes>
          <Route path="/" element={<UserLanding />} />
          <Route path="/fir" element={<FirPage />} />
          <Route path="/fir_not_signed" element={<FirPageNSI />} />
          <Route path="/history" element={<History />} />
          <Route path="/history_not_signed" element={<HistoryNSI />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign_in" element={<SignIn />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path="/verify" element={<VerificationCode />} />
          <Route path="/forgot_pass" element={<ForgotPassword />} />
          <Route path="/change_pass" element={<ChangePassword />} />
          <Route path="/upload_pic" element={<UploadPicture />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route
            path="*"
            element={
              <>
                <h1>404</h1>
                <h3>Page not Found</h3>
              </>
            }
          />
        </Routes>
      </HeaderContext.Provider>
      <Footer />
    </>
  );
}

export default App;

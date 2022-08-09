import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "pages/Home/Home.page";
import AboutPage from "pages/About/About.page";
import ContactPage from "pages/Contact/Contact.page";
import DefaultLayout from "layouts/default.layout";
// import AdminLayout from "layouts/admin.layout";
import Registerpage from "pages/Register/Register.page";
import LoginPage from "pages/Login/Login.page";
// import UserManagementPage from "Admin/UserManagement.page";
import DetailPage from "pages/Detail/Detail.page";
// import Spinner from "components/Spinner/Spinner"; 
import CheckoutPage from "pages/Checkout/Checkout.page";

function App() {
  return (
    <div>
      {/* <div className="relative z-10">
        <Spinner></Spinner>
      </div> */}
      <div className="relative z-11">
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="detail/:id" element={<DetailPage />} />
            <Route path="checkout/:id" element={<CheckoutPage />} />
          </Route>

          {/* Trang đăng nhập và đăng kí sẽ không dùng chung component Header nên sẽ đặt ngoài Route Default Layout */}
          <Route path="register" element={<Registerpage />} />
          <Route path="login" element={<LoginPage />} />
       

          {/* <Route path="/admin" element={<AdminLayout />}> 
            <Route index element={<h1> dashboard </h1>} />
            <Route path="users" element={<UserManagementPage/ >} />
            <Route path="moives" element={<h1>Movie Management</h1>} />
          </Route> */}
          <Route path="*" element={<h1>404 Not Found !</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

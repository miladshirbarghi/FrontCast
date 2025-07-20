import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/home/home';
import Course from './components/course/course';
import Courses from './pages/courses/courses';
import Blog from './pages/blog/blog';
import Contact from './components/contact/contact';
import Cart from './pages/cart/Cart'
import AdminLogin from './pages/adminLogin/adminLogin';
import Admin from './pages/admin/admin';
import NavBar from './components/navbar/navBar';


function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem("isAdmin");
  return isAdmin ? children : <Navigate to="/admin-login" />;
}



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:courseId" element={<Course />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

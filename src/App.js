import { BrowserRouter, Routes, Route } from "react-router-dom";
import MessageWarning from './view/auth/messageWarning';
import LoginPage from './view/auth/login';
import Homepage from './view/homepage/home';
import MenuList from './view/homepage/menuList';
import ProtectedRoute from './utils/protectedRoute';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const isMobile = () => window.innerWidth < 768;

  return (
    <BrowserRouter>
      <Routes>
        <Route>
          {isMobile() ? (
              <Route path="/" element={<LoginPage />} />
          ) : (
              <Route path="/" element={<MessageWarning />} />
          )}
          <Route path="home" element={<ProtectedRoute element={Homepage} />} />
          <Route path="menu" element={<MenuList />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

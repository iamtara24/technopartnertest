import LoginPage from './view/auth/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotificationPage from './view/NotificationPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<LoginPage />} />
          <Route path="notification" element={<NotificationPage />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

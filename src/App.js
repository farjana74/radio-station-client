import logo from './logo.svg';
import './App.css';

import Footer from './Pages/Shared/Footer/Footer';
import Footers from './Pages/Shared/Footers/Footers';
import Navigation from './Pages/Shared/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import MoreShows from './Pages/MoreShows/MoreShows';
import Dashboard from './Pages/Dashboard/Dashboard';
import ContactUs from './Pages/ContactUs/ContactUs';
import ShowCreate from './Pages/Dashboard/ShowCreate/ShowCreate';
import ManagesShow from './Pages/Dashboard/ManagesShow/ManagesShow';
import ShowUpdate from './Pages/Dashboard/ShowUpdate/ShowUpdate';

import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Login/Register/Register';

import LoginUser from './Pages/Login/LoginUser/LoginUser';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';




function App() {

  return (
    <div className='app'>

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutUs />} />

          {/* protected route -----*/}
          <Route path="moreShows" element={
            <PrivateRoute >
              <MoreShows />
            </PrivateRoute>

          } />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<LoginUser />} />
          <Route path="register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />


          {/* dasbhbaord route */}
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="showCreate" element={<ShowCreate />}></Route>
            <Route path="manageShow" element={<ManagesShow />}></Route>
            <Route path="showUpdate/:showId" element={<ShowUpdate />}></Route>



          </Route>



        </Routes>


      </AuthProvider>

    </div>
  );
}

export default App;

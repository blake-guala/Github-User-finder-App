import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import About from './components/About';
import { Search } from './components/Search';
import { Alert } from './components/layout/Alert';
import { Fragment } from 'react';
import Users from './githubUsers/Users';
import { User } from './githubUsers/User';
import { NotFoundPage } from './components/NotFoundPage';
import { Footer } from './components/layout/Footer';



function App() {

  return (
    <div>
      <Router>
        <div>
          <Navbar/>
          <Alert/>
        </div>
        <div className="container">
          <Routes>
            <Route path='/' element={<Fragment>
              <Search/>
              <Users/>
            </Fragment>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/user/:login' element={<User/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

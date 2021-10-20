import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home/Home';
import NotFound404 from './Components/Pages/404/NotFound404';
import Blog from './Components/Pages/Blog/Blog';
import LogIn from './Components/Pages/LogIn/LogIn';
import Header from './Components/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import Booking from './Components/Pages/Booking/Booking';
import PrivetRoute from './Components/Pages/LogIn/PrivetRoute/PrivetRoute';
import Contact from './Components/Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
          <Home></Home>
          </Route>
          <Route exat path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivetRoute path="/booking/:serviceId">
          <Booking></Booking>
          </PrivetRoute>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
          <NotFound404></NotFound404>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

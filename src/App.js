import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
//import Navbar from './components/common/navbar';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import welome from './components/pages/welcome/welcome'
import Footer from './components/common/footer'
import AboutUs from './components/pages/aboutus/Aboutus'
import Home from './components/pages/home/Home'
import Data from './components/pages/subPages/Data'
import Graphic from './components/pages/subPages/GraphicDesign'
import Other from './components/pages/subPages/Other'
import Programming from './components/pages/subPages/Programming'
import Serivces from './components/pages/services/Services'
import Video from './components/pages/subPages/VideoAnimation'
import Writing from './components/pages/subPages/Writing'
import MyProfile from './components/pages/profile/MyProfile'
import Messages from './components/pages/messages/Messages'
import Gigs from './components/pages/creategig/Gigs'
import GigView from './components/GigView'
import GigForm from './components/pages/creategig/GigForm'
import SignUpHome from './components/pages/login/SignUpHome'
import SignIn from './components/pages/login/SignIn'
import SellerSignUp from './components/pages/login/SellerSignUp'
import BuyerSignUp from './components/pages/login/BuyerSignUp'
import EditGig from './components/pages/creategig/EditGig'
import Login from './Authscreens/Login.js'
import BuyerRegister from './Authscreens/BuyerRegister'
import SellerRegister from './Authscreens/SellerRegister'
import ForgetPassword from './Authscreens/ForgetPassword'
import ResetPassword from './Authscreens/ResetPassword'
import Activate from './Authscreens/Activate'
import Private from './Authscreens/Private'
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

function App() {

  const [gigs, setGigs] = useState([]);

  useEffect(() => {
      function getGigs(){
          axios.get("http://localhost:5000/api/gigs/").then((res) => {
              setGigs(res.data);
          }).catch((err) => {
              console.log(err.message);
          })
      }
      getGigs();
  }, [])

    return (
      <>
      <Router>
        <Switch>
        <PublicRoute restricted={true} path='/' exact component={welome}/>
        <Route path='/aboutus' exact component={AboutUs}/>
        <PrivateRoute path='/home' exact component={Home}/>
        <PrivateRoute path='/data' exact component={Data}/>
        <PrivateRoute path='/grpahic-and-design' exact component={Graphic}/>
        <PrivateRoute path='/other' exact component={Other}/>
        <PrivateRoute path='/programming-and-tech' exact component={Programming}/>
        <Route path='/services' exact component={Serivces}/>
        <PrivateRoute path='/video-and-animation' exact component={Video}/>
        <PrivateRoute path='/writing-and-translation' exact component={Writing}/>
        <PrivateRoute path='/myprofile' exact component={MyProfile}/>
        <PrivateRoute path='/messages' exact component={Messages}/>
        <PrivateRoute path='/Gigs' exact component={Gigs}/>
        <Route exact path='/Gigs/:id' render={props => <GigView {...props} gigs={gigs}/>} />
        <PrivateRoute path='/GigForm' exact component={GigForm}/>
        <Route path='/SignUpHome' exact component={SignUpHome}/>
        <Route path='/SignIn' exact render = {props => <Login {...props} />} />
        <Route path='/SellerSignUp' exact render={props => <SellerRegister {...props} />} />
        <Route path='/BuyerSignUp' exact render={props => <BuyerRegister {...props} />} />
        <Route exact path='/Gigs/edit/:id' render={props => <EditGig {...props} update={gigs}/>} />
        <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
        <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
        <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
        <PrivateRoute path="/private" exact component={Private} />
      </Switch>
      <Footer/>
        </Router>
        </>
    );
  }
  
  export default App;
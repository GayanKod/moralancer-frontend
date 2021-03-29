import './App.css';
import Navbar from './components/common/navbar';
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

function App() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={welome}/>
        <Route path='/aboutus' exact component={AboutUs}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/data' exact component={Data}/>
        <Route path='/grpahic-and-design' exact component={Graphic}/>
        <Route path='/other' exact component={Other}/>
        <Route path='/programming-and-tech' exact component={Programming}/>
        <Route path='/services' exact component={Serivces}/>
        <Route path='/video-and-animation' exact component={Video}/>
        <Route path='/writing-and-translation' exact component={Writing}/>
        <Route path='/myprofile' exact component={MyProfile}/>
        <Route path='/messages' exact component={Messages}/>
        <Route path='/Gigs' exact component={Gigs}/>
        <Route path='/Gigs/:id' exact component={GigView}/>
        <Route path='/GigForm' exact component={GigForm}/>

      </Switch>
      <Footer/>
        </Router>
        </>
    );
  }
  
  export default App;
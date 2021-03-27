import './App.css';
import Navbar from './components/common/navbar';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import welome from './components/pages/welcome/welcome'
import Footer from './components/common/footer'
import AboutUs from './components/pages/aboutus/Aboutus'

function App() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={welome}/>
        <Route path='/aboutus' exact component={AboutUs}/>
      
      </Switch>
      <Footer/>
        </Router>
        </>
    );
  }
  
  export default App;
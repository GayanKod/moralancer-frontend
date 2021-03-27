import './App.css';
import Navbar from './components/common/navbar';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import welcome from './components/pages/welcome/welcome';
import Footer from './components/common/footer';

function App() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={welcome}/>
      
      </Switch>
      <Footer/>
        </Router>
        </>
    );
  }
  
  export default App;
import './App.css';
import Navbar from './components/common/navbar';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import welome from './components/pages/welcome/welcome'
function App() {
    return (
      <>
      <Router>
        <Navbar/>
        <Switch>
        <Route path='/' exact component={welome}/>
      
      </Switch>
        </Router>
        </>
    );
  }
  
  export default App;
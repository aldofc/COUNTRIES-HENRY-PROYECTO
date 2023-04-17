import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import Create from './Pages/Create/Create'
import Activities from './Pages/Activities/Activities'
import { Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001/';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Landing} />
      <Route exact path='/home' component={Home} />
      <Route exact path='/create' component={Create} />
      <Route exact path='/home/:id' component={Details} />
      <Route exact path='/activities' component={Activities} />
    </div>
  );
}

export default App;

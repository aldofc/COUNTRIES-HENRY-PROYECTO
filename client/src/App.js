import Landing from './Pages/Landing/Landing'
import Home from './Pages/Home/Home'
import Details from './Pages/Details/Details'
import Create from './Pages/Create/Create'
import { Route } from 'react-router-dom'



import './App.css';


function App() {
  return (
    <div className="App">
     <Route exact path='/' component={Landing} />
     <Route exact path='/home' component={Home}/>
     <Route exact path='/create' component={Create}/>
     <Route exact path='/home/:id' component={Details} />
    </div>
  );
}

export default App;

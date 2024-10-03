
import {Routes,Route,Link} from 'react-router-dom'
import Login from './Login';
import SignUp from './SignUp';
function App() {
  return (
    
    <div className="App">
      <nav className="nav">
        
        <Link to="/signup" className="nav-item">Signup</Link>
        <Link to="/" className="nav-item">Login</Link>
      </nav>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/sigup" element={<SignUp/>}/>
      </Routes>

    </div>

  );
}


export default App;

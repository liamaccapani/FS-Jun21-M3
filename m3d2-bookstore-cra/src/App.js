import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from "./Components/Footer"
import LatestRelease from './Components/LatestRelease';
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar color="dark"/>
  
        <Welcome />
  
        <LatestRelease category="scifi"/>
        {/* <LatestRelease category="romance"/>
        <LatestRelease category="history"/> */}
  
        <Footer color="dark" />

      </Router>
    </div>
  );
}

export default App;

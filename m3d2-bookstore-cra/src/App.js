import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <MyNavbar color="dark"/>

      <Welcome />

      <LatestRelease category="scifi"/>
      {/* <LatestRelease category="romance"/>
      <LatestRelease category="history"/> */}

      <Footer color="dark" />

    </div>
  );
}

export default App;

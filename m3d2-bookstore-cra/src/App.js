import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './Components/MyNavbar';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';

function App() {
  return (
    <div className="App">
      <MyNavbar color="dark"></MyNavbar>

      <Welcome></Welcome>

      <LatestRelease></LatestRelease>

      {/* <Footer color="dark"></Footer> */}

    </div>
  );
}

export default App;

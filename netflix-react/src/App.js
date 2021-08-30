import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/CustomNav';
import Footer from './components/Footer';
import Header from './components/Header';
// import Placeholders from './components/Placeholders';

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Header />
      
      <Footer />
    </div>
  );
}

export default App;

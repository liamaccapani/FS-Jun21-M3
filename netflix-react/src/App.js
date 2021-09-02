import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './components/CustomNav';
import Footer from './components/Footer';
import Header from './components/Header';
import RowOfMovies from './components/RowOfMovies';
// import Placeholders from './components/Placeholders';

function App() {
  return (
    <div className="App">
      <CustomNav />
      <Header />
      {/* movies={result of fetch} */}
      <RowOfMovies title="Row 1" />
      
      <Footer />
    </div>
  );
}

export default App;





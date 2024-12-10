import logo from '../assets/img/logo.svg';
import './App.css';
import {NavBar} from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap-grid.min.css'



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
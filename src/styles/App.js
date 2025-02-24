import logo from '../assets/img/logo.svg';
import './App.css';
import {NavBar} from '../components/NavBar';
import {Banner} from '../components/Banner';
import {Skills} from '../components/Skills';
import {Project} from '../components/Project';
import 'bootstrap/dist/css/bootstrap-grid.min.css'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
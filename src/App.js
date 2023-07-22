import Navigation from './components/Navigation';
import Sectionone from './components/Sectionone';
import Sectiontwo from './components/Sectiontwo';
import Sectionthree from './components/Sectionthree';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <Footer/>
    </div>
  );
}

export default App;
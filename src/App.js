import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './components/home/home';
import ImageSlider from './components/slider/slider';

function App() {
  

  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

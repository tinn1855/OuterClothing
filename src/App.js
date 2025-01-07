import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import ImageSlider from './components/slider/slider';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageSlider/>
      <Footer/>
    </div>
  );
}

export default App;

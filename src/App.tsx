import { useEffect } from 'react';
import './App.css';
import Dash from './components/Dash';
import Features from './components/Features';
import Scrollbar from 'smooth-scrollbar';
import Media from './components/Media';
import Footer from './components/Footer';

const options = {
  damping: 0.1,
  thumbMinSize: 20,
  renderByPixels: true,
  alwaysShowTracks: false,
  continuousScrolling: true
}

function App() {

  useEffect(() => {
      Scrollbar.init(document.body, options);
  }, []);

  return (
    <div className="App">
        <Dash />
        <Features />
        <Media />
        <Footer />
    </div>
  );
}

export default App;


import './App.css';
import Claim from './Claim/Claim';
import Header from './header/Header';
import SmoothSlider from './smooth-slider/SmoothSlider';


function App() {
  return (
    <div className="bg-gradient-to-r from-[#000000] to-[#222222]">
      <Header/>
      <Claim/>
      <SmoothSlider/>
    </div>
  );
}

export default App;

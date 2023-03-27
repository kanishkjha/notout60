import './App.css';
import Navbar from './components/Navbar';
import Links from './components/Links';
import Middle1 from './components/Middle1';
import Middle2 from './components/Middle2';
import Middle3 from './components/Middle3';
import Middle4 from './components/Middle4';
import Middle5 from './components/Middle5';
import Lower from './components/Lower';
import SecondLast from './components/SecondLast';
import Last from './components/Last';
import Footer from './components/Footer';

function App() {
  return (

    <div className="App">
      <Navbar/>
      <Links/>
      <Middle1/>
      <Middle2/>
      <Middle3/>
      <Middle4/>
      <Middle5/>
      <Lower />
      <SecondLast/>
      <Last/>
      <Footer/>
    </div>

  );
}

export default App;

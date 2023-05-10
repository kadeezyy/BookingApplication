import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar'
import SelectionBox from './components/SelectionBox/SelectionBox';
import ShowCase from './components/ShowCase';
import TextField from './components/TextField/TextField';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ShowCase />
      <TextField text={"Поднимите ваши деловые встречи на новые высоты"}/>
      <SelectionBox />
      <Footer />
    </div>
  );
}

export default App;

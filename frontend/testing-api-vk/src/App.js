import './App.css';
import Navbar from './components/Navbar'
import SelectionBox from './components/SelectionBox';
import ShowCase from './components/ShowCase';
import TextField from './components/TextField/TextField';
function App() {
  return (
    <div className="App">
      <Navbar />
      <ShowCase />
      <TextField text={"Достигайте новых вершин продуктивности с нами"}/>
      <SelectionBox />
    </div>
  );
}

export default App;

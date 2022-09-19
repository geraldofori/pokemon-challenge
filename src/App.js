import { Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Homepage from "./components/Homepage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/allPokemons" element={<Homepage/>}></Route>
        <Route path="/pokemon" element={<Detail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

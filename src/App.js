import './App.css';
import { HashRouter, Routes, Route} from "react-router-dom";
import NameForm from './Component/NameForm';
import Pokemones from './Component/Pokemones';
import ProtectedRoutes from './Component/ProtectedRoutes';
import PokemonDetail from './Component/PokemonDetail';

function App() {
  return (
    <HashRouter>
         <Routes>
               <Route path="/" element={<NameForm  />} />

                 <Route element={<ProtectedRoutes />}>
                       <Route path="/Pokemones" element={<Pokemones  />} />
                          < Route path="/Pokemones/:name" element={<PokemonDetail />} />
                 </Route>

       </Routes>
    </HashRouter>
  );
}

export default App;

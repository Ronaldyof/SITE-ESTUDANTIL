import { Routes, Route } from "react-router-dom";
import Blog from '../pages/Blog';
import Contato from '../pages/Contato';
import Home from '../pages/Home';
import Atividades from '../pages/Atividades'

function AppRoutes(){
   return(
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/Blog" element={ <Blog /> } />
         <Route path="/Contato" element={<Contato />} />
         <Route path="/Atividades" element={<Atividades/>} />
      </Routes>
   );
}
export default AppRoutes;
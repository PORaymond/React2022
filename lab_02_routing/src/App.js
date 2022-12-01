import './App.css';
import {BrowserRouter, Route, Router} from "react-router-dom";

const QatarEtatVoyou = () => {
   return (
      <div>
         Page de l’État voyou !
      </div>
   )
}

function App() {
   return (
      <Router>
         <BrowserRouter>
            <Route path="/fifa" component={QatarEtatVoyou}></Route>
         </BrowserRouter>
      </Router>
   );
}

export default App;

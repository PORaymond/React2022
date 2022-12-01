import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {useState} from "react";

const Accueil = () => {
   return (<div>Je suis Accueil</div>)
};
const Faq = (/*props*/) => {
   //console.log(props);
   return (
      <div>
         Je suis la foire aux questions

      </div>)


};
const Cgv = (/*props*/) => {
   return (
      <div>
         <h1>Conditions générales de ventes</h1>
      </div>)
};
const Page404 = () => {
   //return (<div> Page 404</div>)
   const [connected, setConnected] = useState(false);

   if (!connected) {
      return (
         <div>
            <p>Vous n’êtes pas connecté</p>
            <button onClick={() => setConnected(true)}>Se connecter</button>
         </div>
      );
   }
   return (<Navigate to="/"/>)
};

const CheckProps = (/*props*/) =>{
   return(
      <div>Vérifier les props qui sont là</div>
   )
}

function App() {
   return (
      <BrowserRouter>
         <CheckProps/>
         <header>
            <h2>Menu</h2>
            <ul>
               <li><Link to="/">Acceuil</Link></li>
               <li><Link to="/faq">Foire aux questions</Link></li>

            </ul>
         </header>
         <Routes>
            <Route path="/" element={<Accueil/>}/>
            <Route path="/faq" element={<Faq/>}/>
            <Route path="/cgv" element={<Cgv/>}/>
            <Route path="*" element={<Page404/>}/>
         </Routes>
      </BrowserRouter>

   );
}

export default App;

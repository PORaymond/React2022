import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';

const Accueil = () => {
   return (<div>Je suis Accueil</div>)
};
const Faq = (props) => {
   //console.log(props);
   return (
      <div>
         Je suis la foire aux questions

      </div>)


};
const Cgv = (props) => {
   return (
      <div>
         Je suis les conditions générales de ventes
      </div>)
};
const Page404 = () => {
   return (<div> Page 404</div>)
};


function App() {
   return (
      <BrowserRouter>
         <header>
            <h2>Menu</h2>
            <ul>
               <li><Link to="/">Acceuil</Link></li>
               <li><Link to="/faq">Foire aux questions</Link></li>

            </ul>
         </header>
         <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/faq" element={<Faq />}/>
            <Route path="/cgv" element={<Cgv />}/>
            <Route path="*" element={<Page404 />}/>
         </Routes>
      </BrowserRouter>

   );
}

export default App;

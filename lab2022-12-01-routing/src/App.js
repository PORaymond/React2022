import {BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate, useParams} from 'react-router-dom';
import './App.css';
import {useState} from "react";

const Accueil = (props) => {
   const navigate = useNavigate();
   return (
      <div>
         Je suis la page d'Accueil! <br/> <br/>
         <button onClick={()=>{navigate(-1)}}> Reculez CTL+Z !</button> <br/> <br/>
         <button onClick={()=>{navigate(1)}}> Avancez  CTL+Y!</button> <br/>
      </div>)


};


const Faq = (props) => {
   console.log(props);
   return (
      <div>
         <h1>Foire aux questions</h1>
      </div>)
};

const Cgv = (props) => {
   const navigate = useNavigate();
   return (
      <div>
         Je suis les conditions générales de ventes ! <br/> <br/>
         <button onClick={()=>navigate(-1)}> Reculez CTL+Z !</button> <br/> <br/>
         <button onClick={()=>navigate(1)}> Avancez  CTL+Y!</button> <br/>
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

const CheckProps = (props) =>{
      console.log (props);
   return(
      <div>Vérifier les props qui sont là</div>
   );
}

const CheckPropsWithRouter = withRouter(CheckProps);
function withRouter(Component) {
   function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
         <Component
            {...props}
            router={{location, navigate, params}}
         />
      );
   }

   return ComponentWithRouterProp;
}
function App() {
   return (
      <BrowserRouter>
         <CheckPropsWithRouter/>
         <header>
            <h2>Menu</h2>

            <ul>
               <li><Link to="/">Acceuil</Link></li>
               <li><Link to="/faq">Foire aux questions</Link></li>
               <li><Link to="/cgv">Condition générales de vente</Link></li>
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

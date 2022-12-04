import {BrowserRouter, NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import {useState} from "react";

const Accueil = () => {
   return (<div>Accueil</div>)
};
const Faq = (props) => {
   console.log("Les props du composant Faq :");
   console.log(props);
   return (
      <div>
         La foire aux questions
      </div>)
};

const Cgv = (props) => {
   console.log(props);
   return (
      <div>
         Conditions générales de ventes
      </div>)
};
const Page404 = () => {
   const [connected, setConnected] = useState(false);

   if (!connected) {
      return (<div>
         <p>Vous n'êtes pas connectés ! </p>
         <button onClick={() => setConnected(true)}> Se connecter</button>
      </div>)
   }

   return (
      <Redirect to={'/'}/>
   )
};

const CheckProps = (props) => {
   console.log('mon HOC :' + props +' avec withRouter');
   console.log(props);
   return (
      <div>Vérifier les props de CheckProps</div>
   )
};
const CheckPropsWithRouter = withRouter(CheckProps);
   function App() {
      return (

         <BrowserRouter>
            <CheckProps qqchose="abc"/>
            <CheckPropsWithRouter/>
            <header>
               <h2>Menu</h2>
               <ul>
                  <li><NavLink to="/" activeClassName="lien-actif"
                               activeStyle={{color: "red", fontWeight: "bold"}}>Accueil</NavLink></li>
                  <li><NavLink to='/faq' activeClassName="lien-actif"
                               activeStyle={{color: "red", fontWeight: "bold"}}> F.A.Q </NavLink></li>
                  <li><NavLink to='/cgv' activeClassName="lien-actif"
                               activeStyle={{color: "red", fontWeight: "bold"}}> Conditions de vente </NavLink></li>
               </ul>
            </header>
            <Switch>

               <Route path="/" component={Accueil} exact={true}/>
               <Route path="/faq" component={Faq}/>
               <Route path="/cgv" component={Cgv}/>
               <Route path="*" component={Page404}/>

            </Switch>
         </BrowserRouter>
      );
   }

   export default App;

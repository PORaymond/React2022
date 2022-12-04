import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';
import './App.css';

const Accueil = () => { return (<div>Accueil</div>) };
const Faq = (props) => {
    //console.log(props);
    return (
        <div>
            La foire aux questions
        </div>)
};

const Cgv = (props) => {
    return (
        <div>
            Conditions générales de ventes
        </div>)
};
const Page404 = () => {
   return( <div>Page 404</div>)
};


function App() {
    return (
        
            <BrowserRouter>
               <header>
                  <h2>Menu</h2>
                  <ul>
                     <li><NavLink to="/" activeClasName="lien-actif" activeStyle={{color:"red", fontWeight:"bold"}}>Accueil</NavLink></li>
                     <li> <NavLink to='/faq' activeClassName="lien-actif" activeStyle={{color:"red", fontWeight:"bold"}}> F.A.Q </NavLink></li>
                     <li> <NavLink to='/cgv' activeClassName="lien-actif" activeStyle={{color:"red", fontWeight:"bold"}}> Conditions de vente </NavLink></li>
                  </ul>
               </header>
                <Switch>

                    <Route path="/" component={Accueil} exact={true} />
                    <Route path="/faq" component={Faq} />
                    <Route path="/cgv" component={Cgv} />
                    <Route path="*" component={Page404} />

                </Switch>
            </BrowserRouter>
    );
}
export default App;

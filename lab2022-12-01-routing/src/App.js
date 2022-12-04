import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import './App.css';

const Accueil = () => { return (<div>Je suis Accueil</div>) };
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
                     <li><Link to="/">Accueil</Link></li>
                     <li><Link to="/faq">Foire aux questions</Link></li>
                  </ul>
               </header>
                <Switch>

                    <Route path="/" component={Accueil} exact />
                    <Route path="/faq" component={Faq} />
                    <Route path="/cgv" component={Cgv} />
                    <Route path="*" component={Page404} />

                </Switch>
            </BrowserRouter>
    );
}
export default App;

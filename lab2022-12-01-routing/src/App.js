import { BrowserRouter, Route, Switch} from 'react-router-dom';
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

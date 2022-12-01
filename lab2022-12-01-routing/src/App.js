import { BrowserRouter, Route, } from 'react-router-dom';
import './App.css';

const Accueil = () => { return (<div>Je suis Accueil</div>) };
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
   return( <div> Page 404</div>)
};


function App() {
    return (
        
            <BrowserRouter>
                <Routes>

                    <Route path="/" component={Accueil} exact />
                    <Route path="/faq" component={Faq} />
                    <Route path="/cgv" component={Cgv} />
                    <Route path="*" component={Page404} />

                </Routes>
            </BrowserRouter>
       
    );
}
export default App;

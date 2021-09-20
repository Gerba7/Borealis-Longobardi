import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Styles from './components/Styles';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home name="Stranger" />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/styles">
            <Styles />
          </Route>
          <Route exact path="/itemlist">
            <ItemListContainer />
          </Route>
          <Route path="/itemlist/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );

}

export default App;
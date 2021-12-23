import Product from "./pages/Product";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

import "./css/App.css";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Form />
        </Route>
        <Route  path="/home">
        <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/about">
          <About/>
          </Route>
          <Route path="/contact">
          <Contact/>
          </Route>
      </Switch>
    </Router>
  );
};

export default App;

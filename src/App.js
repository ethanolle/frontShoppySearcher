// import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import Search from "./pages/Search/Search";
import Term from "./pages/Term/Term";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Search />
        </Route>
        <Route path='/term' exact>
          <Term />
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;

// import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search/Search";
import Term from "./pages/Term/Term";

function App() {
  return (
    <Router>
      <Route path='/' exact>
        <Search />
      </Route>
      <Route path='/term' exact>
        <Term />
      </Route>
      {/* <Redirect to='/' /> */}
    </Router>
  );
}

export default App;

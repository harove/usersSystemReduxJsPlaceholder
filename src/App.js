import "./App.css";
import UserContainer from "./containers/users";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UsersDelete from "./containers/usersDelete/UsersDelete";
import UserCreate from "./containers/userCreate/UserCreate";

function App() {
  return (
    <div className="App container">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users/create">Create</Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <UserContainer />
          </Route>
          <Route path="/users/delete/:id">
            <UsersDelete />
          </Route>
          <Route path="/users/create">
            <UserCreate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

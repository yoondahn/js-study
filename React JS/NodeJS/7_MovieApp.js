import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./7_routes/7_Home";
import Detail from "./7_routes/7_Detail";
import ToDo from './7_ToDo';

function MovieApp() {
    return (
      <Router>
        <Switch>
            <Route path="/movie">
                <Detail />
            </Route>
            <Route path="/">
                <ToDo />
                <Home />
            </Route>
        </Switch>
      </Router>  
    );
} 

export default MovieApp;

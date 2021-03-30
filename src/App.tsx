import AppBar from "./Global/AppBar"
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Experience, Qualifications, Projects, Interests } from "./Pages"
import { Container, Paper } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar/>
        <div className="App__container">
          <Container className="container__routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Experience" component={Experience} />
              <Route exact path="/Qualifications" component={Qualifications} />
              <Route exact path="/Projects" component={Projects} />
              <Route exact path="/Interests" component={Interests} />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
}

export default App;

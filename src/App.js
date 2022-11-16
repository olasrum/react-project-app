import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import BrownieList from "./BrownieList";
import Home from "./Home";
import Form from "./Form";
import NavBar from "./NavBar";
import Gallery from "./Gallery";

function App() {
  const [brownies, setBrownies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/brownies")
    .then((r) => r.json())
    .then((brownies) => setBrownies(brownies))
  }, [])

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/gallery">
          <Gallery />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/recipes">
          <BrownieList brownies={brownies}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

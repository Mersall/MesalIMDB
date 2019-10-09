import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Componenet/Search';
import Details from './Componenet/Details';
import preload from './data.json';

const FourOhFour = () => <h1>Page not found</h1>;

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={() => <Search Shows={preload.shows} />} />
          <Route
            path="/details/:id"
            component={props => {
              const SelectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
              return <Details show={SelectedShow} {...props} />;
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
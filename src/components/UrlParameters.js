import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Account</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>

        <Route path="/:id" component={Child}/>
        <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
      </div>
    </Router>
  )
}

function Child({match}) {
  return <h3>ID: {match.params.id}</h3>
}

function ComponentWithRegex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}

export default ParamsExample
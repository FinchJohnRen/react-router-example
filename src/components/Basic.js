import React from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
  </nav>
)

const Topic = ({match}) => <h3>Requested param: {match.params.id}</h3> 
const Topics = ({match}) => (
  <div>
    <h3>Topics</h3>
    <ul>
      <li><Link to={`${match.url}/component`}>Components</Link></li>
      <li><Link to={`${match.url}/props-v-state`}>props-v-state</Link></li>
    </ul>
    
    <Route 
      exact
      path={match.url}
      render={ () => <h3>this is default route page, Please select a topic.</h3> }
    />
    <Route
      path={`${match.url}/:id`}
      component={Topic}
    />
  </div>
)

const AppRouter1 = () => (
  <Router>
    <div>
      <Header/>

      <Route exact path="/" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/topics" component={Topics}></Route>
    </div>
  </Router>
)

export default AppRouter1
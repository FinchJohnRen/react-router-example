import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function CustomLinkExample() {
  return (
    <Router>
      <div>
        <OldSchoolMenuLink to='/' activeOnlyWhenExact={true} label='Home'/>
        <OldSchoolMenuLink to='/about'  label='About'/>

        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
      </div>
    </Router>
  )
}



function OldSchoolMenuLink({label , to , activeOnlyWhenExact}) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => (
        <div className={match ? 'active' : ''}>
          {match ?'>' : ''}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  )
}

function Home() {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>ABOUT</h2>
    </div>
  )
}

export default CustomLinkExample;
// import React from 'react';
// import ReactDOM from 'react-dom';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Layout from './layout/layout.jsx';
import Garden from './pages/garden.jsx';
import MyDashboard from './pages/dashBoard.jsx';
import AddPlant from './pages/addPlant.jsx';

// ES6 CLASS SYNTAX TO CREATE A REACT COMPONENT
class MyApp extends React.Component {
 render() {
   return (
    <Router history={hashHistory}>
    <Redirect from='/' to='/addPlant'/>
      <Route path='/' component={Layout}>
        <Route path='addPlant' component={AddPlant} />
        <Route path='myDashboard' component={MyDashboard} />
        <Route path='garden' component={Garden} />
      </Route>
    </Router>
  );
 }
}

ReactDOM.render(<MyApp />, document.getElementById('app'));

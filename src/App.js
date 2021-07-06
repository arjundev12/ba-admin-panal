import React, { Component } from 'react';
import { BrowserRouter,HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import ('./views/users/Users'))

const isAuthenticated = () => {
  //write your condition here

  if (localStorage.getItem('Auth') ) {
    // && localStorage.getItem('token')
    // localStorage.getItem('Auth')
    // setTimeout(function(){ localStorage.clear(); }, 5000);
    return true;
  }
  return false;
}



const UnauthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);


const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated()
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

class App extends Component {
  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading}>
            <Switch>
            <UnauthenticatedRoute exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Register Page" component={Register} />
            <Route exact path="/404" name="Page 404" component={Page404} />
            <Route exact path="/500" name="Page 500" component={Page500} />
            <AuthenticatedRoute path="/" name="Home" component={TheLayout} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;

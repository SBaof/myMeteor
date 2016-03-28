const {
  Router,
  Route,
  IndexRoute
} = ReactRouter;

const Routes = (
  <Route path='/' component={App}>
    <Route path='home' component={Home} />
    <Route path='signup' component={SignUp} />
    <Route path='login' component={LogIn} />
    <Router path='account' component={Account} />
    <Router path='chat' component={Chat} />
    <IndexRoute component={Home} />
  </Route>
);

Meteor.startup(function() {
  ReactDOM.render((
    <Router history={browserHistory}>
      {Routes}
    </Router>
  ), document.getElementById('container'));
});

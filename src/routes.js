import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Parse from './components/Game/Parse';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store/reducers';
import ResultContainer from './container/ResultContainer';
import GameContainer from './container/GameContainer';
import AddGameFastContainer from './container/AddGameFastContainer';
import InputsContainer from './container/InputsContainer';

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export const makeMainRoutes = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Route path="/" render={props => <App auth={auth} {...props} />} />
          <Route path="/home" render={props => <Home auth={auth} {...props} />} />
          <Route
            path="/callback"
            render={props => {
              handleAuthentication(props);
              return <Callback {...props} />;
            }}
          />
          <Route path="/games" render={props => <GameContainer auth={auth} {...props} />} />
          <Route
            path="/add-game-fast"
            render={props => <AddGameFastContainer auth={auth} {...props} />}
          />
          <Route path="/result" render={props => <ResultContainer auth={auth} {...props} />} />
          <Route path="/many" render={props => <InputsContainer auth={auth} {...props} />} />
          <Route path="/parse" render={props => <Parse auth={auth} {...props} />} />
        </div>
      </Router>
    </Provider>
  );
};

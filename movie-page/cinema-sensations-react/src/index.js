import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import BrowseMovies from './pages/BrowseMoviesPage';
import AddMoviePage from './pages/AddMoviePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import FavoritesPage from './pages/FavoritesPage';
import thunk from 'redux-thunk'
import FetchMoviesReducer from './stores/reducers/fetchMoviesReducer';
import FavoriteMoviesReducer from './stores/reducers/favoriteMoviesReducer';
import MovieDetailsPage from './pages/MovieDetailsPage';
import MovieDetailsReducer from './stores/reducers/movieDetailsReducer';
import isLoggedInReducer from './stores/reducers/isLoggedInReducer';

const reducer = combineReducers({
  fetchRed: FetchMoviesReducer,
  favRed: FavoriteMoviesReducer,
  detailsRed: MovieDetailsReducer,
  isLoggedInRed: isLoggedInReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/add-movie' component={AddMoviePage} />
            <Route path='/browse-movies' component={BrowseMovies} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/favorites' component={FavoritesPage} />
            <Route path='/details' component={MovieDetailsPage} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

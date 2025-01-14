import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Switch, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <PrivateRoute exact path="/friends">
            <FriendsList />
          </PrivateRoute>
          <PrivateRoute exact path="/friends/add">
            <AddFriend />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <FriendsList />
          </PrivateRoute>
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;

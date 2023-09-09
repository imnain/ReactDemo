import logo from './logo.svg';
import './App.css';
import BackendDataComponent from './BackendDataComponent';
import Header from './components/Header';
import MyButton from './components/MyButton';
import Profile from './components/Profile';
import { useState } from 'react';

function App() {
  return (
    <div>
        <p>
          hello world from reactjs
        </p>
        <BackendDataComponent />
        <Header />
        <Profile />
        <MyButton />
    </div>
  );
}

export default App;

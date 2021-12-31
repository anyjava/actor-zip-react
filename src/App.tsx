import React, { useState } from 'react';

import './App.css';
import { Button } from 'antd-mobile';
import { TabBar } from 'antd-mobile';
import logo from './logo.svg';

import FeedList from './pages/FeedList';

function App() {
  return (
    <div className="App">
        <FeedList />
    </div>
  );
}

export default App;

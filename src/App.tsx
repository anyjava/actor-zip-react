import React, { ReactElement } from 'react';
import './App.css';
import FeedList from './pages/FeedList';

function App(): ReactElement {
  return (
    <div className="App">
        <FeedList />
    </div>
  );
}

export default App;

import React from 'react';
import NavBar from './NavBar';
import FeedList from './FeedList';
import Profile from './Profile';


function App(){
  return (
    <div>
      <NavBar/>
      <div className="row">
        <div className="col-6">
          <FeedList/>
        </div>
        <div className="col-6">
          <Profile/>
        </div>
      </div>
    </div>
  );
} 
                                                       
export default App;
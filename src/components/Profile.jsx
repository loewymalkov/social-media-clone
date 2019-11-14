import React from 'react';
import stonks from '../assets/images/stonks.jpg';



function Profile(){
  return (
    <div>
      <style jsx>{`
      div {
        float: right;
      }
      `}</style>
      <img src={stonks}/>
    </div>
  );
} 
                                                       
export default Profile;
import React from 'react';


function NavBar(){
  return (
    <div>
      <style global jsx>{`

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }
      
      li {
        float: left;
        border-right: 1px solid #bbb;
      }

      .left {
        float: left;
      }
      
      li a {
        display: block;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      
      li a:hover {
        background-color: #6495ED;
      }

      .tweet {
        float: right;
        border-right: 1px solid #bbb;
      }

      `}</style>
      <ul>
        <li><a>Home</a></li>
        <li><a>Notifications</a></li>
        <li><a>Messages</a></li>
        <button className="tweet"><a>Tweet</a></button>
        <input className="tweet" type="text" placeholder="Search..."></input>
      </ul>
    </div>
  );
}

export default NavBar;
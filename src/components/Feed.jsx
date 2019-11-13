import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){
  return (
    <div className="container">
      <style jsx>{`
            div {
              background-color: #ADD8E6;
            }
          `}</style>
      <h3>{props.title} - {props.name}</h3>
      <p><em>{props.content}</em></p>
      <hr/>
    </div>
  );
}

Feed.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Feed;
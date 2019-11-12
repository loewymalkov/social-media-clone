import React from 'react';
import PropTypes from 'prop-types';

function Feed(props){
  return (
    <div class="container align-center">
      <style global jsx>{`
            div {
              background-color: light-blue;
            }
          `}</style>
      <h3>{props.title} - {props.name}</h3>
      <p><em>{props.content}</em></p>
      <hr/>
    </div>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Feed;
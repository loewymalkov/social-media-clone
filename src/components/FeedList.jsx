import React from 'react';
import Feed from './Feed';

var masterFeedList = [
  {
    name: 'Loewy',
    title: 'stonks on stonks',
    content: 'okay'
  },
  {
    name: 'Molly',
    title: 'not stonks on top of things that are not stonks',
    content: 'not okay'
  },

];

function FeedList(){
  return (
    <div>
      <hr/>
      {masterFeedList.map((feed, index) =>
        <Feed name={feed.name}
          title={feed.title}
          content={feed.content}
          key={index}/>
      )}
    </div>
  );
}

export default FeedList;
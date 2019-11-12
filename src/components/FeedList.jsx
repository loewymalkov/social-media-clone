import React from 'react';
import Feed from './Feed';

var masterFeedList = [
  {
    name: 'Loewy',
    title: 'oh hey waddup',
    content: 'okay'
  },
  {
    name: 'Molly',
    title: 'hello people of the human condition, i am totally not a snitch',
    content: 'gonna narc so hard on these fools'
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
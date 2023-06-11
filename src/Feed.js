import React from 'react'
import "./css/feed.css";
import Storyreel from './Storyreel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <Storyreel />
      <MessageSender />
      <Post
        photoURL=""
        image=""
        username="Estkhar Ansari"
        timestamp="12:40 PM"
        message="Hey, I am on space!"
      />
      <Post
        photoURL="https://burst.shopifycdn.com/photos/man-takes-time-to-ponder.jpg?width=925&exif=1&iptc=1"
        image="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
        username="Jony Siando"
        timestamp="12:40 PM"
        message="Hey, I am on space!"
      />
    </div>
  );
}

export default Feed

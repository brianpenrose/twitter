import React, { useState, useEffect } from 'react';
import TweetBox from './TweetBox';
import "./Feed.css";
import Post from './Post';
import db from "./firebase";
import FlipMove from 'react-flip-move';






function Feed() {
    const [posts, setPosts] = useState([]);
    var timestamp = Date.now();
    var time = new Date(timestamp).toDateString();

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <div className="feed">
            {/*Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>


            {/* Tweet Box */}
            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                    key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        date={time}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>


        </div>
    );
}
export default Feed;
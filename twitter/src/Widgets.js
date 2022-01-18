import React from 'react'
import "./Widgets.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchRoundedIcon className="widgets__searchIcon"/>
            <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetsContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId= {"1481982346610069513"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="chelseafc"
                options={{height:400}}
                />

                <TwitterShareButton 
                url={"https://brianpenrose.github.io/eportfolio/"}
                options={{text: "Hey guys! Check out this new eportfolio website I've built", via: "brianpenrose" }}
                />
            </div>
        </div>
    );
}
export default Widgets;
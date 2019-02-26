import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';

function Avatar({hash}) { 
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
         <img src={url}
         className="avatar" 
         alt="avatar" />
    )
}

function Message({message}) {
    return (
        <div className="message">
            {message}
        </div>
    )
}

function NameWithHandle({author}) {
    const {handle,name} = author;
    return (
        <span className="name-with-handle">
            <span className='name'>{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    )
}

const Time = ({time}) => ( <span className="time">{moment(time).fromNow()}</span> );

const ReplyButton = () => ( <i className="fa fa-reply reply-button"/> );

function getReTweetCount(count) {
    if (count>0)  {
        return (
            <span className="retweet-count">{count}</span>
        )
    } else {
        return null
    }
}

const RetweetButton = ({count}) => {
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet "/>
            {getReTweetCount(count)}
        </span>
    )
};

const LikeButton = ({ count }) => (
    <span className="like-button"> 
    <i className="fa fa-heart"/> 
    {count > 0 && <span className="like-count"> {count} </span>}
    </span> );
const MoreOptionsButton = () => ( <i className="fa fa-ellipsis-h more-options-button"/> )

function Tweet({tweet}) {
   
    return (
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
                <Message message={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/> 
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/> 
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    )
}
const testTweet = {
    message: "Something about cats.",
    gravatar: "xyz", 
    author: { handle: "catperson", name: "IAMA Cat Person" }, 
    likes: 2,
    retweets: 2, 
    timestamp: "2019-01-30 21:24:37"
    // timestamp:"[2017, 01, 05]"
}
ReactDOM.render(<Tweet tweet={testTweet}/>,
document.querySelector('#root'));
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import moment from 'moment';
// import PropTypes from 'prop-types'

// function Avatar({hash}) { 
//     var url = `https://www.gravatar.com/avatar/${hash}`;
//     return (
//          <img src={url}
//          className="avatar" 
//          alt="avatar" />
//     )
// }
// Avatar.propTypes = {
//     hash : PropTypes.string.isRequired
// }

// function Message({message}) {
//     return (
//         <div className="message">
//             {message}
//         </div>
//     )
// }

// function NameWithHandle({author}) {
//     const {handle,name} = author;
//     return (
//         <span className="name-with-handle">
//             <span className='name'>{name}</span>
//             <span className="handle">@{handle}</span>
//         </span>
//     )
// }
// NameWithHandle.propTypes = {
//     author: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         handle:PropTypes.string.isRequired
//     }).isRequired
// }

// const Time = ({time}) => ( <span className="time">{moment(time).fromNow()}</span> );

// const ReplyButton = () => ( <i className="fa fa-reply reply-button"/> );

// function getReTweetCount(count) {
//     if (count>0)  {
//         return (
//             <span className="retweet-count">{count}</span>
//         )
//     } else {
//         return null
//     }
// }

// const RetweetButton = ({count}) => {
//     return (
//         <span className="retweet-button">
//             <i className="fa fa-retweet "/>
//             {getReTweetCount(count)}
//         </span>
//     )
// };
// RetweetButton.propTypes = {
//     count : PropTypes.number
// }

// const LikeButton = ({ count }) => (
//     <span className="like-button"> 
//     <i className="fa fa-heart"/> 
//     {count > 0 && <span className="like-count"> {count} </span>}
//     </span> );
// LikeButton.propTypes = {
//     count : PropTypes.number
// }
// const MoreOptionsButton = () => ( <i className="fa fa-ellipsis-h more-options-button"/> )

// function Tweet({tweet}) {
   
//     return (
//         <div className="tweet">
//             <Avatar hash={tweet.gravatar}/>
//             <div className="content">
//                 <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
//                 <Message message={tweet.message}/>
//                 <div className="buttons">
//                     <ReplyButton/> 
//                     <RetweetButton count={tweet.retweets}/>
//                     <LikeButton count={tweet.likes}/> 
//                     <MoreOptionsButton/>
//                 </div>
//             </div>
//         </div>
//     )
// }
// Tweet.propTypes = {
//     tweet : PropTypes.object.isRequired
// }
// const testTweet = {
//     message: "Something about cats.",
//     gravatar: "xyz", 
//     author: { handle: "catPerson", name: "IAMA Cat Person" }, 
//     likes: 2,
//     retweets: 4, 
//     timestamp: "2019-02-14 21:24:37"
//     // timestamp:"[2017, 01, 05]"
// }
// ReactDOM.render(<Tweet tweet={testTweet}/>,
// document.querySelector('#root'));


// envelope example
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import PropTypes from 'prop-types'

// function Envelope({toPerson, fromPerson}) {
//     return (
//         <div className="cover">
//         <div className='hello'>
//         <div className="from">
//                 <span>{fromPerson.name}</span>
//                 <span>{fromPerson.streetAddress}</span>
//                 <span>{fromPerson.adderss}</span>
//             </div>
//             <div className="photo"></div>
//         </div>
           
//             <div className="to">
//                 <span>{toPerson.name}</span>
//                 <span>{toPerson.streetAddress}</span>
//                 <span>{toPerson.adderss}</span>
//             </div>
//         </div>
//     )
// }

// const toperson = {
//     name : "Mrs. Receiver",
//     streetAddress : "123 Fake St. ",
//     adderss : "San Francisco, CA 94101"
// };
// const fromperson = {
//     name : "Mr. Sender",
//     streetAddress : "123 Fake St. ",
//     adderss : "Boston, MA 02118"
// }

// ReactDOM.render(<Envelope toPerson={toperson} fromPerson={fromperson}/>,
//     document.querySelector('#root'));


// children props
// function IconButton({children}) {
//     return (
//         <button>
//             <i className="target-icon"/>
//             {children}
//         </button>
//     )
// }

// ReactDOM.render(<IconButton>this is it!!!</IconButton>,document.querySelector('#root'));

// Another example
function Nav ({children}) {
    const items = React.Children.toArray(children);
    for (let i =items.length-1; i>=1; i--){
        items.splice(i,0,
            <span key={i} className="separator">|</span>
            )
    }
    return(
        <div>
            {items}
        </div>
    )
}
ReactDOM.render(<Nav>
     <NavItem url='/'>Home</NavItem>   
     <NavItem url='/About'>About</NavItem>   
     <NavItem url='/Contact'>Contact</NavItem>   
</Nav>,document.querySelector('#root'))
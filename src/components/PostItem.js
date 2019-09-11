import React from 'react';

function PostHeader({author, date}){
  return(
    <div className="postheader">
      <img src={author.avatar} className="avatar" />
      <div className="details">      
        <span className="name">{author.name}</span>
        <span className="date">{date}</span>
      </div>
    </div>
  );
}

function PostComments({comments}){  
  return (
      <div className="postcomments">    
        <div className="divisor" />
        {comments.map(comment => (
          <div key={comment.id} className="comment"> 
              <img src={comment.author.avatar} className="avatar" />
              <p>
                <span>{comment.author.name}</span>
                {comment.content}
              </p>
            </div>
        ))}
      </div>
  )
}


function PostItem({ author, date, content, comments }) {
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments}  />
    </div>
  )
}

export default PostItem;
import React from 'react';

const Post = props => {
    const { post } = props;

        return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    )
}

export default Post;
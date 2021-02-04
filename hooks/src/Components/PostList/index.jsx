import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array,
};
PostList.defaultTypes = {
    posts: []
}
function PostList(props) {
    const { posts } = props;
    return (
        <div className="post-list">
            {posts.map((post) => (
                <ul key={post.id}>
                    <li>{post.title}</li>

                </ul>
            ))}
        </div>
    );
}

export default PostList;
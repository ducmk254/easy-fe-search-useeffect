import React from "react";
import './PostList.scss';
export default function PostList(props) {
  const { posts } = props;
  return (
    <div className="post-list">
      {posts.map((item) => {
        return (
          <ul key={item.id} className="post-list__item">
            {/* <li>
              <span>Title: </span>
              <span>{item.title}</span>
            </li>
            <li>
              <span>Author: </span>
              <span>{item.author}</span>
            </li>
            <li>
              <span>Description: </span>
              <span>{item.title}</span>
            </li> */}
            <li>
              <img src={item.imageUrl} alt="post" />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

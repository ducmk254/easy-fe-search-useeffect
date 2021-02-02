import React from "react";

export default function PostList(props) {
  const { posts } = props;
  return (
    <div>
      {posts.map((item) => {
        return (
          <ul key={item.id}>
            <li>
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
            </li>
            <li>
              <img src={item.imageUrl} alt="post" width="30%" height="30%" />
            </li>
          </ul>
        );
      })}
    </div>
  );
}

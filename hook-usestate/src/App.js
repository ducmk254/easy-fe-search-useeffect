import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import Pagination from "./components/Pagination/index";
import PostList from "./components/PostList";
import TodoList from "./components/TodoList/index";
const Uid = require("uid-generator");


// function ColorBox(props) {
//   const [color, setColor] = useState('yellow');

//   function handleClick() {
//     const i = Math.round(Math.random() * props.color.length - 1);
//     console.log(color + ' ' + i);
//     setColor(props.color[i === 0 ? i : (i - 1)]);
//     console.log(color);
//   }

//   return (
//     <div>
//       <div style={{backgroundColor: color}} className="color-box"></div>
//       <button onClick={handleClick}>Change color</button>
//     </div>
//   );
// }
function App() {
  // const colors = ['yellow', 'green', 'blue', 'tomato', 'pink'];
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love you " },
    { id: 2, title: "I miss you " },
    { id: 3, title: "I hate you " },
  ]);
  const [posts, setPosts] = useState([]);
  const [pagination,setPagination] = useState({
    _limit: 6,
    _page : 1,
    _totalRow: 25
  });
  const paramString = require('query-string');

  

  useEffect(() => {
    // get API
    async function getPostList() {
      try {
        
        const urlPost =
    `http://js-post-api.herokuapp.com/api/posts?${paramString.stringify({_limit:pagination._limit,_page:pagination._page})}`;
        const res = await fetch(urlPost);
        const resJson = await res.json();
        setPosts(resJson.data);
      } catch (e) {
        console.log("Loi: " + e);
      }
    }
    getPostList();
    return () => {};
  }, [pagination]);

  function handleTodoClick(todo) {
    // remove todo tồn tại trong list

    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // xoa 1 phan tu tu vi tri index
    setTodoList(newTodoList);
  }

  function handleInputSubmit(value) {
    
    const newtodos = [...todoList];
    const id = new Uid().baseEncoding;
    newtodos.push({ id: id, ...value });
    setTodoList(newtodos);
  }

  function handleOnChangePage(newPage){
    
    setPagination({
      _limit:pagination._limit,
      _totalRow:pagination._totalRow,
      _page:newPage
    });
  }
  return (
    <div className="App">
      <InputBox todosSubmit={handleInputSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      <PostList posts={posts} />
      <Pagination pagination={pagination} onChangePage={handleOnChangePage}/>
    </div>
  );
}

export default App;

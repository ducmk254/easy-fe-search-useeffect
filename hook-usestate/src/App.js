import {useState} from 'react';
import TodoList from './components/ColoBox/TodoList/index';
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
    {id: 1, title: 'I love you '},
    {id: 2, title: 'I miss you '},
    {id: 3, title: 'I hate you '},
  ]);

  function handleTodoClick(todo) {
    // remove todo tồn tại trong list
    const index = todoList.findIndex((item) => item.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1); // xoa 1 phan tu tu vi tri index
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;

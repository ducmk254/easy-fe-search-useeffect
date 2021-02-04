import './App.css';
import PostList from './Components/PostList';
import { useEffect, useState } from 'react';
import InputBox from './Components/InputBox';

function App() {
  // state:
  const [posts,setPosts] = useState([]);
  const [filters,setFilters] = useState({
    _limit: 15,
    _page: 1,
  })

  // Get API: url=http://js-post-api.herokuapp.com/api/posts?_limit=5&_page=1 &title_like=
  useEffect(()=>{
    const queryString = require('query-string');
    const urlApi = `http://js-post-api.herokuapp.com/api/posts?${queryString.stringify(filters)}`;
    async function getPostList(){
      try {
        const res = await (await fetch(urlApi)).json();
        // console.log( res.data);
        setPosts(res.data);
      } catch (error) {
        console.log('Error during get API: ' + error);
      }
    }
    getPostList();

    return(()=>{});
  },[filters]);



  function handleInputSubmit(newFilter){
    // valueSubmit ={searchTerm: value}
    const searchTerm = {
      ...filters,
      _page:1,
      title_like: newFilter.searchTerm
    }
    setFilters(searchTerm);
  }
  return (
    <div className="App">
      <InputBox onSubmit={handleInputSubmit} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

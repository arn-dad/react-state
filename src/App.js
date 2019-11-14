import React from 'react';
import ClassCounter from './components/classCounter';
import FunctionCounter from './components/functionCounter';
import ClassComponent from './components/classComponent';
import FunctionComponent from './components/functionComponent';
import './App.css';

/** setState || useState
 * Simple counter class function
 * 
 * 
 * */ 

/** Toggle light
 *  style={{ height: "50px", width: "50px" }}
 *  https://icon.now.sh/highlight/fd0
 *  https://icon.now.sh/highlight/aaa
 *  
 * */ 

/**
 * componentDidMount || componentDidUpdate || useEffect
 * 
 *  useEffect [dependence array]
 *  no prorerty calls every time 
 *  empty array [] calls once
 *  with properties depend on property which will add in array
 *  
 * https://it-blog-posts.herokuapp.com/api/posts
 * */  

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <FunctionCounter />
      <FunctionComponent />
      <ClassComponent />
    </div>
  );
}

export default App;


// useState useEffect
// setState componentDidMount componentDidUpdate
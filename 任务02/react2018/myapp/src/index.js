import React from 'react';
import ReactDOM from 'react-dom';
import Home from './demos/Home';
import App from './App'
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
  <App />,
  document.getElementById('root')
);



let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
})
.then(res=>res.json())
.then(res=>console.log(res))

// alt shift + 上下键   复制一行
// alt + 上下键         移动一行
// 按住alt ，鼠标点击
// Ctrl + shift + 左右键，选中整个单词
// ctrl+shift+L 











  



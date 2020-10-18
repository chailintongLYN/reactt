let ele = React.createElement(
  'h1',
  {id:'title'},
  React.createElement('div',{},'hello'),
  'react'
)

// 将jsx对象渲染到DOM中
let ReactDOM = {
  render(eleObj,container){
    // 解构
    const { type,props } = eleObj;
    // 创建第一层节点
    let ele = document.createElement(type);
    // 遍历属性对象，将属性添加到第一层节点对象上
    for (const prop in props) {
      console.log(prop)
      if(prop == 'children'){
        if(typeof props.children == 'string'){
            const txtNode = document.createTextNode(props.children);
            ele.appendChild(txtNode);
            break;
        }
        // 将第一层节点对象的子元素添加进去
        props.children.forEach( child => {
          if(typeof child == 'string'){
            const txtNode = document.createTextNode(child);
            ele.appendChild(txtNode);
          }else{
            ReactDOM.render(child,ele);
          }
        })
      }else{
        ele[prop] = props[prop];
      }
    }

    // 将第一层DOM节点添加到container中
    container.appendChild(ele);
  }
}
// 组件声明
// 函数组件
// UI（展示）组件，木偶组件
function App(props){
  const { title, id } = props;
  return <div>
    <h1>App组件内容</h1>
    <div>{title}</div>
    <div>{id}</div>
  </div>
}
// 智能组件
class Demo extends React.Component{
  constructor(){
     super();
    //  声明状态
     this.state = {
       name: new Date().toLocaleString()
     }
     setInterval(()=>{
      this.setState({name:new Date().toLocaleString()})
     },1000)
  }
  render(){
    return <div>
      <div>name:{this.state.name}</div>
      <App title={this.state.name} id='app'/>
    </div>
  }
}
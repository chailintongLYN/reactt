import React,{Component} from 'react';
import List from '../components/List';
import Buttons from '../components/Buttons';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        data:[]
      }
      // this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount(){
      fetch('https://cnodejs.org/api/v1/topics')
      .then(res=>res.json())
      .then( ({data}) => {
        this.setState({data})
      })
    }
    getData = (page)=>{
      fetch('https://cnodejs.org/api/v1/topics?page='+page)
      .then(res=>res.json())
      .then( ({data}) => {
        this.setState({data})
      })
    }
    render(){
      const { data } = this.state;
      return <div>
        <Buttons getData={this.getData}/>
        <List data={data}/>
      </div>
    }
}
// 默认导出（只能导出一个）
export default Home;

// // 命名导出
// let a = 100;
// export {Home}
// export {a}
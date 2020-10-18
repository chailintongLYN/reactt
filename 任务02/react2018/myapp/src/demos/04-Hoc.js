// higher order component
import React, { Component } from 'react';

const withFetch = (Com,url)=>{
    class Topic extends Component{
        constructor(){
            super();
            this.state = {
                data:[]
            }
        }
        componentDidMount(){
            fetch(url)
            .then(res=>res.json())
            .then(res=>this.setState({data:res.data}))
        }
        render(){
            return <Com {...this.props} data={this.state.data}/>
        }
    }
    Topic.displayName= `withFetch(${Com.name})`
    return Topic;
}

const De = (props)=>{
    return <div>
        <h1>标题{props.name}</h1>
        <div dangerouslySetInnerHTML={
            {__html:props.data.content}}
        >
        </div>
    </div>
}
export const Detail = withFetch(De,'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312');

const Ho = (props)=>{
    return <ul>
        {
            props.data.map((item)=><li>{item.title}</li>)
        }
    </ul>
}
const Hoc = withFetch(Ho,'https://cnodejs.org/api/v1/topics')
export default Hoc;

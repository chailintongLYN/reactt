import React from 'react'
import Context from './context'
import Demo01 from './Demo01';

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            data:['hello','context'],
        }
    }
    changeData = (newData)=>{
        this.setState({data:[...this.state.data,newData]})
    }
    render(){
        return (
            <Context.Provider value={{
                data:this.state.data,
                changeData:this.changeData
            }}>
                <Demo01 />
            </Context.Provider>
        )
    }
}

export default App

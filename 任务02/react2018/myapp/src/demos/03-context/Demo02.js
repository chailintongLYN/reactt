import React from 'react'
import Context from './context'

const Demo02 = () => {
    return (
        <div>
            <h2>Demo02</h2>
            <Context.Consumer>
                {
                    ({data})=>data.map(item=><li key={item}>{item}</li>)
                }
            </Context.Consumer>
            <Context.Consumer>
                {
                    ({changeData})=><button onClick={()=>changeData(123)}>点击</button>
                }
            </Context.Consumer>

        </div>
    )
}

export default Demo02

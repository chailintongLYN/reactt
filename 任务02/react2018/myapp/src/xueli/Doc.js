import React, { useEffect } from 'react'
import {
    Link,
    Redirect,
    Route,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
    withRouter
} from 'react-router-dom'
import './doc.css';
import routes from './router.config';
// import {NavBar,Icon} from 'antd-mobile'
import { RouteWithSubRoutes } from './App';
// const DocContent = (props) => {
//     return <h1>
//         { props.match.params.type }
//     </h1>
//
function Core(){
    return <h1>
        core
    </h1>
}
function Guide(){
    return <h1>
        guide
    </h1>
}
function Api(){
    return <h1>
        api
    </h1>
}
function Hooks(){
    return <h1>
        hooks
    </h1>
}
const Doc = (props) => {
    //console.log(props)
    // const history = useHistory();
    // const location = useLocation();
    // const par = useParams();
    // const mat = useRouteMatch();
    // console.log(history);
    // console.log(location);
    // console.log(par);
    // console.log(mat);
    // useEffect(()=>{
    //     if(!localStorage.getItem('userinfo')){
    //         props.history.push({
    //             pathname:'/login',
    //             state:props.location
    //         })
    //     }
    // },[])
    return (
        <div className='doc'>
            {/* <NavBar
                mode="light"
                icon={ <Icon type="left" /> }
                onLeftClick={ () => props.history.goBack() }
                rightContent={ [
                    <Icon key="0" type="search" style={ { marginRight: '16px' } } />,
                    <Icon key="1" type="ellipsis" />,
                ] }
            >NavBar</NavBar> */}
            <div className="content">
                {/* 嵌套路由 */ }
                {/* <Route path='/doc/:type' component={ DocContent } /> */}
                <Redirect from='/doc' to='/doc/core' />
                    {props.routes.map((route,i) => (
                        <RouteWithSubRoutes key = {i} {...route} />
                    ))}
            </div>
            <ol>
                <li><NavLink to='/doc/core'>核心概念</NavLink></li>
                <li><NavLink to='/doc/guide'>高级指引</NavLink></li>
                <li><NavLink to='/doc/api'>API</NavLink></li>
                <li><NavLink to='/doc/hooks'>Hooks</NavLink></li>
            </ol>
        </div>
    )
}

export default withRouter(Doc);
export {Core,Guide,Api,Hooks};

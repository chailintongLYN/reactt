import React from 'react';
import {BrowserRouter as Router,Redirect,Route,NavLink,Switch} from 'react-router-dom'
import Header from './Header';
import routes from './router.config';

const App = () =>{
    return <Router>
        <Header />
        <Switch>
            {routes.map((route,i) => (
                <RouteWithSubRoutes key = {i} {...route} />
            ))}
        </Switch>
    </Router>
}

const PrivateRoute = ({ compontent: Comment, ...rest}) => {
    return (
        <Route
            {...rest}
            render = { ( {location}) =>
                localStorage.getItem('userinfo') ? (
                    <Com {...rest} />
                ) : (
                    <Redirect
                        to = {{
                            pathname:"/login",
                            state:location
                        }}
                    />
                )
            }
        />
    );
}

const RouteWithSubRoutes = (props) => {
    if(props.pri){
        return <PrivateRoute
                path = {props.path}
                component = {props.component}
                routes = {props.routes}
            />
    }else{
        return < Route
            path = {props.path}
            render = {rest => (
                <props.component {...rest} routes = {props.routes} />
            )}
            />
    }
}

export {RouteWithSubRoutes,App};
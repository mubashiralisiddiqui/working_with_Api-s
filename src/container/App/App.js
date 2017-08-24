import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {LeftDrawer,Header,Signup,Login,DashBoard} from '../../components'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route  path="/" component={Header} />
                    <Route exact path="/" component={Signup} />  
                    <Route exact path="/" component={LeftDrawer} />          
                    <Route exact path="/signup" component={Signup} />            
                    <Route exact path="/login" component={Login} />            
                               
                    <Route exact path="/dashbord" component={DashBoard} />            
                               
                   
                </div>
            </Router>
        )
    }
}


import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
    LeftDrawer,
    Header,
    Signup,
    Login,
    DashBoard,
    AllUser,
    User,
    Posts,
    SingleUSer,
    CreatePost
} from '../../components'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" component={Header} />
                    <Route exact path="/" component={Login} />
                    <Route exact path="/" component={LeftDrawer} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/allUser" component={AllUser} />
                    <Route path="/user/:id" component={User} />
                    <Route exact path="/dashbord" component={DashBoard} />
                    <Route exact path="/posts" component={Posts} />
                    <Route exact path="/singleuser/:id" component={SingleUSer} />
                    <Route exact path="/create_post" component={CreatePost} />
                </div>
            </Router>
        )
    }
}

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Books,BookDescription} from '../../components'


export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Books} />
                    <Route path="/bookDiscription/:id" component={BookDescription}/>
                   
                </div>
            </Router>
        )
    }
}


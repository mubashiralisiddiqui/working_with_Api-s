import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CreatePost from '../createpost/createpost'
import { rootRoute } from '../../routes/routes'
export default class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: [],
            open: false
        }
    }
    componentWillMount() {
        axios.get(rootRoute)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        Users: response.data
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleSubmit(obj) {
        this.setState({ open: false })
        axios.post(rootRoute, obj)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        Users: response.data
                    })
                    console.log("success")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const style = {
            height: 300,
            width: 600,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            fontFamily: " Comic Sans MS",
            user: {
                marginTop: "70px",
                textAlign: "center",
                textDecoration: "underline",
                textTransform: 'uppercase',
                fontFamily: "serif",
            },
            font: {
                fontFamily: "Garamond",
                textDecoration: "none",
                color: "black"
            },
            message: {
                width: 500,
                height: 110,
                margin: "0px auto",
                Overflow: "scroll",
                fontFamily: "Palatino",
                textDecoration: "none"
            }
        };
        return (
            <div style={style.user}>
                <RaisedButton
                    label="Create Post"
                    onClick={() => this.handleOpen()}
                    primary={true}
                />
                <h1>users Post</h1>
                {this.state.Users.map((user, i) => {
                    return (
                        <div key={user.id} >
                            <Paper style={style} zDepth={3} >
                                <Link to={`/singleuser/${user.id}`} style={style.font}>
                                    <List key={user.userId}>
                                        <label>category</label>
                                        <label>({user.categories})</label>
                                        <ListItem
                                            primaryText={user.title}
                                        />
                                    </List>
                                    <Divider />
                                    <label>message</label>

                                    <div style={style.message}>
                                        <ListItem
                                            primaryText={user.content}
                                            secondaryText={user.title}
                                        />
                                        <Divider />
                                    </div>
                                </Link>
                            </Paper>
                        </div>
                    )
                })}
                <CreatePost
                    handleClose={() => this.handleClose()}
                    toggleDialog={this.state.open}
                    handleSubmit={(obj) => { this.handleSubmit(obj) }}
                />
            </div>
        )
    }
}
import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import axios from 'axios';

import { ALLUSER_API } from '../../routes/routes'

export default class User extends React.Component {
    constructor(props) {
        super(props);
        console.log("propsss", props.match.params.id)
        this.state = {
            Users: []
        }
    }
    componentWillMount() {
        axios.get(ALLUSER_API)
            .then((response) => {
                console.log(response.data.data)
                const UserInfo = response.data.data[this.props.match.params.id]
                console.log("userinfo===", UserInfo)
                if (response.status === 200) {
                    const UserInfo = response.data.data[this.props.match.params.id]
                    this.setState({ Users: UserInfo })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const style = {
            height: 200,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
            user: {
                marginTop: "70px",
                textAlign: "center",
                textDecoration: "underline",
                textTransform: 'uppercase',
                fontFamily: "serif"


            }
        };
        return (
            <div style={style.user}>
                <h1>{this.state.Users.first_name + this.state.Users.last_name}</h1>
                <Paper style={style} zDepth={1} >
                    <List>
                        <Subheader>{this.state.Users.first_name}</Subheader>
                        <ListItem
                            primaryText={this.state.Users.first_name + this.state.Users.last_name}
                            rightAvatar={<Avatar src={this.state.Users.avatar} />}
                        />
                    </List>
                    <Divider />
                </Paper>
            </div>
        )
    }
}
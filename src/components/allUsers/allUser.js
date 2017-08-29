import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { ALLUSER_API } from '../../routes/routes'

export default class AllUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            AllUser: []
        }
    }
    componentWillMount() {
        axios.get(ALLUSER_API+'/users/page=2')
            .then((response) => {
                const AllUserInfo = response.data.data
                if (response.status === 200) {
                    this.setState({ AllUser: AllUserInfo })
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
            parent: {
                textAlign: "center",
                marginTop: "70px"
            }
        };
        return (
            <div style={style.parent}>
                <h1>AllUser</h1>
                {this.state.AllUser.map((user, i) => {
                    return (
                        <div key={user.id}>
                            <Paper style={style} zDepth={1} >
                                <List key={user.id}>
                                    <Subheader>{user.first_name}</Subheader>
                                    <Link to={`/user/${i}`}>  <ListItem
                                        primaryText={user.first_name + user.last_name}
                                        rightAvatar={<Avatar src={user.avatar} />
                                        }
                                    />
                                    </Link>
                                </List>
                                <Divider />
                            </Paper>
                        </div>
                    )
                })}
            </div>
        )
    }
}
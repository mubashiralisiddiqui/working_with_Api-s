import React from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import { rootRoute } from '../../routes/routes'
class SingleUSer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            single_user: []
        }
    }
    componentWillMount() {
        axios.get(`${rootRoute}/${this.props.match.params.id}`)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        single_user: response.data
                    })
                    console.log("success")
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    handleDelete(id) {
        axios.delete(rootRoute + id)
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        single_user: response.data
                    })
                    this.props.history.push('/posts')
                    console.log("successfully deleted")
                }
            })
    }
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
            }
        };
        return (
            <div style={style.user}>
                <h1>user comments</h1>
                <div key={this.state.single_user.id}>
                    <Paper style={style} zDepth={3} >
                        <List>
                            <Subheader>{}</Subheader>
                            <label>Title</label>
                            <ListItem
                                primaryText={this.state.single_user.title}
                            />
                        </List>
                        <Divider />
                        <label>comments</label>
                        <div style={style.message}>
                            <ListItem
                                primaryText={this.state.single_user.content}
                                secondaryText={this.state.single_user.categories}
                            />
                            <Divider />
                            <RaisedButton
                                label="Delete"
                                primary={true}
                                className="btncolor"
                                onClick={() => this.handleDelete(this.state.single_user.id)}
                            />
                        </div>
                    </Paper>
                </div>
            </div>
        )
    }
}
export default withRouter(SingleUSer)
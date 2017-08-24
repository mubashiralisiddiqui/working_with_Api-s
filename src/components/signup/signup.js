import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { signup } from '../../routes/routes'

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    signup(e) {
        e.preventDefault()
        let email = this.refs.name.getValue();
        let password = this.refs.Password.getValue();

        axios.post(signup, { email, password })
            .then((response) => {
                if (response.status === 201) {
                console.log(response.data.token)
                    this.props.history.push('/login')
                }
            })
            .catch((err) => {
                console.log(err);

            })
    }
    render() {
        const style = {
            parentDiv: {
                width: "50vh",
                height: '70vh',
                margin: "5vh auto",
                textAlign: "center",
                marginTop: "100px"
            },
            Paper: {
                margin: "0px auto",
                paddingLeft: "2vh "
            }
        };
        return (

            <div style={style.parentDiv}>
                <div>
                    < h1 className="text-center">Signup</h1>
                    <Paper style={style.Paper} zDepth={1} >
                        <div className="form">
                            <form onSubmit={(e) => this.signup(e)}>
                                <TextField hintText="Name" ref="name" /> <br />
                                <br />
                                <TextField type="password" hintText="Password" ref="Password" /> <br />
                                <br />
                                <RaisedButton type="submit" label="Signup" primary={true} className="btncolor" />
                                <Link to="/login"><p>Alreay dhave an account?</p></Link>
                            </form>
                        </div>
                    </Paper>
                </div>
            </div >
        )
    }
}
export default withRouter(Signup);


import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class DashBoard extends React.Component {
    render() {
        const style = {
            textAlign: "center",
            marginTop: "70px",
            button: {
                margin: 12
            }
        }
        return (
            <div style={style}>
                <h1>welocme to dashbord</h1>
                <Link to="/allUser">
                    <RaisedButton style={style.button} label="AllUser" primary={true} style={style} />
                </Link>
                <Link to="/create_post">
                    <RaisedButton style={style.button} label="Create_post" primary={true} style={style} />
                </Link>
                <Link to="/posts">
                    <RaisedButton style={style.button} label="Post" primary={true} style={style} />
                </Link>

            </div>
        )
    }
}
export default withRouter(DashBoard);
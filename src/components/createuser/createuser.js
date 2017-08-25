import React from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';
import { withRouter } from 'react-router-dom';
import { CREATE_USER } from '../../routes/routes'

 class CreateUser extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:[]
        }
    }
    createUser(e) {
        e.preventDefault();
        const name=this.refs.name.getValue();
        const job =this.refs.job.getValue();
        console.log()
        axios.post(CREATE_USER, {name,job})
            .then((response) => {
                console.log(response)
                if (response.status === 201) {
                  alert("user created succssfully")
                  this.props.history.push('/allUser')

                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const style = {
            textAlign: "center",
            marginTop: "70px"
        }
        return (
            <div style={style}>
                <h1>Create New User</h1>
                <form onSubmit={(e)=>this.createUser(e)}>
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Name"
                        ref="name"
                    /><br />
                    <TextField
                        hintText="Hint Text"
                        floatingLabelText="Job"
                        ref="job"
                    /><br />
                    <button>submit</button>

                </form>
            </div>
        )
    }
}
export default withRouter(CreateUser);
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

export default class CreatePost extends React.Component {
    handleSubmitForm() {
        let obj = {
            id: this.refs.id.getValue(),
            title: this.refs.title.getValue(),
            categories: this.refs.categories.getValue(),
            content: this.refs.content.getValue()
        }
        this.props.handleSubmit(obj)
    }
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.props.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.handleSubmitForm()}
            />,
        ];
        return (
            <div>
                <Dialog
                    title="Create a post"
                    actions={actions}
                    modal={false}
                    open={this.props.toggleDialog}
                    onRequestClose={this.handleClose}
                >
                    <TextField
                        ref="id"
                        hintText="Id"
                        floatingLabelText="Id"
                    /><br />
                    <TextField
                        hintText="Title"
                        ref="title"
                        floatingLabelText="Title"
                    /><br />
                    <TextField

                        hintText="categories"
                        ref="categories"
                        floatingLabelText="categories"
                    /><br />
                    <TextField
                        hintText="content"
                        ref="content"
                        floatingLabelText="content"
                    /><br />
                </Dialog>
            </div>
        );
    }
}
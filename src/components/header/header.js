import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white, blue600 } from 'material-ui/styles/colors';
import LeftDrawer from '../drawer/drawer';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            login: false
        }
    }
    componentWillMount() {
        const token = (localStorage.getItem('token'))
        if (token) {
            this.setState({
                login: true
            })
        }
    }
    handleDrawerOpen() {
        this.setState({
            open: !this.state.open
        })
    }
    Logout() {
        localStorage.setItem('auth', false)
        this.props.history.push('/')
    }
    render() {
        const style = {
            appBar: {
                position: 'fixed',
                top: 0,
                overflow: 'hidden',
                maxHeight: 57,
                backgrounColor: blue600
            },
            menuButton: {
                marginLeft: 10
            },
            iconsRightContainer: {
                marginLeft: 20
            }
        };
        return (
            <div>
                <AppBar
                    style={{ ...style.appBar }}
                    title="social App"
                    iconElementLeft={
                        <IconButton style={style.menuButton} onClick={() => this.handleDrawerOpen()}   >
                            <Menu color={white} />
                        </IconButton>
                    }
                    iconElementRight={
                        <div style={style.iconsRightContainer}>

                            <IconMenu
                                iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                }
                            >
                                <MenuItem onClick={() => this.Logout()}>Log Out</MenuItem>
                            </IconMenu>
                        </div>
                    }
                />
                <LeftDrawer openDrawer={this.state.open}
                    toggleDrawer={() => this.handleDrawerOpen()}
                />
            </div>
        )
    }
}
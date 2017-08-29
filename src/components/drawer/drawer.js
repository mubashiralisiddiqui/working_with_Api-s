import React from 'react';
import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { blue600 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import axios from 'axios';

import { RouteRoot } from '../../routes/routes'
export default class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            user: []
        }
    }
    componentWillMount() {
        axios.get(RouteRoot + "/users/2")
            .then((response) => {
                if (response.status === 200) {
                    const user = response.data.data
                    this.setState({ user: user })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        const styles = {
            logo: {
                cursor: 'pointer',
                fontSize: 22,
                color: typography.textFullWhite,
                lineHeight: `${spacing.desktopKeylineIncrement}px`,
                fontWeight: typography.fontWeightLight,
                backgroundColor: blue600,
                textAlign: 'center',
                height: 56
            },
            menuItem: {
                color: "black",
                fontSize: 14,
                paddingTop: 10
            },
            avatar: {
                div: {
                    padding: '20px 0px 20px 0px',
                    textAlign: 'center'
                },
                icon: {
                    height: 60,
                    width: 60,
                    boxShadow: '0px 0px 2px 1px rgba(0,0,0,0.7)'
                },
                span: {
                    paddingTop: 12,
                    display: 'block',
                    color: 'black',
                    fontWeight: 500
                }
            }
        };
        return (
            <div>
                <Drawer
                    docked={false}
                    open={this.props.openDrawer}
                    onRequestChange={() => this.props.toggleDrawer()}>
                    <div style={styles.logo}>
                    </div>
                    <div style={styles.avatar.div}>
                        <Avatar
                            size={50}
                            style={styles.avatar.icon}
                            src={this.state.user.avatar}
                        />
                        <br />
                        <span style={styles.avatar.span}>{this.state.user.first_name}</span>
                    </div>
                    <div>
                        <MenuItem
                            style={styles.menuItem}
                            primaryText={<Link to="/dashbord">Dashbord</Link>}
                        />
                        <MenuItem
                            style={styles.menuItem}
                            primaryText={<Link to="/allUser">AllUser</Link>}
                        />
                        <MenuItem
                            style={styles.menuItem}
                            primaryText={<Link to="/posts">Posts</Link>}
                        />
                    </div>
                </Drawer>
            </div>
        );
    }
};

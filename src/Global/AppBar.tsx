import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SideBar from "./SideBar"

const styles = createStyles({
  root: {
    flexGrow: 0,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

export interface Props extends WithStyles<typeof styles> {}

export interface State {
  auth: boolean;
  anchorEl: null | HTMLElement;
  sideBarOpen: boolean;
}

class MenuAppBar extends React.Component<Props, State> {
  state: State = {
    auth: true,
    anchorEl: null,
    sideBarOpen: false
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleCloseSidebar = () => {
    this.setState({ sideBarOpen: false })
  }

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <SideBar open={this.state.sideBarOpen} onClose={this.handleCloseSidebar}/>

          <Toolbar>
            <IconButton className={classes.menuButton} onClick={() => this.setState({ sideBarOpen: true })} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              William Davies - Frontend Web Applications
            </Typography>
            {auth && (
              <div>
                <Avatar
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                  src="/profile.jpg"
                />
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

(MenuAppBar as React.ComponentClass<Props>).propTypes = {
  classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(MenuAppBar);
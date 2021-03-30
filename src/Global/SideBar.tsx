import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, School, Work, Straighten, Build, Bathtub } from '@material-ui/icons';
import { Avatar, ListItemAvatar } from '@material-ui/core';
import { Link } from "react-router-dom"

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

const listItems = [
  {
    icon: Home,
    text: "Home",
    link: "/"
  },
  {
    icon: Work,
    text: "Experience",
    link: "/Experience"
  },
  {
    icon: Build,
    text: "Projects",
    link: "/Projects"
  },
  {
    icon: Bathtub,
    text: "Philosophy",
    link: "/Philosophy"
  },
  {
    icon: School,
    text: "Qualifications",
    link: "/Qualifications"
  },
  {
    icon: Straighten,
    text: "Interests",
    link: "/Interests"
  }
]

class TemporaryDrawer extends React.Component<any> {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool,
    onClose: PropTypes.func
  }

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="/profile.jpg" />
            </ListItemAvatar>
            <ListItemText>William Davies</ListItemText>
          </ListItem>
          <Divider />
          {listItems.map((item, index) => {
            return (
              <ListItem key={index}>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText>
                  <Link to={item.link}>{item.text}</Link></ListItemText>
              </ListItem>
            )
          })}
        </List>
        <Divider />
      </div>
    );

    return (
      <div
        onClick={() => this.props.onClose()}
      >
        <Drawer open={this.props.open}>
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(TemporaryDrawer);
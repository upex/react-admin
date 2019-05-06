import React from 'react';
import { AppBar, Title, UserMenu, MenuItemLink } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';
import SettingsIcon from '@material-ui/icons/Settings';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
};
const MyUserMenu = props => (
  <UserMenu {...props}>
        <MenuItemLink
          to="/configuration"
          primaryText="Configuration"
          leftIcon={<SettingsIcon />}
        />
  </UserMenu>
);

const MyAppBar = withStyles(styles)(({ classes, ...props }) => (
    <AppBar {...props} userMenu={<MyUserMenu />}>
        <p>Company Name</p>
        <span className={classes.spacer} />
        <IconButton color="inherit">
            <Badge badgeContent={4} color="primary">
              <MailIcon />
            </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
    </AppBar>
));

export default MyAppBar;
import React from "react";
import { UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

const MyUserMenu = props => (
    <UserMenu {...props}>
        <MenuItemLink
            to="/configuration"
            primaryText="Configuration"
            leftIcon={<SettingsIcon />}
        />
    </UserMenu>
);
 export default MyUserMenu;
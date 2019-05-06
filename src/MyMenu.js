import React, { createElement }  from 'react';
import { connect } from 'react-redux';
import { MenuItemLink, getResources, Responsive } from 'react-admin';
import { withRouter } from 'react-router-dom';
import ShopIcon from '@material-ui/icons/Shop';
import DashBoardIcon from '@material-ui/icons/Dashboard';
import AccountBalance from '@material-ui/icons/AccountBalance';

const MyMenu = ({ resources, onMenuClick, logout }) => (
    <div>
        <MenuItemLink
        to="/"
        primaryText="Dashboard"
        leftIcon={<DashBoardIcon />}
        onClick={onMenuClick} />
        {resources.map(resource => (
          <MenuItemLink
          key={resource.name}
          to={`/${resource.name}`}
          primaryText={resource.name}
          leftIcon={createElement(resource.icon)}
          onClick={onMenuClick} />
        ))}
        <MenuItemLink
        to="/custom-route"
        primaryText="Shop"
        leftIcon={<ShopIcon />}
        onClick={onMenuClick} />
        <MenuItemLink
        to="/account-balance"
        primaryText="Account Balance"
        leftIcon={<AccountBalance />}
        onClick={onMenuClick} />
        <Responsive
            small={logout}
            medium={null} 
        />
    </div>
);

const mapStateToProps = state => ({
    resources: getResources(state),
});

export default withRouter(connect(mapStateToProps)(MyMenu));

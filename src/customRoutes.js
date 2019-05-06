import React from 'react';
import { Route } from 'react-router-dom';
import CustomComponent from './CustomComponent';
import Dashboard from './Dashboard';

export default [
    <Route exact path="/" component={Dashboard} />,
    <Route exact path="/custom-route" component={CustomComponent} />
];
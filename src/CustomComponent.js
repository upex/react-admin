import React from 'react';
import { Title } from 'react-admin';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
export default () => (
    <Card>
        <Title title="Not Found" />
        <CardContent>
            <h1>I am custom component</h1>
        </CardContent>
    </Card>
);
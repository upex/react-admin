import React from "react";
import { Notification } from 'react-admin';

const MyNotification = props => (
<Notification {...props}autoHideDuration={5000}>
nomm
</Notification>
);

export default MyNotification;
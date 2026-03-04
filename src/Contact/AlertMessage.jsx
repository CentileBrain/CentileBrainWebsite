/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import Collapse from '@material-ui/core/Collapse'; // Import the animation component

const useStyles = makeStyles(theme => ({
    alertMessage: {
        width: '100%',
    },
}));

export default function AlertMessage({ className, alertHook }) {
    const classes = useStyles();

    // The alert is open if the state is either success or failure
    const isOpen = alertHook.isSuccess() || alertHook.isFailure();
    
    // Default to warning unless it's a success message
    const severity = alertHook.isSuccess() ? 'success' : 'warning';

    return (
        <div className={`${classes.alertMessage} ${className || ''}`}>
            {/* Collapse handles the smooth slide-down and fade-in/out */}
            <Collapse in={isOpen}>
                <Alert
                    severity={severity}
                    onClose={() => {
                        alertHook.switchToIdle('');
                    }}
                >
                    {alertHook.message}
                </Alert>
            </Collapse>
        </div>
    );
}
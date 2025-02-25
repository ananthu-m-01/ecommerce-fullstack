import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import * as React from 'react';

export default function SimpleAlert() {
  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>
  );
}

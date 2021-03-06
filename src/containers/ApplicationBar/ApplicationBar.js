import React, { PureComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class ApplicationBar extends PureComponent {
  render() {
    return (
      <AppBar position="fixed" color="default">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Create React App & Materiality UI
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default ApplicationBar;

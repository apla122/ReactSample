import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Title
          </Typography>
            <IconButton>
              <FaceIcon />
            </IconButton>
        </Toolbar>
      </AppBar>
    </header>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);



// import AppBar from '@material-ui/core/AppBar'
// import Button from '@material-ui/core/Button'
// import { FaceIcon } from '@material-ui/icons/'

// class Header extends Component {
//   render() {
//     return (
//       <header className="header">
//         <AppBar
//           title="ヘッダだYO"
//           iconElementRight={
//             <Button>
//               <FaceIcon />
//             </Button>
//           }
//           showMenuIconButton2={false}
//         />
//       </header>
//     );
//   }
// }

// export default Header;
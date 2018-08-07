import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { routerActions } from 'react-router-redux'
import compose from 'recompose/compose'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FaceIcon from '@material-ui/icons/Face';
import BackIcon from '@material-ui/icons/ArrowBack';


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

var BrowserHistory = require('react-router/lib/browserHistory').default;

class Header extends Component {

  componentWillMount() {
    // console.log('DEBUG location %O', (this.props.location))
  }

  componentDidMount() {
    // console.log('DEBUG location %O', (this.props.location))
  }

  // メニューボタンのコールバック関数
  handleMenuAction() {
  }

  // 画面遷移のコールバック関数
  handleRouterAction() {
    // console.log('DEBUG location %O', (this.props.location.pathname))
    if (this.props.location.pathname == '/') {
    } else {
      this.props.routerActions.goBack()
    }
  }

  render() {
    const { classes } = this.props;
    var menuButtonComponent;
    // console.log('DEBUG location %O', (this.props))
    if (this.props.location.pathname == '/') {
      menuButtonComponent = <MenuIcon onClick={() => { this.handleMenuAction()}} />;
    } else {
      menuButtonComponent = <BackIcon onClick={() => { this.handleRouterAction()}} />;
    }
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              {menuButtonComponent}
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
          </Typography>
            <IconButton>
              <FaceIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    routerActions: bindActionCreators(Object.assign({}, routerActions), dispatch)
  };
}

// export default withStyles(styles)(Header);
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header)
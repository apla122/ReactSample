import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'
import { routerActions } from 'react-router-redux'
import compose from 'recompose/compose'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

import Header from './Header'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 160,
    width: 160,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Main extends Component {

  state = {
    spacing: '16',
  };

  componentWillMount() {
    // console.log('DEBUG location %O', (this.props.location))
  }

  componentDidMount() {
    console.log('DEBUG location %O', (this.props.location))
  }

  render() {
    const { classes } = this.props;
    const { spacing, looting } = this.state

    return (
      <div>
        <Header location={this.props.location} />
        <br />
        <Typography variant="title" gutterBottom>
          メインページです
        </Typography>
        <Link to="Main">Mainへ</Link><br /><br />
        <Grid container className={classes.root} spacing={24}>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {[0, 1].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
              {[0, 1].map(value => (
                <Grid key={value} item>
                  <Paper className={classes.paper} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs >
            <Button variant="raised" color="primary" onClick={() => { this.props.routerActions.push("timeline") }}>タイムラインへ</Button>
          </Grid>
          <Grid item xs >
            <Button variant="outlined" label="LISTへ" onClick={() => { this.props.routerActions.push("SampleParent") }} color="secondary">Sampleへ</Button>
          </Grid>
          <Grid item xs >
            <Button variant="outlined" label="LISTへ" onClick={() => { this.props.routerActions.push("countries") }} color="secondary">国リスト</Button>
          </Grid>
          <Grid item xs >
            <Button variant="outlined" label="signupへ" onClick={() => { this.props.routerActions.push("signup") }} color="secondary">signup</Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    routerActions: bindActionCreators(Object.assign({}, routerActions), dispatch)
  };
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Main);
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Main);
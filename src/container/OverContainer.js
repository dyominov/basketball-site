import React, { Component, Fragment } from 'react';
import { overCurrentTotalAction } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import Over from '../components/Game/Over';

class OverContainer extends Component {
  render() {
    return (
      <Fragment>
        <Over games={this.props.games} overCurrentTotal={this.props.overCurrentTotal} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.games
  };
};
const mapDispatchToProps = dispatch => {
  return {
    overCurrentTotal: game => dispatch(overCurrentTotalAction(game))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverContainer);

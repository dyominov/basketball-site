import React, { Component, Fragment } from 'react';
import { getResultAction } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import ManyInputs from '../components/Game/ManyInputs';

class InputsContainer extends Component {
  render() {
    return (
      <Fragment>
        <ManyInputs games={this.props.games} getResult={this.props.getResult} />
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
    getResult: game => dispatch(getResultAction(game))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputsContainer);

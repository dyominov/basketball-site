import React, { Component, Fragment } from 'react';
import { createGameAction } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import AddGameFast from '../components/Game/AddGameFast';

class AddGameFastContainer extends Component {
  render() {
    return (
      <Fragment>
        <AddGameFast games={this.props.games} createGame={this.props.createGame} />
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
    createGame: game => dispatch(createGameAction(game))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGameFastContainer);

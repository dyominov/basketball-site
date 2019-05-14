import React, { Component, Fragment } from 'react';
import { createGameAction } from '../store/actions/gameActions';
import { connect } from 'react-redux';
import Game from '../components/Game/Game';

class GameContainer extends Component {
  render() {
    return (
      <Fragment>
        <Game games={this.props.games} createGame={this.props.createGame} />
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
)(GameContainer);

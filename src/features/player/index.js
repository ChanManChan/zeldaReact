import React from 'react';
import walkSprite from './player_walk-sprites.png';
import { connect } from 'react-redux';
import handleMovement from './movement';

function Player(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${walkSprite})`,
        backgroundPosition: props.spriteLocation,
        width: '40px',
        height: '40px'
      }}
    />
  );
}
// Maps the state, thats stored inside of our redux store to props of our component (in this case the player component)
function mapStateToProps(state) {
  return {
    ...state.player
  };
}
// handleMovement(Player) <-- allows us to catch the event listener for the keydown event and then handle that keydown with the corresponding function
export default connect(mapStateToProps)(handleMovement(Player));

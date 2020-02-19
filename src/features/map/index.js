import React from 'react';
import { SPRITE_SIZE } from '../../config/constants';
import { connect } from 'react-redux';
import './styles.css';

function getTileSprite(type) {
  switch (type) {
    case 0:
      return 'grass';
    case 3:
      return 'tree';
    case 4:
      return 'chest';
    case 5:
      return 'rock';
    case 6:
      return 'tree';
  }
}

function MapTile(props) {
  // we are going to have a div and the div is going to have a background that is going to describe if its a rock, tree or if its a green path
  return (
    <div
      className={`tile ${getTileSprite(props.tile)}`}
      style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
    />
  );
}
function MapRow(props) {
  // return props.tiles.map(tile => <MapTile value={tile} />)
  return (
    <div className='row' style={{ height: '40px' }}>
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}
function Map(props) {
  return (
    <div
      style={{
        width: '800px',
        height: '480px',
        border: '4px solid white'
      }}
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}

export default connect(mapStateToProps)(Map);

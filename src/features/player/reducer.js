/* This file is going to be responsible for dealing with the state that our player component needs
The way that reducers work is they map state to props and they map dispatch to props..which means that whatever state is in the reducer, will actually get mapped to the props of the component, so instead of having to do something get the state out of the redux store all we have to do is, props.'whatever the key is we are trying to get'
*/
const initialState = {
  position: [0, 0],
  spriteLocation: '0px 0px',
  direction: 'east',
  walkIndex: 0
};
const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MOVE_PLAYER':
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
export default playerReducer;

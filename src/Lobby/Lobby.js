import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Lobby.scss';

export class Lobby extends Component {
  constructor( props ) {
    super(props);
    this.state = {
      roomID: null,
      newRoomName: '',
      newUserName: ''
    }
  }

  render() {
    let rooms;
      if (this.props.rooms.length) {
        rooms = (
          <div className="room-list">
            <select
              size="8"
              className="room-list-select"
              onChange={(e) => this.setState({roomID: e.target.value})}
            >{this.props.rooms.map((roomName, i) => {
              return (
                <option key={i} value={roomName}>{roomName}</option>
              )
            })}
            </select>
            <button
              className="join-room-btn"
              data-testid="join-room-btn"
              onClick={() => this.props.joinRoom(this.state.roomID)}
            >Join room!</button>
          </div>
        );
      } else {
        rooms = <h3>Seems like there are no open rooms. Use the form below to open one!</h3>;
      }

    return (
      <div className="lobby" data-testid="lobby">
        <h1><em>Create a username</em></h1>
        <form>
          <label>
            <input
              className="username-input"
              type="text"
              onChange={(e) => this.setState({newUserName: e.target.value})}
              placeholder="Username"
            />
          </label>
          <input
            className="username-btn"
            type="submit"
            value="Submit"
            data-testid='test-username-btn'
            onClick={(e) => {
              e.preventDefault();
              this.props.setUserName(this.state.newUserName)
            }}
          />
        </form>
        <h1><em>Available Rooms</em></h1>
        {rooms}
        <form>
          <label>
            <input
              className="new-room-input"
              type="text"
              onChange={(e) => this.setState({newRoomName: e.target.value})}
              placeholder="Room ID"
            />
          </label>
          <input
            className="new-room-btn"
            type="submit"
            value="Submit"
            placeholder="Create"
            data-testid='create-room-btn'
            onClick={(e) => {
              e.preventDefault();
              this.props.createRoom(this.state.newRoomName)
            }}
          />
        </form>
      </div>
    )
  }
}

Lobby.propTypes = {
  rooms: PropTypes.array,
  createRoom: PropTypes.func,
  joinRoom: PropTypes.func,
  setUserName: PropTypes.func,
}

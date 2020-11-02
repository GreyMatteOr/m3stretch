import PropTypes from 'prop-types';
import './Homepage.css';

export const Homepage = (props) => {
  return (
    <div className="homepage" data-testid="homepage">
      <h1><em>Choose a role</em></h1>
      <div className="character-select">
        <button
          className="generator"
          disabled={this.props.hasGenerator}
          onClick={() => {
            props.designateRole(true)
          }}>
          Generator
        </button>
        <button
          className="guesser"
          onClick={() => {
            props.designateRole(false)
          }
        }>
          Guesser
        </button>
      </div>
      <h1><em>Score: </em></h1>
    </div>
  )
}


Homepage.propType = {
  designateRole: PropTypes.func,
}

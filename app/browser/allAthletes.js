import React from 'react';
import { Col, Row, Input, Button, Card} from 'react-materialize';
import {Link} from 'react-router';

class AllAthletes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.props.getAthletes()
  }


  render() {
    return (
      <div>
        <h2>All Athletes</h2>
        <button> <Link to={`/add`}>Add Athlete</Link> </button>
          <div className="table">
            <table id="table">
              <thead>
                <tr>
                  <th id="name">Name</th>
                  <th id="birthday">Birthday</th>
                  <th id="nationality">Nationality</th>
                  <th id="Team">Team</th>
                </tr>
              </thead>
              <tbody>
              {this.props.Athletes && this.props.Athletes.map((athletes, idx)=> (
                <tr key={idx} id={athletes.id}>
                  <td><Link to={`/athlete/${athletes.id}`}>{athletes.firstName} {athletes.lastName}</Link></td>
                  <td>{athletes.birthday.slice(0,10)}</td>
                  <td>{athletes.nationality}</td>
                  <td>{athletes.Team.team}</td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
      </div>
    )
  }

}

/* -----------------    CONTAINER     ------------------ */
import {connect} from 'react-redux'
import {createAthlete, getAllAthletes} from '../reducers/reducer'

const mapState = (state) => ({
  Athletes: state.Athletes
});

const mapDispatch = { getAthletes: getAllAthletes };

export default connect(mapState, mapDispatch)(AllAthletes);

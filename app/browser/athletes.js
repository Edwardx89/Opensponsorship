import React from 'react';
import { browserHistory, Redirect, Link } from 'react-router';

class Athletes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadSports();
    this.props.loadTeams();
  }

  onSignupSubmit(evt) {
    console.log('event', evt.target)
    const sportData = document.getElementById('sport').selectedIndex;
    const teamData = document.getElementById('team').selectedIndex;
    evt.preventDefault()
    const form = evt.target
    const athlete = {
      firstName: form.first_name.value,
      lastName: form.last_name.value,
      SportId: sportData,
      TeamId: teamData,
      nationality: form.nationality.value,
      gender: form.gender.value,
      birthday: form.birthday.value,
      email: form.email.value,
      location: form.location.value,
      twitter: form.twitter.value,
      facebook: form.facebook.value,
      instagram: form.instagram.value,
      description: form.description.value,
    }
    this.props.onSignupSubmit(athlete);
  }
  render() {
    console.log('state', this.state)
    console.log('props', this.props)

    return (
      <div>
       <button> <Link to={`/`}>Home</Link> </button>
        <h2>Add New Athlete</h2>
        <div className="row">
          <form className="col s12" onSubmit={this.onSignupSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <input name="first_name" type="text" className="validate" />
                <label for="first_name">First Name</label>
              </div>
              <div className="input-field col s5">
                <input id="last_name" type="text" className="validate" />
                <label for="last_name">Last Name</label>
              </div>
                <div className="input-field col s2">
                <input id="gender" type="text" className="validate" />
                <label for="gender">Male/Female</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="birthday" type="text" className="validate" />
                <label for="birthday">Birthday</label>
              </div>
              <div className="input-field col s4">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            <div className="input-field col s4">
                <input id="nationality" type="text" className="validate" />
                <label for="nationality" data-error="wrong" data-success="right">Nationality</label>
              </div>
            </div>
            <div className="row">
               <div className="input-field col s4">
                <input id="location" type="text" className="validate" />
                <label for="location">Location</label>
              </div>
              </div>
              <div className="row">
              <div class="input-field col s4">
                <select id="sport" className="validate">
                  <option DefaultValue="" disabled selected>Sport</option>
                  {this.props.Sports && this.props.Sports.map(sports => (
                    <option id={sports.id} key={sports.id} value={sports.sport}>{sports.sport}</option>
                  ))}
                </select>
            </div>
            <div class="input-field col s4">
                <select id="team" className="validate">
                  <option Defaultvalue="" disabled selected>Team</option>
                  {this.props.Teams && this.props.Teams.map(teams => (
                    <option id={teams.id} key={teams.id} value={teams.team}>{teams.team}</option>
                  ))}
                </select>
            </div>
            </div>
            <div className="about">
            <div className="row">
              <div className="input-field col s12">
                <input id="description" type="text"  />
                <label for="description">About Me</label>
              </div>
            </div>
            </div>
            <h5>Social Media:</h5>
            <div className="row">
            <div className="input-field col s4">
                <input id="twitter" type="text" />
                <label for="twitter" data-error="wrong" data-success="right">Twitter</label>
            </div>
            <div className="input-field col s4">
                <input id="facebook" type="text"  />
                <label for="facebook" data-error="wrong" data-success="right">Facebook</label>
            </div>
            <div className="input-field col s4">
                <input id="instagram" type="text"  />
                <label for="instagram" data-error="wrong" data-success="right">Instagram</label>
            </div>
            </div>
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              </button>
          </form>


        </div>
      </div>
    )
  }

}

/* -----------------    CONTAINER     ------------------ */
import {connect} from 'react-redux'
import {createAthlete, loadSports, loadTeams} from '../reducers/reducer'

const mapState = (state) => {
  console.log('Map state', state)
  return {
    Sports: state.Sports,
    Teams: state.Teams,
  }
}

const mapDispatch = {
  onSignupSubmit: createAthlete,
  loadSports: loadSports,
  loadTeams: loadTeams
};

export default connect(mapState, mapDispatch)(Athletes);

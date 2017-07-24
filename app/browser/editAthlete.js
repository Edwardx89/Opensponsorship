import React from 'react';
import { Col, Row, Input, Button, Card} from 'react-materialize';
import {Link, browserHistory, Redirect} from 'react-router';

class EditAthlete extends React.Component {
  constructor(props) {
    super(props);
    this.onSignupSubmit = this.onSignupSubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadSports();
    this.props.loadTeams();
  }

  onSignupSubmit(evt) {
    console.log('event', evt.target)
    const profile = this.props.SingleAthlete[0]
    const sportData = function (){
      if((document.getElementById('sport').selectedIndex) === 0){
        return profile.Athlete.Sport.id
      } else {
        return (document.getElementById('sport').selectedIndex)
      }
    }
    const teamData = function (){
      if((document.getElementById('team').selectedIndex) === 0){
        return profile.Athlete.Team.id
      } else {
        return ((document.getElementById('team').selectedIndex))
      }
    }

    evt.preventDefault()
    const form = evt.target
    const getValue = ''
    const athlete = {
      firstName: form.first_name.value,
      lastName: form.last_name.value,
      SportId: sportData(),
      TeamId: teamData(),
      nationality: form.nationality.value,
      gender: form.gender.value,
      birthday: form.birthday.value,
      email: form.email.value,
      location: form.location.value,
      twitter: form.twitter.value,
      facebook: form.facebook.value,
      instagram: form.instagram.value,
      description: form.description.value,
      AthleteId: this.props.SingleAthlete[0].AthleteId
    }
    console.log('event', evt.target.name, athlete)
    this.props.onUpdate(athlete);
    browserHistory.push('/')
  }

  render() {
    console.log('state', this.state)
    console.log('props', this.props)
    const aboutMe = this.props.SingleAthlete[0];
    if (!aboutMe) return null
    const athlete = aboutMe.Athlete
    return (
      <div>
        <h2>{athlete.firstName} {athlete.lastName} Profile</h2>
        <div className="row">
          <form className="col s12" onSubmit={this.onSignupSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <input name="first_name" type="text" defaultValue={athlete.firstName}/>
                <label className="active" for="first_name">FirstName</label>
              </div>
              <div className="input-field col s5">
                <input id="last_name" type="text" defaultValue={athlete.lastName} />
                <label className="active" for="last_name">Last Name</label>
              </div>
              <div className="input-field col s2">
                <input id="gender" type="text"  defaultValue={athlete.gender}/>
                <label className="active" for="gender">Male/Female</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="birthday" type="text"  defaultValue={athlete.birthday.slice(0,10)}/>
                <label className="active" for="birthday">Birthday</label>
              </div>
              <div className="input-field col s4">
                <input id="email" type="email"  defaultValue={athlete.email}/>
                <label className="active" for="email">Email</label>
              </div>
              <div className="input-field col s4">
                <input id="nationality" type="text"  defaultValue={athlete.nationality}/>
                <label className="active" for="nationality" data-error="wrong" data-success="right">Nationality</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="location" type="text"  defaultValue={aboutMe.location}/>
                <label className="active" for="location">Location</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s4">
                <select id="sport" >
                  <option defaultValue={athlete.Sport.sport} disabled selected>{athlete.Sport.sport}</option>
                   {this.props.Sports && this.props.Sports.map(sports => (
                    <option id={sports.id} key={sports.id} value={sports.sport}>{sports.sport}</option>
                  ))}
                </select>
              </div>
              <div class="input-field col s4">
                <select id="team" >
                  <option defaultValue={athlete.Team.team} disabled selected>{athlete.Team.team}</option>
                    {this.props.Teams && this.props.Teams.map(teams => (
                    <option id={teams.id} key={teams.id} value={teams.team}>{teams.team}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="about">
              <div className="row">
                <div className="input-field col s12">
                  <input id="description" type="text" defaultValue={aboutMe.description}/>
                  <label className="active" for="description">About Me</label>
                </div>
              </div>
            </div>
            <h5>Social Media:</h5>
            <div className="row">
              <div className="input-field col s4">
                <input id="twitter" type="text" defaultValue={athlete.SocialMedium.twitter}/>
                <label className="active" for="twitter" data-error="wrong" data-success="right">Twitter</label>
              </div>
              <div className="input-field col s4">
                <input id="facebook" type="text" defaultValue={athlete.SocialMedium.facebook}/>
                <label className="active" for="facebook" data-error="wrong" data-success="right">Facebook</label>
              </div>
              <div className="input-field col s4">
                <input id="instagram" type="text" defaultValue={athlete.SocialMedium.instagram}/>
                <label className="active" for="instagram" data-error="wrong" data-success="right">Instagram</label>
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
import {createAthlete, getAllAthletes, getAthleteById, loadSports, loadTeams, updateProfile} from '../reducers/reducer'

const mapState = (state) => {
console.log('this is state in mapstate', state)
return {
  SingleAthlete: state.SingleAthlete,
  Sports: state.Sports,
  Teams: state.Teams,
}};

const mapDispatch = {
  onSignupSubmit: createAthlete,
  loadSports: loadSports,
  loadTeams: loadTeams,
  onUpdate: updateProfile,
};

export default connect(mapState, mapDispatch)(EditAthlete);



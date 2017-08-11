import React from 'react';
import { Col, Row, Input, Button, Card} from 'react-materialize';
import {Link} from 'react-router';

class SingleAthlete extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onClickHandler (id){

  }

  render() {
    const aboutMe = this.props.SingleAthlete[0];
    if (!aboutMe) return null
    const athlete = aboutMe.Athlete
    return (
      <div>
        <h2>{athlete.firstName} {athlete.lastName} Profile</h2>
          <button> <Link to={`/athlete/${athlete.id}/edit`}>Edit</Link> </button>
          <button> <Link to={`/`}>Home</Link> </button>
        <div className="row">
          <form className="col s12" onSubmit={this.onSignupSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <input name="first_name" type="text" value={athlete.firstName}/>
                <label className="active" for="first_name">FirstName</label>
              </div>
              <div className="input-field col s5">
                <input id="last_name" type="text" value={athlete.lastName} />
                <label className="active" for="last_name">Last Name</label>
              </div>
              <div className="input-field col s2">
                <input id="gender" type="text"  value={athlete.gender}/>
                <label className="active" for="gender">Male/Female</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="birthday" type="text"  value={athlete.birthday.slice(0,10)}/>
                <label className="active" for="birthday">Birthday</label>
              </div>
              <div className="input-field col s4">
                <input id="email" type="email"  value={athlete.email}/>
                <label className="active" for="email">Email</label>
              </div>
              <div className="input-field col s4">
                <input id="nationality" type="text"  value={athlete.nationality}/>
                <label className="active" for="nationality" data-error="wrong" data-success="right">Nationality</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4">
                <input id="location" type="text"  value={aboutMe.location}/>
                <label className="active" for="location">Location</label>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s4">
                <select id="sport" >
                  <option value={athlete.Sport.sport} disabled selected>{athlete.Sport.sport}</option>
                </select>
              </div>
              <div class="input-field col s4">
                <select id="team" >
                  <option value={athlete.Team.team} disabled selected>{athlete.Team.team}</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="about">
              <div className="row">
                <div className="input-field col s12">
                  <input id="description" type="text" value={aboutMe.description}/>
                  <label className="active" for="description">About Me</label>
                </div>
              </div>
            </div>
            <h5>Social Media:</h5>
            <div className="row">
              <div className="input-field col s4">
                <input id="twitter" type="text" value={athlete.SocialMedium.twitter}/>
                <label className="active" for="twitter" data-error="wrong" data-success="right">Twitter</label>
              </div>
              <div className="input-field col s4">
                <input id="facebook" type="text" value={athlete.SocialMedium.facebook}/>
                <label className="active" for="facebook" data-error="wrong" data-success="right">Facebook</label>
              </div>
              <div className="input-field col s4">
                <input id="instagram" type="text" value={athlete.SocialMedium.instagram}/>
                <label className="active" for="instagram" data-error="wrong" data-success="right">Instagram</label>
              </div>
              </div>

          </form>


        </div>
      </div>
    )
  }

}

/* -----------------    CONTAINER     ------------------ */
import {connect} from 'react-redux'
import {createAthlete, getAllAthletes, getAthleteById} from '../reducers/reducer'

const mapState = (state) => {
console.log('this is state in mapstate', state)
return {
  SingleAthlete: state.SingleAthlete
}};

const mapDispatch = { getAthlete: getAthleteById };

export default connect(mapState, mapDispatch)(SingleAthlete);



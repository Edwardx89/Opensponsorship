import axios from 'axios'

/* -------------------<   ACTIONS   >--------------------- */
const GET_ATHLETES = "GET_ATHLETES";
const FIND_ATHLETE = "FIND_ATHLETE";
const ADD_ATHLETES = "ADD_ATHLETES";
const GET_SPORTS = "GET_SPORTS";
const GET_TEAMS = "GET_TEAMS";
const UPDATE_ATHLETE = "UPDATE_ATHLETE";

/* ---------------<   ACTION CREATORS   >------------------- */

export const getAthletes = (Athletes) => ({
  type: GET_ATHLETES,
  Athletes: Athletes
})
export const findAthlete = (SingleAthlete) => ({
  type: FIND_ATHLETE, SingleAthlete
})
export const addAthlete = (Athletes) => ({
  type: ADD_ATHLETES, Athletes
})
export const getSports = (Sports) => ({
  type: GET_SPORTS, Sports
})
export const getTeams = (Teams) => ({
  type: GET_TEAMS, Teams
})
export const updateAthlete = (SingleAthlete) => ({
  type: UPDATE_ATHLETE, SingleAthlete
})
/* -------------------<   REDUCERS   >--------------------- */

const initialState = {
  Athletes: [],
  Sports: [],
  SingleAthlete: [],
  Teams: []

}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_ATHLETES:
      return Object.assign({}, state, action);
    case ADD_ATHLETES:
      return Object.assign({}, state, action);
    case FIND_ATHLETE:
      return Object.assign({}, state, action);
    case GET_SPORTS:
      return Object.assign({}, state, action);
    case GET_TEAMS:
      return Object.assign({}, state, action);
    case UPDATE_ATHLETE:
      return Object.assign({}, state, action);
      default: return state;
  }
}

/* ------------------<   DISPATCHERS   >-------------------- */

export const getAllAthletes= () => dispatch => {
  axios.get('/api/athletes')
  .then((res) => res.data)
  .then((data) => dispatch(getAthletes(data)))
  .catch(err => console.log(err))
}

export const createAthlete = (athlete) => dispatch => {
  console.log('hitting reducer post', athlete)
  axios.post('/api/athlete', athlete)
  .then((res) => res.data)
  .then((data) => dispatch(addAthlete(athlete)))
  .catch(err => console.log(err))
}

export const loadSports = () => dispatch => {
  console.log('hitting reducer get sports')
  axios.get('/api/sports')
  .then((res) => res.data)
  .then((data) => dispatch(getSports(data)))
  .catch(err => console.log(err))
}

export const loadTeams = () => dispatch => {
  console.log('hitting reducer get sports')
  axios.get('/api/teams')
  .then((res) => res.data)
  .then((data) => dispatch(getTeams(data)))
  .catch(err => console.log(err))
}
export const getAthleteById = (id) => dispatch => {
  axios.get(`/api/athlete/${id}`)
  .then((res) => res.data)
  .then((data) => dispatch(findAthlete(data)))
  .catch(err => console.log(err))
}

export const updateProfile = (data) => dispatch => {
  console.log(data)
  const id = data.AthleteId;
  axios.put(`/api/athlete/${id}`, data)
  .then((res) => res.data)
  .catch(err => console.log(err))
}
export default reducer;

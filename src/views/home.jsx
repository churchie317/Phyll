import $            from 'jquery';
import React        from 'react';
import { render }   from 'react-dom';
import { Link }     from 'react-router';

import Users        from '../components/users.jsx';
import Search       from '../components/searchBar.jsx';
import PlantFacts   from '../components/plantFacts.jsx';
import UserInfo     from '../components/userInfo.jsx';
import Login        from '../components/login.jsx';
import Logout       from '../components/logout.jsx';
import Map          from '../components/map/index.jsx';
import Chatbot      from '../components/chatbot.jsx';
import AddPlant     from '../components/addPlant.jsx';
import Dashboard    from '../components/dashboard/dashboardMain.jsx';
import Footer       from '../components/footer.jsx';

import { _getGarden, _getPlants, _fetchPlant, _getUser, _loadRawData } from '../redux/actions/helpers';
import { toggleNewPlant, setUser, setDashboardDisplay } from '../redux/actions/actions';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlants();
    this.props.fetchGarden();
    if (this.props.id){
     this.props.fetchUserPlantGeneric(this.props.id);
    };
  }

  // TODO: The initial div needs to go in refactor as it is duplicated in nav

  render() {

    let dashboard = this.props.dashboardDisplay ? <Dashboard id="dashboard" { ...this.props }/> : <div id="dashboard"></div>;
    let plantFacts = this.props.plantFacts ? <PlantFacts id="plantFacts" { ...this.props }/> : <div id="plantFacts"></div>;

    return(

      <div className="container-fluid">
        <div className="row search">
          <div className="column jumbotron jumbo-bg">

          { this.props.plants ?

            <Search className="form-control form-control-lg" { ...this.props } />
          :

            null

          }

          </div>
        </div>

        { plantFacts }

        { dashboard }

        <div className="row content">
          <div className="content-2 col-lg-7 push-lg-5 container-fluid">
            <div className="card-wrapper">

              <Chatbot { ...this.props }/>

              <div className="card">
                <div className="card-header">
                  Conservatory
                </div>
                <div className="card-block">
                  <p className="card-text">There are so many wonderful plants for your home. <Link to="/conservatory">Discover the perfect one</Link>.</p>
                </div>
              </div>
              <div className="card hidden-xs hidden-sm">
                <div className="card-header">
                  Active Bots
                </div>
                <Map/>
              </div>
              <div className="card">
                <div className="card-header">
                  Make a phyll.bot of your own
                </div>
                <div className="card-block">
                  <p className="card-text">Get on the map with your very own bot. <a href="https://github.com/housephillips2/PhyllOS">PhyllOS is yours</a> to perfect.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-1 col-lg-5 pull-lg-7 container-fluid">

            <Users { ...this.props }/>

          </div>
        </div>

        <Footer { ...this.props} />

      </div>

    );

  }
}

function mapDispatchToProps(dispatch) {
  return {
    rawData               : (deviceId) => dispatch(_loadRawData(deviceId)),
    fetchUser             : () => dispatch(setUser()),
    fetchGarden           : () => dispatch(_getGarden()),
    fetchPlants           : () => dispatch(_getPlants()),
    toggleNewPlant        : () => dispatch(toggleNewPlant()),
    fetchPlant            : (plant) => dispatch(_fetchPlant(plant)),
    fetchUserPlantGeneric : (userId) => dispatch(_fetch_User_Plants(userId)),
    setDashboardDisplay   : (displayUser) => dispatch(setDashboardDisplay(displayUser)),
  };
}

function mapStateToProps(state) {
  return {
    plants: state.getIn([ 'plants', 'plants' ]),
    garden: state.getIn([ 'garden', 'garden' ]),
    user_plants: state.getIn([ 'user', 'user_plants' ]),
    loggedIn: state.get('loggedIn'),
    username: state.getIn([ 'user', 'name' ]),
    image: state.getIn([ 'user', 'image' ]),
    plant_generic: state.getIn([ 'user', 'generic' ]),
    firstName: state.getIn([ 'user', 'firstName' ]),
    lastName: state.getIn([ 'user', 'lastName' ]),
    plantFacts: state.getIn(['plantFacts', 'plantFacts']),
    id: state.getIn([ 'user', 'id' ]),
    newPlant: state.get('newPlant'),
    dashboardDisplay: state.get('dashboardDisplayUser')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

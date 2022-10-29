import React from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
  //Babel will take care of this
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, long: null, errorMessage: "" };
  // }
  // new way is
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.setState({ lat: pos.coords.latitude, long: pos.coords.longitude });
        console.log(pos);
      },

      (err) => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  renderContent() {
    return (
      <div>
        <div className="main-page">
          {this.state.errorMessage && !this.state.lat ? (
            <h1>{this.state.errorMessage}!!!</h1>
          ) : !this.state.errorMessage && this.state.lat ? (
            <SeasonDisplay lat={this.state.lat} />
          ) : (
            <Spinner message="Please click 'Allow' to get your location" />
          )}
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;

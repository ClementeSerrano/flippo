import React, { Component } from "react";
import Camera from "../../components/Camera";

//no person or abstract n

export default class extends Component {
  state = {
    timer: 25,
    target: null,
    draw: null
  };

  static navigationOptions = {
    headerTitle: "Challenge"
  };

  handleDraw = draw => {
    this.setState({ draw: draw });
  };

  handleTime = () => {
    clearInterval(this.interval);
  };

  render() {
    const { draw, timer } = this.state;
    return (
      <Camera
        draw={draw}
        timer={timer}
        handleDraw={this.handleDraw}
        handleTime={this.handleTime}
      />
    );
  }

  componentDidMount() {
    this.setState({
      target: this.props.navigation.getParam("itemKey", "NO-ID")
    });
    this.interval = setInterval(() => {
      this.setState(prevState => ({ timer: prevState.timer - 1 }));
    }, 1000);
  }

  componentDidUpdate() {
    const { draw, timer, target } = this.state;

    if (draw === null && timer < 1) {
      clearInterval(this.interval);
      alert("Time out!");
      this.props.navigation.navigate("Challenge");
    } else if (draw !== null) {
      if (draw === target) {
        alert("Correct drawing! Draw: " + draw + " Target: " + target);
      } else {
        alert("Wrong drawing! Draw: " + draw + " Target: " + target);
      }
      this.props.navigation.navigate("Challenge");
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

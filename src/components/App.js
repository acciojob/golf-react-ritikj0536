import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };

    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this); // ✅ bind
  }

  // Start button click
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Handle ArrowRight key
  handleKeyDown(event) {
    if (event.keyCode === 39) {
      this.setState((prevState) => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }
        };
      });
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return (
        <div
          className="ball"
          style={{
            position: "relative", // ✅ important
            left: this.state.ballPosition.left
          }}
        ></div>
      );
    } else {
      return (
        <button
          className="start" // ✅ required
          onClick={this.buttonClickHandler}
        >
          Start
        </button>
      );
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return <div className="playground">{this.renderBallOrButton()}</div>;
  }
}

export default App;

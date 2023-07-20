import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Home extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  render() {
    return (
      <div className="container">
        <Button
          bsStyle="primary"
          className="btn-margin"
          onClick={this.goTo.bind(this, "result")}
        >
          Result
        </Button>
      </div>
    );
  }
}

export default Home;

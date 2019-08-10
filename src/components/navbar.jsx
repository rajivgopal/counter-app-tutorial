import React, { Component } from "react";

// export default Navbar;
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a href="#" className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounts}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
